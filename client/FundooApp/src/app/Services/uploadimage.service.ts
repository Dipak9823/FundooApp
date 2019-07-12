import { Injectable } from '@angular/core';
import { environment} from '../../environments/environment.prod'
import { HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UploadimageService {
  url=environment.baseUrl;
  constructor(private http:HttpClient) { }

  uploadProfile(token:any,file:File){
    const formData: FormData = new FormData();
    formData.append('file',file)
    this.http.post(`${this.url}/uploadimg`,formData,{
      headers:{
        token:token
      }
    })

  }
}
