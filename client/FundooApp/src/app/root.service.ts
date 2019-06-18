import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse}  from '@angular/common/http';
import { catchError} from 'rxjs/operators/';
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
  return this.http.post(`${this.url}/login`,{email:email,password:password})     
}
}

