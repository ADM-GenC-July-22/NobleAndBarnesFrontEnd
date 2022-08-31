import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterCustomerComponent } from '../register-customer/register-customer.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-entrypage',
  templateUrl: './entrypage.component.html',
  styleUrls: ['./entrypage.component.css']
})
export class EntrypageComponent implements OnInit {
  dialogRef: any;
  existing: 'existingCustomer';
  registerCust: 'registerCustomer';
  constructor(private router:Router,private dialog: MatDialog) { }

  redirect(pathname:string)
  {
    this.router.navigate([`${pathname}`]);
  }

  register()
  {
    console.log('working...')
    this.dialog.open(RegisterCustomerComponent, {
      width: '500px'
    })
    
    /*this.router.navigate([`${pathname}`]);*/

  }
  ngOnInit(): void {
  }

}
