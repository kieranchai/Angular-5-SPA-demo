import { Injectable } from '@angular/core';

import { Foodcourt } from "../model/foodcourt.model";
import { Stalls } from "../model/foodcourtstalls.model";

@Injectable()
export class FoodCourtDetailsService {

  public StallList = [
    new Stalls(1, 1, "Japanese Cuisine", "fc4_jap01.jpg", "fc4_jap02.jpg", "Japanese Cuisine with dishes like Chicken Katsu Curry and Katsu Dons" ),
    new Stalls(1, 2, "Western Food", "fc4_wes01.jpg", "fc4_wes02.jpg", "Western Cuisine with dishes like chicken cutlets and chops"),
    new Stalls(1, 3, "Drinks Store", "fc4_drinks01.jpg", "fc4_drinks02.jpg", "Drinks store with desserts and salad"),
    new Stalls(2, 4, "KFC", "fc6_kfc01.jpg", "fc6_kfc02.jpg", "Finger licking good" ),
    new Stalls(2, 5, "McDonalds", "fc6_mcd01.jpg", "fc6_mcd02.jpg", "Im lovin it" ),
    new Stalls(2, 6, "Subway", "fc6_subway01.jpg", "fc6_subway02.jpg", "Eat fresh" ),
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
