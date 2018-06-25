import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { FoodcourtSummaryComponent } from './foodcourt-summary/foodcourt-summary.component';
import { HomeComponent } from './home/home.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HeaderComponent } from './header/header.component';
import { FoodCourtService } from './shared/service/food-court.service';


@NgModule({
  declarations: [
    AppComponent,
    FoodcourtSummaryComponent,
    HomeComponent,
    ContactusComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [FoodCourtService],
  bootstrap: [AppComponent]
})
export class AppModule { }
