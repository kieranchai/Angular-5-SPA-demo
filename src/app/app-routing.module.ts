import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { ContactusComponent } from "./contactus/contactus.component";
import { FoodcourtSummaryComponent } from './foodcourt-summary/foodcourt-summary.component';
import { FoodcourtDetailComponent } from './foodcourtdetail/foodcourtdetail.component';
import { StalldetailComponent } from './stalldetail/stalldetail.component';

const appRoutes : Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home',                component: HomeComponent},
  {path: 'contactus',           component: ContactusComponent},
  {path: 'foodcourt-summary',   component: FoodcourtSummaryComponent},
  {path: 'foodcourtdetail/:fc_id', component: FoodcourtDetailComponent},
  {path: 'stalldetail/:stall_id', component: StalldetailComponent},
  {path: '**', redirectTo: '/home'} 
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],

  exports: [
    RouterModule
  ],

  declarations: []
})
export class AppRoutingModule { }
