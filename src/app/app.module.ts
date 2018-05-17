import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AngularFireModule} from 'angularfire2/index' 
import { FormsModule, NgForm } from '@angular/forms' 

import {FirebaseConfig} from './../environments/firebase.config'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductSearchComponent } from './product-search/product-search.component';

import {ProductSearchModule} from './product-search/product-search.module'

@NgModule({
  declarations: [
    AppComponent,
    ProductSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ProductSearchModule,
    AngularFireModule.initializeApp(FirebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
