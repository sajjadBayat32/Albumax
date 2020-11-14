import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { PagePostComponent } from './page-post/page-post.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyNgZorroAntdModule } from '@ngx-formly/ng-zorro-antd';
import {AppRoutingModule} from "./app-routing.module";
import { PostImagesComponent } from './page-post/post-images/post-images.component';
import { PostConfigComponent } from './page-post/post-config/post-config.component';
import { PostPriceComponent } from './page-post/post-price/post-price.component';
import {NgZorroModule} from "./ng-zorro-.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {AppPipesModule} from "./app-pipes.module";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    FooterComponent,
    PagePostComponent,
    PostImagesComponent,
    PostConfigComponent,
    PostPriceComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AppPipesModule,
    NgZorroModule,
    FormlyModule.forRoot({extras: {lazyRender: true}}),
    FormlyNgZorroAntdModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
