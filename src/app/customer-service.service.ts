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

 
  updateCustomer(id:number, customer:Customer): Observable<Object>{

      return this.http.put(`${this.baseUrl}/${id}`, customer );
    }
  }