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
  public brands = [];
  public clothings = [];
  public productObject = {};
  itensTobeDisplayed = [];


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
    let stringToSplit = f.form.controls.product.value;
    let splittedProductDescription = stringToSplit.split(" ");

    this.itensTobeDisplayed =  this.verifyProductBrand(this.brands, splittedProductDescription);
  }

  verifyProductBrand(brandsArray, splittedProductDescription):Object[] {
    var verifiedBrandsToShow = [];

    for (let index = 0; index < splittedProductDescription.length; index++) {
      const item = splittedProductDescription[index];
      var twoWordsToSearch = "";
      var brandFoundIndex = -1;

      if (item == 'Banana' || item == 'Hugo' || item == 'Rebeca') {
        twoWordsToSearch = splittedProductDescription[index] + " " + splittedProductDescription[index + 1];
        brandFoundIndex = brandsArray.indexOf(twoWordsToSearch);
        if (brandFoundIndex >= 0) {
          verifiedBrandsToShow.push({ value: splittedProductDescription[index], style: 'bold' });
          verifiedBrandsToShow.push({ value: splittedProductDescription[index + 1], style: 'bold' });
          index++;
        }
        else {
          verifiedBrandsToShow.push({ value: splittedProductDescription[index] });
        }
      }
      else {
        brandFoundIndex = brandsArray.indexOf(item)
        if (brandFoundIndex >= 0) {
          verifiedBrandsToShow.push({ value: splittedProductDescription[index], style: 'bold' })
        }
        else {
          verifiedBrandsToShow.push({ value: splittedProductDescription[index] });
        }
      }
    }
    return verifiedBrandsToShow;
  }

}
