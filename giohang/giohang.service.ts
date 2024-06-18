import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GiohangService {
  [x: string]: any;
  private url = "http://localhost:3001";
  httpOption = {
    headers: new HttpHeaders({
      'Content-Type':'application/json'
    })
  }
  constructor(private httpClient: HttpClient) { }
  createHoaDon(hoadon:any):Observable<any>{
    return this.httpClient.post(this.url+'/hoadon', JSON.stringify(hoadon), this.httpOption)
    .pipe(catchError((error:HttpErrorResponse)=>{
      return throwError(error);
    }))
  }
  guiemail(email:any, data:any):Observable<any>{
    return this.httpClient.post(this.url+'/send-mail/', JSON.stringify(data), this.httpOption)
    .pipe(catchError((error:HttpErrorResponse)=>{
      return throwError(error);
    }))
  }
}
