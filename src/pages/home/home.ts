import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { BarcodeScanner } from "@ionic-native/barcode-scanner";

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  itemid: any;
  // itemid = "";
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private barcodeScanner: BarcodeScanner
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad HomePage");
  }
  scan() {
    this.barcodeScanner
      .scan()
      .then(barcodeData => {
        console.log(barcodeData.text);
        this.itemid = barcodeData.text;
      })
      .catch(err => console.log(err));
  }
}
