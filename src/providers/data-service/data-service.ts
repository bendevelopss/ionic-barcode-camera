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
  
  baseUrl = 'http://192.168.0.159:8080';
  constructor(public http: Http) {
    console.log('Hello DataServiceProvider Provider');
  }

  getInventories(){
    return this.http.get(this.baseUrl+'/inventory/items').map((response)=>response.json());
  }
}
