import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { Camera, CameraOptions } from "@ionic-native/camera";
import { AlertController } from "ionic-angular";
/**
 * Generated class for the InventoryProductPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-inventory-product",
  templateUrl: "inventory-product.html"
})
export class InventoryProductPage {
  options: any;
  comment: string;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private camera: Camera,
    private alertCtrl: AlertController
  ) {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    };
  }
  cam() {
    this.camera.getPicture(this.options).then(
      imageData => {
        // imageData is either a base64 encoded string or a file URI
        // If it's base64:
        let base64Image = "data:image/jpeg;base64," + imageData;
      },
      err => {
        // Handle error
      }
    );
  }
  presentPrompt() {
    let alert = this.alertCtrl.create({
      title: "Login",
      inputs: [
        {
          name: this.comment,
          placeholder: "Enter Comment"
        }
      ],
      buttons: [
        {
          text: "Cancel",
          role: "cancel",
          handler: data => {
            console.log("Cancel clicked");
          }
        },
        {
          text: "Add Comment",
          handler: data => {
             console.log(data);
          }
        }
      ]
    });
    alert.present();
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad InventoryProductPage");
  }
}
