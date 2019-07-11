import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment.prod';
@Injectable({
  providedIn: 'root'
})
export class UpdateService {
  url=environment.baseUrl;
  constructor(private http: HttpClient) { }

  archive(token,model){
    return this.http.put(`${this.url}/archive`,model,{
      headers:{
        'token':token
      }
    });
  }

}
