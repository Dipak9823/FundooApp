import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse}  from '@angular/common/http';
import { catchError, tap} from 'rxjs/operators/';
import { throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RootService {
 
url="http://localhost:8000";
  constructor(private http: HttpClient) { }

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

achievenotes(token){
  return this.http.get(`${this.url}/getNotes`,{
    headers:{
      'token' :token
    }
  });
}

archivenotes(token) {
  return this.http.get(`${this.url}/archive`,{
    headers:{
      'token' :token
    }
  })
}
// deleteNote(noteid){
//   return this.http.post(`${this.url}/deletenotes`,noteid);
//   //  console.log(noteid)
// }
 }

