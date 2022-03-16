import { Component } from '@angular/core';
import { ServiceService } from './service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Employees';
  employeeslist : any;

  constructor(private service:ServiceService){}
  ngOnInit(): void {
    this.employeeslist = this.service.emplist();
  }
}