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
import { FindPipe } from './shared/pipe/text.pipe';
import { HoverhighlightDirective } from './shared/directive/hoverhighlight.directive';
import { HttpModule } from '../../node_modules/@angular/http';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { feedbackService } from './shared/service/feedback.service';
import { FoodCourtDetailsService } from './shared/service/foodcourt-details.service';
import { NewsUpdatesService } from './shared/service/news-updates.service';
import { StalldetailsService } from './shared/service/stalldetails.service';
import { FeedbacklistComponent } from './feedbacklist/feedbacklist.component';
import { RegistrationComponent } from './registration/registration.component';
import { UserService } from './shared/service/user.service';
@NgModule({
  declarations: [
    AppComponent,
    FoodcourtSummaryComponent,
    HomeComponent,
    ContactusComponent,
    HeaderComponent,
    FoodcourtDetailComponent,
    StalldetailComponent,
    FindPipe,
    HoverhighlightDirective,
    PageNotFoundComponent,
    FeedbacklistComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [feedbackService, FoodCourtService, FoodCourtDetailsService, NewsUpdatesService, StalldetailsService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
