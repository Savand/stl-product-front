import {AfterViewInit, Component, OnInit} from '@angular/core';
import {LikeEventArgs} from "./like/like.component";
import * as $ from "jquery";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'stl-product-front';

  switchSelected(args: LikeEventArgs) {
    console.log("Like changed: " + args)
  }


}




