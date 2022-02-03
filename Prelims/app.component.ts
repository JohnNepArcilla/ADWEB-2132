import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Interpolation Demo';
  appName = "This is an one-way data binding example";

  header1 = 'Number Interpolation';
  //numeric binding
  n1 = 1212312314;
  n2 = 1424235892;
  sum = 0;
  diff = 0;
  quo = 0;
  prod = 0;

//property binding

clientName:string ="Nep";

//style binding
appliedCSSClass= "green";
notappliedCSSClass=false;
myColor="Red";

//two-way data binding
showData($event:any){
  console.log("Button is Clicked!");

}
//keyup function
getData(data:any){
  console.warn(data)
}

}