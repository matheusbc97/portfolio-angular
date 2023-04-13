import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

interface Product {
  name: string;
  description: string;
}

@Component({
  selector: 'app-playground-crud-products',
  templateUrl: './playground-crud-products.component.html',
  styleUrls: ['./playground-crud-products.component.scss']
})
export class PlaygroundCrudProductsComponent {
  suggestionForm = new FormGroup({
    text: new FormControl(''),
  });

  public products  = new Set<string>();

  constructor() { }

  createProduct() {
    const {text} = this.suggestionForm.value;

    if( !text) {
      return;
    }

    this.products.add(text);
  }

  deleteProduct(product: string) {
    this.products.delete(product);
  }
}
