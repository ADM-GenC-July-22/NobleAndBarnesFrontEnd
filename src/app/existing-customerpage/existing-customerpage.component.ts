
import { Component, Input, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-existing-customerpage',
  templateUrl: './existing-customerpage.component.html',
  styleUrls: ['./existing-customerpage.component.css']
})
export class ExistingCustomerpageComponent implements OnInit {
  title = "Customer Authentication";

  // Phone Number Variable
  phoneNumber: any;

  constructor() { }
  submit(val:string) {
    console.warn(val)
    this.phoneNumber = val
  }

  close() {

  }

  ngOnInit(): void {
    
  }
  

}
