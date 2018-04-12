import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpModule } from '@angular/http';

import { Camera } from '@ionic-native/camera';
import { BarcodeScanner } from "@ionic-native/barcode-scanner";
import { Toast } from '@ionic-native/toast';
import { DataServiceProvider } from '../providers/data-service/data-service';

@NgModule({
  declarations: [
    MyApp,   
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    BarcodeScanner,
    Toast,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DataServiceProvider
    
  ]
})
export class AppModule {}
