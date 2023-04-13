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
  productForm = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
  });

  public products: Product[]  = []

  constructor() { }

  createProduct() {
    const {description, name} = this.productForm.value;

    console.log('createProduct', this.productForm.value);

    if( !name) {
      return;
    }

    this.products.push({description: '', name});
  }

  deleteProduct(index: number) {
    console.log('deleteProduct', index);
    this.products.splice(index, 1);
  }
}
