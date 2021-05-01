import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private baseurl = 'http://127.0.0.1:5000/login'

  constructor(private http:HttpClient,private router:Router) { }

  auth(data:any):Observable<any>{
    return this.http.post<any>(`${this.baseurl}`,data)
  }
  loggedIn(){
    return !!localStorage.getItem('msg')
  }
  logoutUser(){
    localStorage.removeItem('msg') 
    alert('You have Logged Out !!!!!')
      return this.router.navigate(['/login'])
   }
}
