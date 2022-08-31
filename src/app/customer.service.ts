import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Customer } from './customer';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  static customerID: number = 2;
  static addressID: number = 2;
  private baseUrl = "http://localhost:8082/customers";
 
  constructor(private http:HttpClient) { 
  }

  setCustomerID(newID: number) {
    CustomerService.customerID = newID;
    console.log(CustomerService.customerID);
  }
  setAddressID(newID: number) {
    CustomerService.addressID = newID;
  }
  getAddressID() {
    return CustomerService.addressID;
  }
  getCustomerId() {
    return CustomerService.customerID;
  }

  getCustomerObj(custID:number): Observable<Customer>{
    return this.http.get<Customer>(`${this.baseUrl}/${custID}`);
  }

  // MASON/GEORGE Call for customer object and address nested object from my login information
  // this.custService.getCustomerObj(this.custService.getCustomerId()).subscribe((data: Customer[]) =>  {
  //   console.log(data);
  // });

  loginCustomer(phoneNumber:number): Observable<Customer>{
    return this.http.get<Customer>(`${this.baseUrl}/${phoneNumber}/phonenumber`);
  }
  generalPostCall(requestParam: any) : Observable<Customer> {
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
    return this.http.post<Customer>(this.baseUrl, requestParam, {...httpOptions})
  }

  deleteCustomer(id:number): Observable<void>{

      return this.http.delete<void>(`${this.baseUrl}/${id}`);
      
    }

    updateCustomer(customer:Customer): Observable<Object>{

      // console.log('user data', customer);
       let httpOptions = {}
       
       return this.http.put<any>(`${this.baseUrl}`, customer, httpOptions );
 
     }
}
