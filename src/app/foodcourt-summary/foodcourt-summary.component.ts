import { Component, OnInit } from '@angular/core';
import { FoodCourtService } from "../shared/service/food-court.service";
import { Foodcourt } from "../shared/model/foodcourt.model";

@Component({
  selector: 'app-foodcourt-summary',
  templateUrl: './foodcourt-summary.component.html',
  styleUrls: ['./foodcourt-summary.component.css']
})
export class FoodcourtSummaryComponent implements OnInit {
  foodcourtArr : Foodcourt [] = [];
  constructor(public foodCourtService : FoodCourtService ) { }

  ngOnInit() {
    this.foodcourtArr = this.foodCourtService.getFoodCourts(); 
  }

}
