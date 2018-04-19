import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { FingerprintAIO } from "@ionic-native/fingerprint-aio";
/**
 * Generated class for the FingerprintPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-fingerprint",
  templateUrl: "fingerprint.html"
})
export class FingerprintPage {
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private fingerprint: FingerprintAIO
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad FingerprintPage");
  }
  check() {
    console.log("check");
    this.fingerprint.show({
      clientId: "Fingerprint-Demo",
      clientSecret: "password", //Only necessary for Android
      disableBackup: true, //Only for Android(optional)
    });
  }

  show() {
    console.log("show");
    this.fingerprint
      .show({
        clientId: "Fingerprint-Demo"
      })
      .then(result => {
        console.log(result);
      })
      .catch(err => {
        console.log(err);
      });
  }
}
