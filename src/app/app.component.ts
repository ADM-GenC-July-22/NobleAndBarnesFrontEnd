import { Component} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  status : string='Home';
  currentUserId: number | undefined;
  
  constructor(private router:Router){
  }

  


  getStatus($event: string) {
    this.status = $event
  }
  
}
