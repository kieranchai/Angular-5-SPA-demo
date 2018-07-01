import { Injectable } from '@angular/core';
import { StallDishes } from '../model/stalldishes.model';
import { Foodcourt } from "../model/foodcourt.model";
import { Stalls } from "../model/foodcourtstalls.model";

@Injectable()
export class StalldetailsService {
  public DishList = [
    new StallDishes(1,1,1, "Chicken Katsu Curry rice", "../assets/images/11.jpg", "Available", "$4.00"),
    new StallDishes(1,1,2, "Chicken Katsu Don", "../assets/images/12.jpg", "Available", "$4.00"),
    new StallDishes(1,1,3, "Chawamushi", "../assets/images/13.jpg", "Available", "$1.50"),
    new StallDishes(1,2,4, "Chicken Cutlet", "../assets/images/24.jpg", "Available", "2.50"),
    new StallDishes(1,2,5, "Grilled Fish", "../assets/images/25.jpg", "Available", "$4.00"),
    new StallDishes(1,2,6, "Mashed Potatoes", "../assets/images/26.jpg", "Available", "$1.50"),
    new StallDishes(1,3,7, "Milo", "../assets/images/37.jpg", "Available", "$1.00"),
    new StallDishes(1,3,8, "Iced Tea", "../assets/images/38.jpg", "Available", "$1.00"),
    new StallDishes(1,3,9, "Apple Juice", "../assets/images/39.jpg", "Available", "$1.50"),
    new StallDishes(2,4,10, "Nasi Lemak", "../assets/images/410.jpg", "Not Available", "$3.00"),
    new StallDishes(2,4,11, "Mee Goreng", "../assets/images/411.jpg", "Not Available", "$3.00"),
    new StallDishes(2,4,12, "Ayam Penyet", "../assets/images/412.jpg", "Available", "3.00"),
    new StallDishes(2,5,13, "Milo", "../assets/images/37.jpg", "Available", "$1.00"),
    new StallDishes(2,5,14, "Iced Tea", "../assets/images/38.jpg", "Available", "$1.00"),
    new StallDishes(2,5,15, "Coffee", "../assets/images/515.jpg", "Available", "$0.70"),
    new StallDishes(2,6,16, "Steamed Chicken Rice", "../assets/images/616.jpg", "Available", "$3.00"),
    new StallDishes(2,6,17, "Roasted Chicken Rice", "../assets/images/617.jpg", "Available", "$3.00"),
    new StallDishes(2,6,18, "Char Siew Rice", "../assets/images/618.jpg", "Available", "$3.00")
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
