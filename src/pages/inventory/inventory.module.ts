import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InventoryPage } from './inventory';
import { DataServiceProvider } from '../../providers/data-service/data-service';
import { HttpModule } from '@angular/http';
import { DatePipe, CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    InventoryPage,
  ],
  imports: [
    IonicPageModule.forChild(InventoryPage),
    HttpModule,
    CommonModule
  ],
  providers :[
    DataServiceProvider
    
  ]
})
export class InventoryPageModule {}
