import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { FoodcourtSummaryComponent } from './foodcourt-summary/foodcourt-summary.component';
import { HomeComponent } from './home/home.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HeaderComponent } from './header/header.component';
import { FoodCourtService } from './shared/service/food-court.service';
import { FoodcourtDetailComponent } from './foodcourtdetail/foodcourtdetail.component';
import { ReactiveFormsModule } from '@angular/forms';
import { Foodcourt } from "./shared/model/foodcourt.model";
import { Stalls } from "./shared/model/foodcourtstalls.model";
import { StalldetailComponent } from './stalldetail/stalldetail.component'
import { StallDishes } from './shared/model/stalldishes.model';
import { TextPipe } from './shared/pipe/text.pipe';
import { HoverhighlightDirective } from './shared/directive/hoverhighlight.directive';


@NgModule({
  declarations: [
    AppComponent,
    FoodcourtSummaryComponent,
    HomeComponent,
    ContactusComponent,
    HeaderComponent,
    FoodcourtDetailComponent,
    StalldetailComponent,
    TextPipe,
    HoverhighlightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
