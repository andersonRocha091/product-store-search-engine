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
  public itensTobeDisplayed = [];


  constructor(db: AngularFireDatabase) {
    db.list('/clothings')
      .valueChanges()
      .subscribe(res => {
        this.clothings = res;
      })

    db.list('/brands')
      .valueChanges()
      .subscribe(res => {
        this.brands = res;
      })

  }

  ngOnInit() {
  }

  form_submit(f: NgForm) {
    let stringToSplit = f.form.controls.product.value;
    let splittedProductDescription = stringToSplit.split(" ");
    this.itensTobeDisplayed = [];
  
    this.verifyProductBrand(this.itensTobeDisplayed, this.brands, splittedProductDescription);
    this.verifyProductClothing(this.itensTobeDisplayed, this.clothings, splittedProductDescription);
    console.log(this.itensTobeDisplayed);

  }

  verifyProductClothing(itensTobeDisplayed, clothingArray, splittedProductDescription) {
    for (let index = 0; index < splittedProductDescription.length; index++) {
      const item = splittedProductDescription[index];

      var itemIndex = clothingArray.indexOf(item);
      if (itemIndex >= 0) {
        itensTobeDisplayed[index] = { value: splittedProductDescription[index], style: 'italics' }
      }

    }
  }

  verifyProductBrand(itensTobeDisplayed, brandsArray, splittedProductDescription) {

    for (let index = 0; index < splittedProductDescription.length; index++) {
      const item = splittedProductDescription[index];
      var twoWordsToSearch = "";
      var brandFoundIndex = -1;

      if (item == 'Banana' || item == 'Hugo' || item == 'Rebeca') {
        twoWordsToSearch = splittedProductDescription[index] + " " + splittedProductDescription[index + 1];
        brandFoundIndex = brandsArray.indexOf(twoWordsToSearch);
        if (brandFoundIndex >= 0) {
          itensTobeDisplayed.push({ value: splittedProductDescription[index], style: 'bold' });
          itensTobeDisplayed.push({ value: splittedProductDescription[index + 1], style: 'bold' });
          index++;
        }
        else {
          itensTobeDisplayed.push({ value: splittedProductDescription[index] });
        }
      }
      else {
        brandFoundIndex = brandsArray.indexOf(item)
        if (brandFoundIndex >= 0) {
          itensTobeDisplayed.push({ value: splittedProductDescription[index], style: 'bold' })
        }
        else {
          itensTobeDisplayed.push({ value: splittedProductDescription[index] });
        }
      }
    }
  }

}
