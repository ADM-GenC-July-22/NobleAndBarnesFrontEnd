import { Component, OnInit } from '@angular/core';

import { Customer } from '../customer';


import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-existing-customerpage',
  templateUrl: './existing-customerpage.component.html',
  styleUrls: ['./existing-customerpage.component.css']
})

export class ExistingCustomerpageComponent implements OnInit {
  title = "Customer Authentication";

  // Phone Number Variable
  phoneNumber: any;


  customers: Customer[];
  constructor(private custService: CustomerService) { }
  submit(val:string) {
    console.warn(val)
    this.phoneNumber = val
    this.custService.loginCustomer(this.phoneNumber).subscribe((data: Customer[]) =>  {
      console.log(data);
      this.customers = data;
    });
    console.log(this.customers)
  }

  close() {

  }

  ngOnInit(): void {
    
  }
  

}
