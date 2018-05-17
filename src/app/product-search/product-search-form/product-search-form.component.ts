import { Component, OnInit } from '@angular/core'
import { FormsModule, NgForm } from '@angular/forms'

@Component({
  selector: 'app-product-search-form',
  templateUrl: './product-search-form.component.html',
  styleUrls: ['./product-search-form.component.css']
})
export class ProductSearchFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  form_submit(f: NgForm) {
    console.log(f.form.controls);
    console.log('valor do controle nome: ' + f.form.controls.product.value);
  }

}
