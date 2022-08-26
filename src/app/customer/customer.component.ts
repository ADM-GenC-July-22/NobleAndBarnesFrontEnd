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


  customer = {
    "customerID": NaN,
    "firstName": "",
    "lastName": "",
    "email": "",
    "phoneNumber": NaN,
    "addressObj": {
      "addressID": NaN,
      "unitNumber": NaN,
      "streetName": "",
      "city": "",
      "state" : "",
      "zipcode": NaN
    }
  };


  constructor(private customerService : CustomerServiceService) { }


  submit() {
    console.log('user data', this.customer);
    this.customerService.updateCustomer(this.customer.customerID, this.customer);

    }

    ngOnInit(): void {
      
    }

}
