import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { InventoryProductPage } from "../inventory-product/inventory-product";
import { DataServiceProvider } from "../../providers/data-service/data-service";
import * as _ from 'lodash';
import moment from 'moment'
/**
 * Generated class for the InventoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-inventory",
  templateUrl: "inventory.html"
})
export class InventoryPage {
  inventories: any;
  today: any;
  results : any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public dataServiceProvider: DataServiceProvider
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad InventoryProductPage");
    this.getItems();
  }
  gotoInventoryProduct() {
    console.log("Navigating to another module");
    this.navCtrl.push("InventoryProductPage");
  }

  getItems() {
    this.dataServiceProvider.getInventories().subscribe(data => {
      this.inventories = data.result;
      console.log(this.inventories);
      // let s = this.inventories.createdAt;
      // const _date = (myDate) => moment(myDate).format('llll');

      // console.log(_date(this.inventories.createdAt));
      const monthName = item => moment(item.createdAt, 'YYYY-MM-DD').format('ll');
      const sample = _.groupBy(this.inventories, monthName)
      this.results = _(sample).map((items, date )=> {
        return {
          items : items,
          date : date,
          formatted_date : moment(date).startOf('day').fromNow()
        }
      })
      .reverse()
      .value();
      
      console.log(this.results);
      // this.temp = _(this.inventories)
      // .groupBy()
      // .map((items, date) => {
      //   return {
      //     items: items,
      //     day : date
      //   }
      // })
      // .value();
      // console.log(this.temp);

    });
  }

  getItem(id) {
    this.dataServiceProvider.getInventory(id).subscribe(data => {
      this.navCtrl.push("InventoryProductPage", { item: data.result });
    });
  }
}
