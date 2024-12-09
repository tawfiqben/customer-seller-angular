import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../service/auth.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  
  public loginForm! : FormGroup;

  constructor(private fb : FormBuilder, private authService : AuthService, private router : Router ) {
    
  }

ngOnInit(): void {
  this.loginForm = this.fb.group({
    username : this.fb.control(''),
    password : this.fb.control('')
  });
    
}
login() {
  let username = this.loginForm.value.username;
  let password = this.loginForm.value.password;
  let auth:boolean = this.authService.login(username, password);
  if(auth==true) {
    this.router.navigateByUrl("/admin")
  }
}
}
