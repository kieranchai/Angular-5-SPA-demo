import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Foodcourt } from "../model/foodcourt.model";
import { Stalls } from "../model/foodcourtstalls.model";

@Injectable()
export class FoodCourtDetailsService {
  private StallList : Stalls [] = [];
  constructor(private http:Http) { }
  loadStall(fc_id) {
    return this.http.get("/api/foodcourt/" + fc_id + "/foodcourtstall")
        .map((respone: Response) => {
                const data = respone.json();
                this.StallList = data;
                return data;
            },
            (error) => console.log(error)
        );
}
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


  getStallByFcID (fc_id:string) {
    let resultArr : Stalls [] = [];

    for (let s of this.StallList) {
      if (s.fc_id == fc_id) {
        resultArr.push(s);
      }
    }

    return resultArr.slice();
  }
}
