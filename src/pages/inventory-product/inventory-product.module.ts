import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InventoryProductPage } from './inventory-product';
import { Camera } from '@ionic-native/camera';


@NgModule({
  declarations: [
    InventoryProductPage,
  ],
  providers:[
    Camera
  ],
  imports: [
    IonicPageModule.forChild(InventoryProductPage),
    
  ],
})
export class InventoryProductPageModule {}
