import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";


const PROODUCT_BASE_URL = 'http://localhost:8080/api/products';

interface ProductItem {
  name: string;
  description: string;
  price: number;
  picturePath: string;
}

interface ProductRestResponse {
  page: Object;
  _embedded: {
    products: ProductItem[];
  }
}

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  private _products: ProductItem[];

  constructor(http : HttpClient) {
    http.get(PROODUCT_BASE_URL)
      .subscribe(response  => {
        // console.log(response);
        this._products = (response as ProductRestResponse)._embedded.products;
      });

  }


  get products(): ProductItem[] {
    return this._products;
  }
}
