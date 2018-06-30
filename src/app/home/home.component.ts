import { Component, OnInit } from '@angular/core';
import { NewsUpdates } from '../shared/model/news.model';
import { NewsUpdatesService} from '../shared/service/news-updates.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  newsArr: NewsUpdates[] = [];
  constructor(public NewsUpdatesService: NewsUpdatesService) { }
  ngOnInit() {
    this.newsArr = this.NewsUpdatesService.getNews();
  }

}
