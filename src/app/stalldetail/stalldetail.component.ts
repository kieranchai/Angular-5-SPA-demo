import { Component, OnInit } from '@angular/core';
import { StalldetailsService } from '../shared/service/stalldetails.service';
import { StallDishes } from '../shared/model/stalldishes.model';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { FoodCourtDetailsService } from '../shared/service/foodcourt-details.service';

@Component({
  selector: 'app-stalldetail',
  templateUrl: './stalldetail.component.html',
  styleUrls: ['./stalldetail.component.css']
})
export class StalldetailComponent implements OnInit {
  dishesArr : StallDishes[] = [];

  constructor(public router: Router,
    public route: ActivatedRoute,
    public StalldetailsService: StalldetailsService,
    public FoodCourtDetailsService: FoodCourtDetailsService) { }

  ngOnInit() {
    const stall_id: number = this.route.snapshot.params['stall_id'];
    this.dishesArr = this.StalldetailsService.getDishesByStallID(stall_id);
  }

}
