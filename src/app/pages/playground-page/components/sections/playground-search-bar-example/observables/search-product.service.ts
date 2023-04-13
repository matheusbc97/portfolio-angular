import { productsMock } from 'src/app/shared/mocks/products';

import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { Observable, Subscription } from 'rxjs';
import { FilterArrayBySearchService } from 'src/app/pages/playground-page/services/filter-array-by-search.service';

function searchOperator() {
  return function<T>(source: Observable<T>) {
    return source.pipe(
      debounceTime(500),
      distinctUntilChanged()
    );
  }
}

export class SearchProductService  {
  filteredProducts = new FilterArrayBySearchService(productsMock, item => item.name);

  private searchSubscription: Subscription | undefined;
  observable: Observable<{
    id: number;
    name: string;
  }[]>;

  constructor(
    valueChanges: Observable<Partial<{
      search: string | null;
    }>>,
  ){
    this.observable = new Observable((observer) => {
      observer.next(this.filteredProducts.filteredData);

      this.searchSubscription = valueChanges.pipe(
        map(value => value.search),
        searchOperator(),
      ).subscribe(
        search => {
          this.filteredProducts.filter(search)
          observer.next(this.filteredProducts.filteredData);
        }
      );
    })
  }

  unsubscribe(){
    if(this.searchSubscription)
      this.searchSubscription.unsubscribe();
  }
}
