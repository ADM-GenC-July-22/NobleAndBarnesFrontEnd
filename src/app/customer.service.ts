import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private baseUrl = "http://localhost:8082/customers";
 
  constructor(private http:HttpClient) { 
  }


  deleteCustomer(id:number): Observable<void>{

      return this.http.delete<void>(`${this.baseUrl}/${id}`);
      
    }
}
