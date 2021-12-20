import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: any;
  data:any

  selectedEvent($event){
  console.log("as");
    this.data=$event;
    console.log(this.data)
  }
}
