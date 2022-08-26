import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Customer } from './customer';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private baseUrl = "http://localhost:8082/customers";

  constructor(private http:HttpClient) { }

  loginCustomer(phoneNumber:number): Observable<Customer[]>{

    return this.http.get<Customer[]>(`${this.baseUrl}/${phoneNumber}/phonenumber`);
  }
}
