import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  status : string='Home';
  currentUserId: number | undefined;
  
  constructor(){
   
  }

  getStatus($event: string) {
    this.status = $event
  }
  
}
