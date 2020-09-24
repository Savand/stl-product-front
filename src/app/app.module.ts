import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ProductComponent} from './product/product.component';
import {LikeComponent} from './like/like.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FooterComponent} from './footer/footer.component';
import {HeaderComponent} from './header/header.component';
import {allIcons, HeartFill, NgxBootstrapIconsModule} from "ngx-bootstrap-icons";

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    LikeComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgxBootstrapIconsModule,
    NgxBootstrapIconsModule.pick(allIcons),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
