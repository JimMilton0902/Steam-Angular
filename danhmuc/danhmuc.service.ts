import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, pipe, throwError } from 'rxjs';
import { Danhmuc } from './danhmuc';

@Injectable({
  providedIn: 'root'
})
export class DanhmucService {

  private url = "http://localhost:3001";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':'application/json'

    })
  }
  constructor(private httpClient:HttpClient) { }
// đọc danh mục
  getAllDanhmuc():Observable<any>{
    return this.httpClient.get(this.url+'/danhmuc')
  .pipe(catchError((error:HttpErrorResponse)=>{
    return throwError(error)
    }))
  }
  createDanhmuc(danhmuc:Danhmuc):Observable<any>{
    return this.httpClient.post(this.url+'/danhmuc', JSON.stringify(danhmuc),this.httpOptions)
    .pipe(catchError((error:HttpErrorResponse)=>{
      return throwError(error)
      }))
  }

  deleteDanhmuc(id:string){
    return this.httpClient.delete(this.url+'/danhmuc/'+id)
    .pipe(catchError((error:HttpErrorResponse)=>{
      return throwError(error)
      }))
  }



  findDanhmuc(id:string):Observable<any>{
    return this.httpClient.get(this.url+'/danhmuc/'+id)
    .pipe(catchError((error:HttpErrorResponse)=>{
      return throwError(error)
      }))
  }

  
  updateDanhmuc(id:string, danhmuc:Danhmuc):Observable<any>{
    return this.httpClient.put(this.url+'/danhmuc/'+id,JSON.stringify(danhmuc),this.httpOptions)
    .pipe(catchError((error:HttpErrorResponse)=>{
      return throwError(error)
      }))
  }
 
}
