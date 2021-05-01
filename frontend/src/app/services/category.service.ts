import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private baseurl = 'http://127.0.0.1:5000'

  constructor(private http:HttpClient) { }
  getitem():Observable<any>{
    return this.http.get<any>(`${this.baseurl}/category`)
  }
  senditem(data:any):Observable<any>{
    return this.http.post<any>(`${this.baseurl}/category`,data)
  }
  deleteitem(id:number):Observable<any>{
    return this.http.delete<any>(`${this.baseurl}/category/${id}`)
  }
  getoneitem(id:number):Observable<any>{
    return this.http.get<any>(`${this.baseurl}/category/${id}`)
  }
  Onupdateitem(id:number,data:any):Observable<any>{
    return this.http.put<any>(`${this.baseurl}/category/${id}`,data)
  }
}
