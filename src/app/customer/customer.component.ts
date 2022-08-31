import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { NgModule } from '@angular/core';
import { Form, FormsModule } from '@angular/forms';
import { CustomerService } from '../customer.service';
import { Router } from '@angular/router';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  requiredForm: FormGroup;
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
  constructor(private customerService : CustomerService,private router:Router, private fb:FormBuilder) {
    this.myForm();
  }

    myForm() {
      this.requiredForm = this.fb.group({
      firstName: ['', [Validators.required, 
                       Validators.pattern("^[a-z A-Z]+$"), 
                       Validators.maxLength(30),
                       Validators.minLength(2)]],
      lastName: ['', [Validators.required,
                      Validators.pattern("^[a-z A-Z]+$"),
                      Validators.maxLength(30),
                      Validators.minLength(2)]], 
      email: ['', [Validators.required, 
                   Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
      streetName: ['', [Validators.required, 
                        Validators.pattern("^[a-zA-Z0-9]+$"),                   
                        Validators.maxLength(50)]],
      city: ['', [Validators.required, 
                  Validators.pattern("^[a-zA-Z]+$"),               
                  Validators.maxLength(60)]],
      state: ['', [Validators.required, 
                  Validators.pattern("^[a-zA-Z]+$"),
                  Validators.minLength(4),
                  Validators.maxLength(13)]]
      });
   }
   
  submit() {

   
   
      this.customer.customerID = this.customerService.getCustomerId();
      this.customer.addressObj.addressID = this.customerService.getAddressID();
      console.log('user data', this.customer);
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