import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

// import { DataServiceProvider } from '../../providers/data-service/data-service';
/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  barcode : any;
  item = '';
  price = '';

  constructor(public navCtrl: NavController, public navParams: NavParams, private barcodeScanner: BarcodeScanner) {}
     
  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }
  scan(){
    this.barcodeScanner.scan().then(barcodeData => {
      console.log(barcodeData.text);
      this.barcode = barcodeData.text;
    }).catch(err => console.log(err));
  }
}
