import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CustomerService } from '../customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

//customer: Customer;

customerExisting : Customer;

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
  constructor(private customerService : CustomerService,private router:Router) { }



  submit() {

    console.log('user data', this.customer);
   
      this.customer.customerID = this.customerService.getCustomerId();
      this.customer.addressObj.addressID = this.customerService.getAddressID();
      this.customerService.updateCustomer(this.customer)
    .subscribe();
    this.router.navigateByUrl('/home');

    }

    close(pathname:string) {
      this.router.navigate([`${pathname}`]);
    }
  

    ngOnInit(): void {

      console.log("*",this.customerService.getCustomerId());
      this.customerService.getCustomerObj(this.customerService.getCustomerId()).subscribe((data: Customer) => 
       {
         this.customerExisting = data;
       }
      );
    }

}