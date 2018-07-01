import { Injectable } from '@angular/core';
import { Foodcourt } from '../model/foodcourt.model';

@Injectable()
export class FoodCourtService {

  public foodcourtList = [
    new Foodcourt(1, "Foodcourt 4 Koufu", "Near Auditorium", "Mon-Sat, 8.00am-8.00pm", "../assets/images/fc4_1.jpg", "../assets/images/fc4_2.jpg",
    "FoodCourt 4 brings Koufu to Singapore Polytechnic to offer students quality food from one of the best foodcourts."),
    new Foodcourt(2, "Foodcourt 6", "T19", "Mon-Fri, 8.00am-8.00pm", "../assets/images/fc6_1.jpg", "../assets/images/fc6_2.jpg",
    "FoodCourt 6 at the Singapore Polytechnic.")
  ];

  constructor() { }
  getFoodCourts() {
    return this.foodcourtList.slice();
  }
  getFoodCourtByFcID(fc_id) {
    for (let fc of this.foodcourtList) {
      if (fc.fc_id == fc_id) {
        return fc;
      }
    }
    return null;
  }
}
