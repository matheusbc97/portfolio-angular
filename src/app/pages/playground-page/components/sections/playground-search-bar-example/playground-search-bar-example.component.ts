import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { productsMock } from 'src/app/shared/mocks/products';
import { FilterArrayBySearchService } from '../../../services/filter-array-by-search.service';

@Component({
  selector: 'app-playground-search-bar-example',
  templateUrl: './playground-search-bar-example.component.html',
  styleUrls: ['./playground-search-bar-example.component.scss']
})
export class PlaygroundSearchBarExampleComponent {
  searchForm = new FormGroup({
    search: new FormControl(''),
  });

  filteredProducts = new FilterArrayBySearchService(productsMock, item => item.name);

  onSearchChange() {
    const {search} = this.searchForm.value;

    this.filteredProducts.filter(search);
  }
}
