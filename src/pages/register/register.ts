import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { BarcodeScanner } from "@ionic-native/barcode-scanner";
import { DataServiceProvider } from "../../providers/data-service/data-service";

// import { DataServiceProvider } from '../../providers/data-service/data-service';
/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-register",
  templateUrl: "register.html"
})
export class RegisterPage {
  barcode_id = "";
  item = "";
  price = "";
  description = "";

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private barcodeScanner: BarcodeScanner,
    public dataServiceProvider: DataServiceProvider
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad RegisterPage");
  }
  scan() {
    this.barcodeScanner
      .scan()
      .then((barcodeData) => {
        console.log(barcodeData.text);
        this.barcode_id = barcodeData.text;
      })
      .catch(err => console.log(err));
  }
  add() {
      let _data = {
        barcode_id: this.barcode_id,
        description: this.description,
        price: this.price,
        name: this.item
      };
      console.log(_data);
      this.dataServiceProvider.AddProduct(_data).subscribe(data => {
       console.log(data);
      });
    };
}
