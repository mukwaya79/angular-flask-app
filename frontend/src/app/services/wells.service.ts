import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WellsService {

  private baseurl = 'http://127.0.0.1:5000'

  constructor(private http:HttpClient) { }

  getitem():Observable<any>{
    return this.http.get<any>(`${this.baseurl}/wells`)
  }
  senditem(data:any):Observable<any>{
    return this.http.post<any>(`${this.baseurl}/wells`,data)
  }
  deleteitem(id:number):Observable<any>{
    return this.http.delete<any>(`${this.baseurl}/wells/${id}`)
  }
  getoneitem(id:number):Observable<any>{
    return this.http.get<any>(`${this.baseurl}/wells/${id}`)
  }
  Onupdateitem(id:number,data:any){
    return this.http.put<any>(`${this.baseurl}/wells/${id}`, data);
   }
}
