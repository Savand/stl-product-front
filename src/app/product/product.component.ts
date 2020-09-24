import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  private _name: String;
  private _description: String;
  private _picturePath: String;
  private _price: Number;

  ngOnInit(): void {}


  get name(): String {
    return this._name;
  }

  get description(): String {
    return this._description;
  }

  get picturePath(): String {
    return this._picturePath;
  }

  get price(): Number {
    return this._price;
  }
}
