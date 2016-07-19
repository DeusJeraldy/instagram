import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class PhotoService {
  data: any;

  constructor(private http: Http) {
    this.data = null;
  }

  getPhotos() {
    var url = "http://jamzicoreapi.azurewebsites.net/api/photo";

    var response = this.http.get(url).map(res => res.json());
    return response;
  }
}

