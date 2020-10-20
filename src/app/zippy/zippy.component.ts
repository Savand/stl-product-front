import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.css']
})
export class ZippyComponent {

  @Input() title : String;
  private _isActive: boolean;

  toggle(){
    this._isActive = !this._isActive;
  }

  get isActive(): boolean {
    return this._isActive;
  }






}
