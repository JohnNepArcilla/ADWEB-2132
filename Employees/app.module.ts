import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ServiceService } from './service.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Emplist1Component } from './emplist1/emplist1.component';
import { Emplist2Component } from './emplist2/emplist2.component';
import { Emplist3Component } from './emplist3/emplist3.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    Emplist1Component,
    Emplist2Component,
    Emplist3Component,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
