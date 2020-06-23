import { Injectable } from '@angular/core';
import { StallDishes } from '../model/stalldishes.model';
import { Foodcourt } from "../model/foodcourt.model";
import { Stalls } from "../model/foodcourtstalls.model";
import { Http, Response } from '@angular/http';
@Injectable()
export class StalldetailsService {
  private DishList : StallDishes [] = [];
  constructor(private http: Http) {}
  loadDishes(fc_id, stall_id) {
    return this.http.get("/api/foodcourt/" + fc_id + "/foodcourtstall/" + stall_id + "/foodcourtstalldishes")
        .map((respone: Response) => {
                const data = respone.json();
                this.DishList = data;
                return data;
            },
            (error) => console.log(error)
        );
  }
  getDishes() {
    return this.DishList.slice();
  }
  
  getDishesByStallID (stall_id:string) {
    let dishArr : StallDishes [] = [];
    for (let s of this.DishList) {
      if (s.stall_id == stall_id) {
        dishArr.push(s);
      }
    }

    return dishArr.slice();
  }
}
