import { Component } from '@angular/core';
import { MyserviceService } from './myservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Services';
  todayDate: any;
  componentproperty:any;

  constructor(private myservice:MyserviceService){}
  ngOnInit(): void {
    this.todayDate = this.myservice.showTodayDate();
    console.log(this.myservice.serviceproperty);
    this.myservice.serviceproperty = "component created";
    this.componentproperty = this.myservice.serviceproperty;
  }
}
