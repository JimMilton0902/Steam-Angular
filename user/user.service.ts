import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = "http://localhost:3001";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':'application/json'
    })
  }
  constructor(private httpClient:HttpClient) { }
  getAllUser():Observable<any>{
    return this.httpClient.get(this.url+'/user/view')
    .pipe(catchError((error:HttpErrorResponse)=>{
          return throwError(error)
    }));
  };
  
  createUser(user:User):Observable<any>{
    return this.httpClient.post(this.url+'/user/dangky', JSON.stringify(user),this.httpOptions)
    .pipe(catchError((error:HttpErrorResponse)=>{
      return throwError(error);
      }));
  };
  loginUser(user: User):Observable<any>{ 
    return this.httpClient.post(this.url+'/user/dangnhap',JSON.stringify(user),this.httpOptions)
    .pipe(catchError((error:HttpErrorResponse)=>{
      return throwError(error);
    }));
  };
  guiemail(email:string,data:any):Observable<any>{
    return this.httpClient.post(this.url+'/send-mail'+email,JSON.stringify(data),this.httpOptions)
    .pipe(catchError((error:HttpErrorResponse)=>{
      return throwError(error);
    }));
  };
  updateUser(id:string,user:User):Observable<any>{
    return this.httpClient.put(this.url+'/user/'+id,JSON.stringify(user),this.httpOptions)
    .pipe(catchError((error:HttpErrorResponse)=>{
      return throwError(error);
    }));
  };
  tokenUser(data:any):Observable<any>{
    return this.httpClient.post(this.url+'/user/token',JSON.stringify(data),this.httpOptions)
    .pipe(catchError((error:HttpErrorResponse)=>{
      return throwError(error);
    }))
  }
}
