import { Component, OnInit } from '@angular/core';
import { Foodcourt } from '../shared/model/foodcourt.model';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FoodCourtService } from '../shared/service/food-court.service';

@Component({
  selector: 'app-foodcourtdetail',
  templateUrl: './foodcourtdetail.component.html',
  styleUrls: ['./foodcourtdetail.component.css']
})
export class FoodcourtdetailComponent implements OnInit {
  selectedFoodCourt : Foodcourt;

  constructor(public router: Router,
    public route: ActivatedRoute, 
    public FoodCourtService : FoodCourtService
  ) { }

  ngOnInit() {
    const fc_id : number = this.route.snapshot.params['fc_id'];
    this.selectedFoodCourt = this.FoodCourtService.getFoodCourtByFcID(fc_id);
    if(this.selectedFoodCourt==null){
      this.router.navigate(['/foodcourtdetail',fc_id]);
    }
  }

}