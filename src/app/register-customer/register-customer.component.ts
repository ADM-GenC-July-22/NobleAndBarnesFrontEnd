import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-register-customer',
  templateUrl: './register-customer.component.html',
  styleUrls: ['./register-customer.component.css']
})
export class RegisterCustomerComponent implements OnInit {
  router: any;
  
  constructor(public dialogRef: MatDialogRef<RegisterCustomerComponent>,private dataSource: CustomerService, private route: Router) { }
  ngOnInit(): void {
    console.log(' register customer component');
    // Errorthrow new Error('Method not implemented.');
  }
  @ViewChild('userForm', { read: NgForm }) userForm: NgForm | undefined;
  close() {
    this.dialogRef.close();
  }



  onSubmit(registerForm: NgForm) {
      console.log('this.userForm',this.userForm);
      console.log('RegisterData', registerForm);  
   this.dataSource.generalPostCall(registerForm.form.value).subscribe((response) => {
      console.log('response', response);
       this.dialogRef.close();
    })
    this.route.navigateByUrl('/home');
  }

  }

