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

  deleteLabel(model) {
    console.log(model);

    return this.http.post(`${this.url}/deleteLabel`,model,{
      headers:{
        'token': this.token
      }
    })
  }

  addColor(model) {
    console.log("color is", model);

    return this.http.put(`${this.url}/updatecolor`,model,{
      headers:{
        'token' : this.token
      }
    })
  }

  addArchive(model){
    console.log("Archive:-",model );

    return this.http.put(`${this.url}/addArchive`,model,{
      headers:{
        'token' :this.token
      }
    })
  }

  updateTrash(model) {
    console.log("Delete model",model);

    return this.http.put(`${this.url}/addTrash`,model,{
      headers:{
        'token': this.token 
      }
    })
  }

}
