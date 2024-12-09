import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  baseURL = "http://localhost:8081";

  constructor(private http : HttpClient) { } 

  public saveUser(formData : any) : Observable<User> {
    return this.http.post<User>(this.baseURL +"/users", formData);

  }
}
