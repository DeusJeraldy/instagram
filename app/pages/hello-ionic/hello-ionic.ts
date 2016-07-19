import {Page} from 'ionic-angular';

import { Photo } from '../photo';

import { Camera } from 'ionic-native';
import { OnInit } from '@angular/core';

import { PhotoService } from '../../providers/photo-service/photo-service';

@Page({
  templateUrl: 'build/pages/hello-ionic/hello-ionic.html',
  providers: [PhotoService]
})
export class HelloIonicPage {
  constructor(private photoService: PhotoService) {}
  
  photos: any[] = [];

  ngOnInit() { 
    this.photoService.getPhotos().subscribe(
                data => {
                    this.photos = data;
                },
                err => {
                    console.log(err);
                },
                () => console.log('Photo Get Complete')
            );
  }

  takePhoto() {
    Camera.getPicture({
      destinationType: Camera.DestinationType.DATA_URL,
      targetHeight: 500,
      targetWidth: 500
    }).then((imageData) => {
      this.photos.push(new Photo("data:image/jpeg;base64," + imageData,0));
    }, (err) => {
      console.log(err);
    });
  }

  deletePhoto(photo){
    this.photoService.deletePhoto(photo.photoId).subscribe(
                data => {
                    console.log(data);
                },
                err => {
                    console.log(err);
                },
                () => console.log('Photo Get Complete')
            );

    this.photoService.getPhotos().subscribe(
                data => {
                    this.photos = data;
                },
                err => {
                    console.log(err);
                },
                () => console.log('Photo Get Complete')
            );
  }

  likePhoto(photo){
   /*this.photoService.updatePhoto().subscribe(
                data => {
                    this.photos = data;
                },
                err => {
                    console.log(err);
                },
                () => console.log('Photo Get Complete')
            );
  */
  }
}
