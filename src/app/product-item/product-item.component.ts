import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {

  @Input("p-name") private _name: string;
  @Input("p-description") private _description: string;
  @Input("p-price") private _price: number;
  @Input("p-path") private _path: string;


  get name(): string {
    return this._name;
  }

  get description(): string {
    return this._description;
  }

  get price(): number {
    return this._price;
  }

  get path(): string {
    return this._path;
  }
}
