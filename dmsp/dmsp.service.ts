import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DmspService {

  private url = "http://localhost:3001";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':'application/json'
    })
  }
  constructor(private httpClient:HttpClient) { }
  
  getDmSanpham():Observable<any>{
    return this.httpClient.get(this.url+'/dmsp')
    .pipe(catchError((error:HttpErrorResponse)=>{
        return throwError(error);
      }))
  }
}
