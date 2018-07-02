import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodCourtService } from "../shared/service/food-court.service";
import { Foodcourt } from "../shared/model/foodcourt.model";
import { Params, Router } from '@angular/router'
import { Stalls } from "../shared/model/foodcourtstalls.model";
import { FoodCourtDetailsService } from "../shared/service/foodcourt-details.service"
import { StallDishes } from "../shared/model/stalldishes.model";

@Component({
  selector: 'app-foodcourt-detail',
  templateUrl: './foodcourtdetail.component.html',
  styleUrls: ['./foodcourtdetail.component.css'],
  providers: [FoodCourtDetailsService]
})
export class FoodcourtDetailComponent implements OnInit {
  searchStr : string = "";
  selectedFoodCourt: Foodcourt;
  stallarr: Stalls[] = [];

  constructor(public router: Router,
    public route: ActivatedRoute,
    public FoodCourtService: FoodCourtService,
    public FoodCourtDetailsService: FoodCourtDetailsService) { }

  ngOnInit() {
    const fc_id: number = this.route.snapshot.params['fc_id'];
    this.stallarr = this.FoodCourtDetailsService.getStallByFcID(fc_id);
    
    
    
    if (this.stallarr.length == 0) {
      this.router.navigate(['/foodcourtdetail', fc_id]);
    }
  }

  onViewStalls(stall_id : number) {
    console.log(stall_id);
    this.router.navigate(['/stalldetail', stall_id])
  }
}
