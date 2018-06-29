import { Component } from '@angular/core';
import { FoodCourtService } from "./shared/service/food-court.service";
import { FoodCourtDetailsService  } from "./shared/service/foodcourt-details.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [FoodCourtService, FoodCourtDetailsService]
})
export class AppComponent {
  title = 'app';
}

