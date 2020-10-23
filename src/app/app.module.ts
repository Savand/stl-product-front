import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ProductComponent} from './product/product.component';
import {LikeComponent} from './like/like.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FooterComponent} from './footer/footer.component';
import {HeaderComponent} from './header/header.component';
import {allIcons, HeartFill, NgxBootstrapIconsModule} from "ngx-bootstrap-icons";
import { ZippyComponent } from './zippy/zippy.component';
import { FormComponent } from './form/form.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { InputFormattingDirective } from './input-formatting.directive';
import { PasswordChangeComponent } from './password-change/password-change.component';
import {HttpClientModule} from "@angular/common/http";
import { ProductItemComponent } from './product-item/product-item.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { CarouselComponent } from './carousel/carousel.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MainBodyComponent } from './main-body/main-body.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    LikeComponent,
    FooterComponent,
    HeaderComponent,
    ZippyComponent,
    FormComponent,
    InputFormattingDirective,
    PasswordChangeComponent,
    ProductItemComponent,
    CarouselComponent,
    NavbarComponent,
    MainBodyComponent
  ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        NgxBootstrapIconsModule,
        NgxBootstrapIconsModule.pick(allIcons),
        FormsModule,
        ReactiveFormsModule,
      HttpClientModule,
      MDBBootstrapModule.forRoot()
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
