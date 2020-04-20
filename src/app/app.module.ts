import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './components/header/header.component';
import {MainComponent} from './components/main/main.component';
import {ItemComponent} from './components/item/item.component';
import {BucketComponent} from './components/bucket/bucket.component';
import {IItemsApiServiceToken} from './interfaces/IItemsApi';
import {ItemsApiService} from './services/items-api/items-api.service';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import { BucketItemsComponent } from './components/bucket-items/bucket-items.component';
import { BucketFormComponent } from './components/bucket-form/bucket-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    ItemComponent,
    BucketComponent,
    BucketItemsComponent,
    BucketFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [{provide: IItemsApiServiceToken, useClass: ItemsApiService},],
  bootstrap: [AppComponent]
})
export class AppModule {
}
