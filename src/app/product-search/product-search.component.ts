import { Component, OnInit } from '@angular/core'
import { FormsModule, NgForm } from '@angular/forms'

@Component({
  selector: 'app-product-search',
  templateUrl: './product-search.component.html',
  styleUrls: ['./product-search.component.css']
})
export class ProductSearchComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  form_submit(f: NgForm) {
    console.log(f.form.controls);
    console.log('valor do controle nome: ' + f.form.controls.nome.value);
  }

}
