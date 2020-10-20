import { Component, OnInit } from '@angular/core';
import {NgModel} from "@angular/forms";

@Component({
  selector: 'my-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent{
  get categoryList(): ({ name: string; id: number } | { name: string; id: number } | { name: string; id: number })[] {
    return this._categoryList;
  }

  private _categoryList = [
    {"id": 1, "name": "front-end"},
    {"id": 2, "name": "back-end"},
    {"id": 3, "name": "devops"}
  ]

  log(courseNameModel: NgModel) {
    console.log(courseNameModel);
  }
}
