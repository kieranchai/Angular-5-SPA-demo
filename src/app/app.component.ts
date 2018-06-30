import { Component } from '@angular/core';
import { FoodCourtService } from "./shared/service/food-court.service";
import { FoodCourtDetailsService  } from "./shared/service/foodcourt-details.service";
import { StalldetailsService } from "./shared/service/stalldetails.service";
import { NewsUpdatesService } from './shared/service/news-updates.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [FoodCourtService, FoodCourtDetailsService, StalldetailsService, NewsUpdatesService]
})
export class AppComponent {
  title = 'app';
}

