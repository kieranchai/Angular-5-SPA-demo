import { Injectable } from '@angular/core';

import { Foodcourt } from "../model/foodcourt.model";
import { Stalls } from "../model/foodcourtstalls.model";

@Injectable()
export class FoodCourtDetailsService {

  public StallList = [
    new Stalls(1, 1, "Japanese Cuisine", "fc4_jap01.jpg", "fc4_jap02.jpg", "Japanese Cuisine with dishes like Chicken Katsu Curry and Katsu Dons." ),
    new Stalls(1, 2, "Western Food", "fc4_wes01.jpg", "fc4_wes02.jpg", "Western Cuisine with dishes like chicken chops and mashed potatoes."),
    new Stalls(1, 3, "Drinks Store", "fc4_drinks01.jpg", "fc4_drinks02.jpg", "Drinks store with desserts."),
    new Stalls(2, 4, "Malay Rice", "fc6_malayrice01.jpg", "fc6_malayrice02.jpg", "A wide selection of halal food." ),
    new Stalls(2, 5, "Drinks Store", "fc6_drinks01.jpg", "fc6_drinks02.jpg", "Drinks store ranging from bottled drinks to brewed coffee." ),
    new Stalls(2, 6, "Chicken Rice", "fc6_chicken01.jpg", "fc6_chicken02.jpg", "The Singaporean favourite." ),
  ]

  getFoodCourtsStalls() {
    return this.StallList.slice();
  }

  getFoodCourtStallByStallID(stall_id) {
    for (let stall of this.StallList) {
      if (stall.stall_id == stall_id) {
        return stall;
      }
    }
    return null;
  }


  getStallByFcID (fc_id:number) {
    let resultArr : Stalls [] = [];

    for (let s of this.StallList) {
      if (s.fc_id == fc_id) {
        resultArr.push(s);
      }
    }

    return resultArr.slice();
  }
  
  
  constructor() { }

}
