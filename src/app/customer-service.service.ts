import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Customer } from './customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerServiceService {

  private baseUrl = "http://localhost:8082/customers";

  constructor(private http:HttpClient) { }

 
  updateCustomer(customer:Customer): Observable<Object>{

     // console.log('user data', customer);
      let httpOptions = {}

      return this.http.put<any>(`${this.baseUrl}`, customer, httpOptions );

    }
    

  }