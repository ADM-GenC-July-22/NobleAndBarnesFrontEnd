import { Component, Input, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormsModule } from '@angular/forms';
import { CustomerService } from './customer.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CustomerService]
})
export class AppComponent {
  onYes() {
    
  }
  
  constructor(private custService: CustomerService){
    console.log("app component addressID:" + custService.getAddressID());
    console.log("app component custID:" + custService.getCustomerId());
    

  }
  
}
