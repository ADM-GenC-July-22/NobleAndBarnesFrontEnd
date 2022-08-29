import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-entrypage',
  templateUrl: './entrypage.component.html',
  styleUrls: ['./entrypage.component.css']
})
export class EntrypageComponent implements OnInit {

  existing: 'existingCustomer';
  registerCust: 'registerCustomer';
  constructor(private router:Router) { }

  redirect(pathname:string)
  {
    this.router.navigate([`${pathname}`]);
  }

  register(pathname:string)
  {
    this.router.navigate([`${pathname}`]);

  }
  ngOnInit(): void {
  }

}
