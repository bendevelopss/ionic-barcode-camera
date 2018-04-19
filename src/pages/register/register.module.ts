import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegisterPage } from './register';
import { FormsModule } from '@angular/forms';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

@NgModule({
  declarations: [
    RegisterPage,
  ],

  imports: [
    IonicPageModule.forChild(RegisterPage),
    FormsModule
  ],
  providers: [
    BarcodeScanner
  ],
})
export class RegisterPageModule {}
