import { Component, OnInit } from '@angular/core';

import { Customer } from '../customer';

import { CustomerService } from '../customer.service';


@Component({
  selector: 'app-existing-customerpage',
  templateUrl: './existing-customerpage.component.html',
  styleUrls: ['./existing-customerpage.component.css'],
  providers: [CustomerService]
})

export class ExistingCustomerpageComponent implements OnInit {
  title = "Customer Authentication";

  // Phone Number Variable
  phoneNumber: any;

  customerID: number = 4;
  addressID: number = 4;

  customers: Customer;
  constructor(private custService: CustomerService) { 

  }
  
  submit(val:string) {
    // Initial Ids for customer and Address
    console.log("app component addressID:" + this.custService.getAddressID());
    console.log("app component custID:" + this.custService.getCustomerId());

    console.warn(val)
    this.phoneNumber = val
    this.custService.loginCustomer(this.phoneNumber).subscribe((data: Customer) =>  {
      console.log(data);
      this.custService.setCustomerID(data.customerID);
      this.custService.setAddressID(data.addressObj.addressID);
      this.customers = data;
      
    });
 
  }

  close() {

  }

  ngOnInit(): void {
    
  }
  

}
