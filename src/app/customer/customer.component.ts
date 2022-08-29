import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CustomerServiceService } from '../customer-service.service';


@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

//customer: Customer;

  customer = {
    "customerID": 1,
    "firstName": "",
    "lastName": "",
    "email": "",
    "phoneNumber": NaN,
    "addressObj": {
      "addressID": 1,
      "unitNumber": NaN,
      "streetName": "",
      "city": "",
      "state" : "",
      "zipCode": NaN
    }
  };

private customertest: Customer[]
  constructor(private customerService : CustomerServiceService) { }
  


  submit() {
    // this.customer.customerID = 1;
    // this.customer.addressObj.addressID = 1;
    console.log('user data', this.customer);
    this.customerService.updateCustomer(this.customer)
    .subscribe();


    }

    

    ngOnInit(): void {
      
    }

}
