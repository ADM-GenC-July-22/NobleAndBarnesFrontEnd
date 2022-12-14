import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Router } from '@angular/router';
import { Customer } from '../customer';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @Output() dataEvent = new EventEmitter<string>();
  
  constructor(private customerService:CustomerService, private router:Router) { }

  ngOnInit(): void {
  }

  changeRoute(pathname:String):void{
    this.router.navigate([`${pathname}`]);
  }

  changeStatus(value:string) : void{
    this.dataEvent.emit(value);
  }

  goToPage(pageName:string):void{
    this.router.navigate([`${pageName}`]);
  }
  
  callDelete() : void{
    let goahead: boolean;
    goahead = confirm('Do you want to delete?');
    if(goahead)
    {

      let currentCustomerId = this.customerService.getCustomerId();
      this.customerService.deleteCustomer(currentCustomerId).subscribe(
        () => this.dataEvent.emit('Logging')
      );
      this.router.navigateByUrl('/');
    }
    else{
      this.dataEvent.emit('Home');
    }
  }

}
