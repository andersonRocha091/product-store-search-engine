import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductSearchFormComponent } from './product-search-form/product-search-form.component';
import { FormsModule, NgForm } from '@angular/forms' 
import { AngularFireDatabase } from 'angularfire2/database';

@NgModule({
  imports: [
    CommonModule, FormsModule
  ],
  providers:[AngularFireDatabase],
  exports: [ProductSearchFormComponent],
  declarations: [ProductSearchFormComponent]
})
export class ProductSearchModule { }
