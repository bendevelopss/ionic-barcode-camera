import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams, ModalController } from "ionic-angular";
import { Camera, CameraOptions } from "@ionic-native/camera";
import { AlertController } from "ionic-angular";
import { DatePipe } from "@angular/common";
import { DataServiceProvider } from "../../providers/data-service/data-service";
// import { ImageViewerController } from "ionic-img-viewer";
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
  photo: any;
  options: any;
  item: any;
  photos = [];
  loaded = false;
  comment: string;
  index: any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private camera: Camera,
    private alertCtrl: AlertController,
    public dataServiceProvider: DataServiceProvider,
    public modalCtrl: ModalController
  ) {
  }


  ionViewCanEnter() {
    this.item = this.navParams.get("item");
    console.log(this.item);
    this.photos = this.item.photos;
    this.loaded = true;
  }

  cam(_photo) {
    this.camera
      .getPicture({
        destinationType: this.camera.DestinationType.DATA_URL,
        mediaType: this.camera.MediaType.PICTURE,
        quality: 100,
        targetWidth: 1000,
        targetHeight: 1000,
        correctOrientation: true
      })
      .then(
        imageData => {
          // imageData is a base64 encoded string

          this.photo = "data:image/jpeg;base64," + imageData;
          let _photo = {
            id: this.item._id,
            photo: this.photo
          };

          this.photos.push({
            path: this.photo
          });

          this.dataServiceProvider.addPhoto(_photo).subscribe(imageData => {
            console.log("success");
            // if(imageData.success){
            //   console.log('photo success')
            // }
          });
        },
        err => {
          console.log(err);
        }
      );
  }

  presentPrompt(_comment) {
    let alert = this.alertCtrl.create({
      title: "Add Comment",
      inputs: [
        {
          name: "comment",
          placeholder: "Enter Comment",
          value: this.item.comment.msg
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
          text: "Comment",
          role: "comment",

          handler: data => {
            let _data = {
              id: this.item._id,
              msg: data.comment,
              Date: new Date()
            };
            this.dataServiceProvider.addComment(_data).subscribe(data => {
              console.log(data);
              if (data.success) {
                this.item.comment.msg = data.result.comment.msg;
                this.alertCtrl.create({
                  message: "Success comment"
                });
              }
            });
          }
        }
      ]
    });
    alert.present();
  }
  previewImage(image) {
   
    this.modalCtrl.create('ModalPage', { img : image }).present();
    
  }
}
