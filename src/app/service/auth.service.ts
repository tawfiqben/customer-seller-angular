import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public username: any;
  public activeProfile: string = "OTHER";
  public isAuthenticated: boolean = false;
  public roles: string[] = [];
  baseUrl = "http://localhost:8081/api/v1/";

  public users: any = {
    admin: { password: '1234', roles: ['ADMIN', 'SELLER', 'CUSTOMER'] },
    customer: { password: '1234', roles: ['CUSTOMER'] },
    seller: { password: '1234', roles: ['SELLER'] },
  }

  constructor(private httpClient: HttpClient, private router: Router) { }
  public login(username: string, password: string) {
    if (this.users[username] && this.users[username]['password'] == password) {
      this.username = username;
      this.isAuthenticated = true;
      this.roles = this.users[username]['roles'];
      this.activeProfile = this.users[username]['roles'];
      return true;
    }
    else {
      return false;
    }
  }

  logout() {
    this.isAuthenticated = false;
    this.roles = [];
    this.username = undefined;
    this.router.navigateByUrl('/login')
  }

  isAuthorized(activeProfile: string): boolean {
    return this.activeProfile === activeProfile;
  }

}
