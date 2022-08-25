import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CustomerService } from '../customer.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @Output() dataEvent = new EventEmitter<string>();
  
  constructor(private customerService:CustomerService) { }

  ngOnInit(): void {
  }

  changeStatus(value:string) : void{
    this.dataEvent.emit(value);
  }

  callDelete() : void{
    let goahead: boolean;
    goahead = confirm('Do you want to delete?');
    if(goahead)
    {
      this.customerService.deleteCustomer(6).subscribe(
        () => this.dataEvent.emit('Logging')
      );
    }
    else{
      this.dataEvent.emit('Home');
    }
  }

}
