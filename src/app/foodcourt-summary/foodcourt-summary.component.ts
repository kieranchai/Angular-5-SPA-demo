import { Component, OnInit } from '@angular/core';
import { FoodCourtService } from "../shared/service/food-court.service";
import { Foodcourt } from "../shared/model/foodcourt.model";
import { Router } from '@angular/router';
import { RouterModule, Routes } from '@angular/router';
import { FoodcourtDetailComponent } from '../foodcourtdetail/foodcourtdetail.component';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-foodcourt-summary',
  templateUrl: './foodcourt-summary.component.html',
  styleUrls: ['./foodcourt-summary.component.css'],
  providers: [FoodCourtService]
})
export class FoodcourtSummaryComponent implements OnInit {

  foodcourtArr: Foodcourt[] = [];

  constructor(private foodCourtService: FoodCourtService, private router: Router, private route: ActivatedRoute, ) { }

  ngOnInit() {
    // this.foodcourtArr = this.foodCourtService.getFoodCourts();
    this.foodCourtService.loadFoodcourt() 
    .subscribe((result)=>{
      this.foodcourtArr = this.foodCourtService.getFoodCourts();
    });
  }

  onViewDetail(fc_id: number) {
    console.log(fc_id);
    this.router.navigate(['/foodcourtdetail', fc_id])
  }

}
