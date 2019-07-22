import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse}  from '@angular/common/http';
import { catchError, tap} from 'rxjs/operators/';
import { throwError} from 'rxjs';
import { LabelComponent } from '../Component/label/label.component';

@Injectable({
  providedIn: 'root'
})
export class RootService {
 
url="http://localhost:8000";
  constructor(private http: HttpClient) { }

  token=localStorage.getItem('token');
register(userData){

 // let user=JSON.stringify(userData.value);
  console.log("services",userData);
  return this.http.post(`${this.url}/register`,userData)
          .pipe(catchError(this.errorHandler))
}
  errorHandler(error:HttpErrorResponse){
    return throwError(error);
  }


login(email:string,password:string){ 
  return this.http.post(`${this.url}/login`,{email:email,password:password});     
}

forgotpassword(email:string){
  return this.http.post(`${this.url}/forgotpassword`,{email:email})
}

resetpassword(password:string){
  return this.http.post(`${this.url}/resetpassword/:token`,password)
}

notes(note,token) {
  return this.http.post(`${this.url}/notes`,note, {
    headers:{
      'token':token
    }
  }
  );
}

updateNotes(model) {
  return this.http.post(`${this.url}/updatenotes`,model,{
    headers:{
    'token':this.token
    }
  })
}

achievenotes(token){
  return this.http.get(`${this.url}/notes`,{
    headers:{
      'token' :token
    }
  });
}

archivenotes(token) {
  return this.http.get(`${this.url}/getArchive`,{
    headers:{
      'token' :token
    }
  })
}
uploadProfile(token:any,file:File){
  const formData: FormData = new FormData();
  formData.append('file',file)
  this.http.post(`${this.url}/uploadimg`,formData,{
    headers:{
      token:token
    }
  })

}

trashnote(token:any) {
  return this.http.get(`${this.url}/trash`,{
    headers:{
      'token' :token
    }
  })
}


addlabel(label,token) {
  return this.http.post(`${this.url}/label`,label,{
    headers:{
      'token':token
    }
  })
}

getLabel(token){
  return this.http.get(`${this.url}/getlabel`,{
    headers:{
      'token' : token
    }
  })
}


updateLabel(token,label) {
  return this.http.put(`${this.url}/label`,{
    headers:{
      'token':token
    }
  })
}

// deleteLabel(id,token) {
//   return this.http.post(`${this.url}/label`,id,{
//     headers:{
//       'token':token
//     }
//   })
//}
// deleteNote(noteid){
//   return this.http.post(`${this.url}/deletenotes`,noteid);
//   //  console.log(noteid)
// }
 

}