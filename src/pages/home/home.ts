import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  AlertController,
  LoadingController
} from "ionic-angular";
import { BarcodeScanner } from "@ionic-native/barcode-scanner";
import { DataServiceProvider } from "../../providers/data-service/data-service";

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
  name = "";
  price = "";
  desc = "";
  barcode: any;
  quantity = "";
  product_id: any;
  unit = "tray";
  comment = "";
  // itemid = "";
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private barcodeScanner: BarcodeScanner,
    public dataServiceProvider: DataServiceProvider,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad HomePage");
  }
  scan(id) {
    this.barcodeScanner
      .scan()
      .then(barcodeData => {
        if (!barcodeData.cancelled) {
          console.log("result: " + barcodeData.text);
          console.log(barcodeData.text); //pasok
          this.barcode = barcodeData.text;
          this.dataServiceProvider
            .getBarcode(barcodeData.text)
            .subscribe(res => {
              console.log(res);

              if (res.success == true) {
                console.log("success");
                this.name = res.result.item_name;
                this.price = res.result.price;
                this.desc = res.result.description;
                this.product_id = res.result._id;
              }
            });
        }
      })
      .catch(err => console.log(err));
  }

  submit() {
    let _data = {
      id: this.product_id,
      created: new Date(),
      updated: new Date(),
      qty: this.quantity,
      unit: this.unit,
      msg: "",
      image: ""
    };

    // console.log(_data.product);

    let loader = this.loadingCtrl.create({
      content: "Loading",
      spinner: "ios"
    });

    loader.present();

    this.dataServiceProvider.addInventory(_data).subscribe(data => {
      loader.dismiss();
      let alert = this.alertCtrl.create({
        message: data.success ? "Successful" : "Error"
      });
      if (data.success) this.clear();
      alert.present();
      console.log(data);
    });
  }

  clear() {
    this.name = this.price = this.desc = this.product_id = this.barcode = this.quantity = "";
  }
}
