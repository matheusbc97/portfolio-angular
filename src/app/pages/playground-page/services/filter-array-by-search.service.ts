export class FilterArrayBySearchService<T> {
  data: T[] = [];

  public filteredData: T[] = [];

  constructor(data: T[], private selector: (item:T) => string){
    this.data = data;
    this.filteredData = structuredClone(data)
  }

  filter(search: string | undefined | null) {
    if(!search){
      this.filteredData = this.data;
      return;
    }

    this.filteredData = this.data.filter((item) => {
      return this.selector(item).toLowerCase().includes(search.toLowerCase());
    });
  }
}
