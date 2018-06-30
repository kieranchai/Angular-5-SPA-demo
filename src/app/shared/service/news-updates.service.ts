import { Injectable } from '@angular/core';
import { NewsUpdates } from '../model/news.model';

@Injectable()
export class NewsUpdatesService {
  public NewsList = [
    new NewsUpdates(1, "Foodcourt 4 closed down on 30th June due to maintenance."),
    new NewsUpdates(2, "Unexpected fire in Foodcourt 6, closed down today 25th June.")
  ]
  constructor() { }
  getNews() {
    return this.NewsList.slice();
  }
}
