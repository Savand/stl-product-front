import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

export interface LikeEventArgs{
  isChanged : boolean;
}

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent {

  @Input("likes-count") private _totalLikes: number;
  @Input("is-active") private _isSelected: boolean;
  @Output("is-changed") private _isChanged = new EventEmitter();

  switchSelected() {
    this._isSelected = !this._isSelected;
    this._totalLikes += this._isSelected ? 1 : -1;
    this._isChanged.emit({isChanged : this._isSelected});
  }

  get totalLikes(): number {
    return this._totalLikes;
  }

  get isSelected(): boolean {
    return this._isSelected;
  }

  get isChanged(): EventEmitter<any> {
    return this._isChanged;
  }


}
