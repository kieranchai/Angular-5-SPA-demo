import { Component, OnInit } from '@angular/core';
import { FoodCourtService } from "../shared/service/food-court.service";
import { Foodcourt } from "../shared/model/foodcourt.model";
import { Router } from "@angular/router";
@Component({
  selector: 'app-foodcourt-summary',
  templateUrl: './foodcourt-summary.component.html',
  styleUrls: ['./foodcourt-summary.component.css']
})
export class FoodcourtSummaryComponent implements OnInit {
  foodcourtArr : Foodcourt [] = [];
  constructor(public foodCourtService : FoodCourtService, public router : Router) { }

  ngOnInit() {
    this.foodcourtArr = this.foodCourtService.getFoodCourts(); 
  }
  onViewDetail(fc_id : number) {
    console.log("In onViewDetail" + fc_id);

    this.router.navigate(['/foodcourtdetail', fc_id])
  }
}
