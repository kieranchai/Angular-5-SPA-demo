import { Injectable } from '@angular/core';
import { StallDishes } from '../model/stalldishes.model';
import { Foodcourt } from "../model/foodcourt.model";
import { Stalls } from "../model/foodcourtstalls.model";

@Injectable()
export class StalldetailsService {
  public DishList = [
    new StallDishes(1,1,1, "Chicken Katsu Curry rice", "fc411.jpg", "Available", "$4.00"),
    new StallDishes(1,1,2, "Chicken Katsu Don", "fc412.jpg", "Available", "$4.00"),
    new StallDishes(1,1,3, "Chawamushi", "fc413.jpg", "Available", "$1.50"),
    new StallDishes(1,2,4, "Chicken Cutlet", "fc424.jpg", "Available", "2.50"),
    new StallDishes(1,2,5, "Grilled Fish", "fc425.jpg", "Available", "$4.00"),
    new StallDishes(1,2,6, "Mashed Potatoes", "fc426.jpg", "Available", "$1.50"),
    new StallDishes(1,3,7, "Milo", "fc437.jpg", "Available", "$1.00"),
    new StallDishes(1,3,8, "Iced Tea", "fc438.jpg", "Available", "$1.00"),
    new StallDishes(1,3,9, "Apple Juice", "fc439.jpg", "Available", "$1.50"),
    new StallDishes(2,4,10, "Nasi Lemak", "fc6410.jpg", "Not Available", "$3.00"),
    new StallDishes(2,4,11, "Mee Goreng", "fc6411.jpg", "Not Available", "$3.00"),
    new StallDishes(2,4,12, "Ayam Penyet", "fc6412.jpg", "Available", "3.00"),
    new StallDishes(2,5,13, "Milo", "fc6513.jpg", "Available", "$1.00"),
    new StallDishes(2,5,14, "Iced Tea", "fc6514.jpg", "Available", "$1.00"),
    new StallDishes(2,5,15, "Coffee", "fc6515", "Available", "$0.70"),
    new StallDishes(2,6,16, "Steamed Chicken Rice", "fc6616.jpg", "Available", "$3.00"),
    new StallDishes(2,6,17, "Roasted Chicken Rice", "fc6617.jpg", "Available", "$3.00"),
    new StallDishes(2,6,18, "Char Siew Rice", "fc6618.jpg", "Available", "$3.00")
  ]
  constructor() { }
  getDishesByStallID (stall_id:number) {
    let dishArr : StallDishes [] = [];

    for (let s of this.DishList) {
      if (s.stall_id == stall_id) {
        dishArr.push(s);
      }
    }

    return dishArr.slice();
  }
}
