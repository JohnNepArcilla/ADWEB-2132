import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MyserviceService } from './myservice.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { InventoryComponent } from './inventory/inventory.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    InventoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [MyserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
