import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment.prod';
@Injectable({
  providedIn: 'root'
})
export class UpdateService {
  url=environment.baseUrl;
  constructor(private http: HttpClient) { }
  token=localStorage.getItem('token');
  archive(token,model){
    return this.http.put(`${this.url}/archive`,model,{
      headers:{
        'token':token
      }
    });
  }

  trash(token,model) {
    return this.http.put(`${this.url}/trash`,model,{
        headers:{
          'token' :token
        }
    })
  }

  addReminder(model){
    return this.http.post(`${this.url}/addreminder`,model,{
      headers:{
        token:this.token
      }
    })
  }

  deleteReminder(model) {
    console.log("updateService",model);

    return this.http.post(`${this.url}/deletereminder`,model,{
      headers: {
        'token' :this.token
      }

    })
  }

}
