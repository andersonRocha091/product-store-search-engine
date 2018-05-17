import { Component, OnInit } from '@angular/core'
import { FormsModule, NgForm } from '@angular/forms'
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Component({
  selector: 'app-product-search-form',
  templateUrl: './product-search-form.component.html',
  styleUrls: ['./product-search-form.component.css']
})
export class ProductSearchFormComponent implements OnInit {
  brandFirebaseList: AngularFireList<any[]>;
  clothingsFirebaseList: AngularFireList<any[]>;
  brands = [];
  clothings = [];

  constructor(db: AngularFireDatabase) {
    db.list('/clothings')
      .valueChanges()
      .subscribe(res => {
        this.clothings = res;
        console.log(this.clothings)
      })

    db.list('/brands')
      .valueChanges()
      .subscribe(res => {
        this.brands = res;
        console.log(this.brands);
      })

  }

  ngOnInit() {
  }

  form_submit(f: NgForm) {
    console.log(f.form.controls);
    console.log('valor do controle nome: ' + f.form.controls.product.value);
    console.log(this.brands);
    console.log(this.clothings);
  }

}
