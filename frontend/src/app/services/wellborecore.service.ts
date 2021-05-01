import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WellborecoreService {
  private baseurl = 'http://127.0.0.1:5000'

  constructor(private http:HttpClient) { }

  getitem():Observable<any>{
    return this.http.get<any>(`${this.baseurl}/wellborecore`)
  }
  senditem(data:any):Observable<any>{
    return this.http.post<any>(`${this.baseurl}/wellborecore`,data)
  }
  deleteitem(id:number):Observable<any>{
    return this.http.delete<any>(`${this.baseurl}/wellborecore/${id}`)
  }
  getoneitem(id:number):Observable<any>{
    return this.http.get<any>(`${this.baseurl}/wellborecore/${id}`)
  }
  onupdateitem(id:number,data:any):Observable<any>{
    return this.http.put<any>(`${this.baseurl}/wellborecore/${id}`,data)
  }
}
