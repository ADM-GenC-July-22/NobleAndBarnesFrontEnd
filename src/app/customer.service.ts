import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Customer } from './customer';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  customerID: number = 2;
  addressID: number = 2;
  private baseUrl = "http://localhost:8082/customers";
 
  constructor(private http:HttpClient) { 
  }

  setCustomerID(newID: number) {
    this.customerID = newID;
    console.log(this.customerID);
  }
  setAddressID(newID: number) {
    this.addressID = newID;
  }
  getAddressID() {
    return this.addressID;
  }
  getCustomerId() {
    return this.customerID;
  }

  getCustomerObj(custID:number): Observable<Customer[]>{
    return this.http.get<Customer[]>(`${this.baseUrl}/${custID}`);
  }

  // MASON/GEORGE Call for customer object and address nested object from my login information
  // this.custService.getCustomerObj(this.custService.getCustomerId()).subscribe((data: Customer[]) =>  {
  //   console.log(data);
  // });

  loginCustomer(phoneNumber:number): Observable<Customer>{
    return this.http.get<Customer>(`${this.baseUrl}/${phoneNumber}/phonenumber`);
  }
  generalPostCall(requestParam: any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': '*/*'
      })
    }
    const addressObj = {
     unitNumber: requestParam.unitNumber,
     streetName:requestParam.streetName,
     city:requestParam.city,
     state: requestParam.state,
     zipCode:requestParam.zipCode
    }
    const paramObj = requestParam;
    paramObj.addressObj = addressObj;
    console.log(requestParam)
    return this.http.post(this.baseUrl, requestParam, {...httpOptions})
  }

  deleteCustomer(id:number): Observable<void>{

      return this.http.delete<void>(`${this.baseUrl}/${id}`);
      
    }
}
