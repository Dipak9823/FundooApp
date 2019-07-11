import { Injectable } from '@angular/core';
import { environment} from '../../environments/environment.prod'
import { HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UploadimageService {
  url=environment.baseUrl;
  constructor(private http:HttpClient) { }

  uploadProfile(token,img){
    this.http.post(`${this.url}/uploadimg`,token,img);

  }
}
