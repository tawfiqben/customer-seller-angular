import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Seller } from '../model/sellers.model';

@Injectable({
  providedIn: 'root'
})
export class SellersService {
  baseURL = "http://localhost:8081";

  constructor(private http: HttpClient) { }

  public getAllSellers() {
    return this.http.get(this.baseURL + "/usersByRole?role=SELLER");

  }

  /*public getAllSellers() : Observable<Array<Seller>> {
    return this.http.get<Array<Seller>>(this.baseHost + "&?role=SELLER");

  }*/

  /*public getSalesByStatus() : Observable<any> {
      this.http.get(`${environment.baseUrl}&?role=SELLER`)
    } */
}
