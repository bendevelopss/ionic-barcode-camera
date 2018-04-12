import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InventoryProductPage } from "../inventory-product/inventory-product";
import { DataServiceProvider } from '../../providers/data-service/data-service';

/**
 * Generated class for the InventoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-inventory',
  templateUrl: 'inventory.html',
})
export class InventoryPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public dataServiceProvider:DataServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InventoryProductPage');
    this.dataServiceProvider.getInventories().subscribe(data => {
      console.log(data);
    })
  }
  gotoInventoryProduct() {
    console.log('Navigating to another module');
    this.navCtrl.push('InventoryProductPage');
    }

}
