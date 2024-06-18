import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, pipe, throwError } from 'rxjs';
import { Sanpham } from './sanpham';

@Injectable({
  providedIn: 'root'
})
export class SanphamService {

  private url = "http://localhost:3001";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':'application/json'

    })
  }
  constructor(private httpClient:HttpClient) { }
// đọc san pham
  getAllSanpham():Observable<any>{
    return this.httpClient.get(this.url+'/sanpham')
  .pipe(catchError((error:HttpErrorResponse)=>{
    return throwError(error)
    }))
  }
  
  createSanpham(sanpham:Sanpham):Observable<any>{
    return this.httpClient.post(this.url+'/sanpham', JSON.stringify(sanpham),this.httpOptions)
    .pipe(catchError((error:HttpErrorResponse)=>{
      return throwError(error)
      }))
  }

  deleteSanpham(id:string){
    return this.httpClient.delete(this.url+'/sanpham/'+id)
    .pipe(catchError((error:HttpErrorResponse)=>{
      return throwError(error)
      }))
  }


  findSanpham(id:string):Observable<any>{
    return this.httpClient.get(this.url+'/sanpham/'+id)
    .pipe(catchError((error:HttpErrorResponse)=>{
      return throwError(error)
      }))
  }

  updateSanpham(id:string, sanpham:Sanpham):Observable<any>{
    return this.httpClient.put(this.url+'/sanpham/'+id,JSON.stringify(sanpham),this.httpOptions)
    .pipe(catchError((error:HttpErrorResponse)=>{
      return throwError(error)
      }))
  }
  getDmSanpham():Observable<any>{
    return this.httpClient.get(this.url+'/dmsp')
    .pipe(catchError((error:HttpErrorResponse)=>{
      return throwError(error);
    }))
  }
}
