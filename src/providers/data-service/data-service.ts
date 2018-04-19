// import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
/*
  Generated class for the DataServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataServiceProvider {
  products: any[] = [];
  selectedProduct: any;
  productFound:boolean = false;
  
  // baseUrl = 'http://192.168.0.152:8080';
  baseUrl = 'https://inventory-control-app.herokuapp.com'
  constructor(public http: Http) {
    console.log('Hello DataServiceProvider Provider');
  }

  getInventories(){
    return this.http.get(this.baseUrl+'/inventory/items/').map((response)=>response.json());
  }
  getInventory(id){
    return this.http.get(this.baseUrl+'/inventory/item/'+id).map((response)=>response.json());
  }
  addComment(_data){
    return this.http.post(this.baseUrl+'/inventory/add_comment/', _data ).map((response)=>response.json()); 
  }
  addPhoto(_photo){
   return this.http.post(this.baseUrl+'/inventory/add_photo/', _photo).map((response) => response.json());
  }
  AddProduct(_product){
    return this.http.post(this.baseUrl+'/product/add/', _product).map((response) => response.json());
   }
  getBarcode(id){
    return this.http.get(this.baseUrl+'/product/item/'+id).map((response) => response.json());
   }
  addInventory(_item){
    return this.http.post(this.baseUrl+'/inventory/add/', _item).map((response) => response.json());
   }
}
