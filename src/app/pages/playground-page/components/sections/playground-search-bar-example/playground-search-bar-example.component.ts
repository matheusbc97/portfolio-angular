import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SearchProductService } from './observables/search-product.service';

@Component({
  selector: 'app-playground-search-bar-example',
  templateUrl: './playground-search-bar-example.component.html',
  styleUrls: ['./playground-search-bar-example.component.scss']
})
export class PlaygroundSearchBarExampleComponent implements OnInit, OnDestroy {
  searchForm = new FormGroup({
    search: new FormControl(''),
  });

  searchProductsService = new SearchProductService(this.searchForm.valueChanges);

  ngOnInit() {
  }

  ngOnDestroy() {
    this.searchProductsService.unsubscribe();
  }
}
