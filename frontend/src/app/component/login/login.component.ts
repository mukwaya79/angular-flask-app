import { LoginService } from './../../services/login.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   
  public form = {
    email: "",
    password: ""

  }

  constructor(private login:LoginService,private router:Router) { }

  ngOnInit(): void {
  }

  loginnow(){
    console.log(this.form)
    return this.login.auth(this.form).subscribe(res=>{
      console.log(res);
      localStorage.setItem('msg',res.msg);
      this.router.navigateByUrl('/main')
    },
   error=>alert('Incorrect Email or Password'))
  }

}
