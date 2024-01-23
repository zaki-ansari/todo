import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'zaki';
  password = '';
  errorMsg = 'InvalidCrendentials';
  invalidLogin = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  handleLogin(){
    if(this.username === 'zaki' && this.password === 'zaki*123'){
      this.invalidLogin = false;
      this.router.navigate(['welcome',this.username]);
    }else{
      this.invalidLogin = true;
    }
  }
}
