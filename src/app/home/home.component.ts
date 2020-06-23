import { Component, OnInit } from '@angular/core';
import { NewsUpdates } from '../shared/model/news.model';
import { NewsUpdatesService} from '../shared/service/news-updates.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  newsArr: NewsUpdates[] = [];

  constructor(private newsupdatesService: NewsUpdatesService, private router: Router, private route: ActivatedRoute, ) { }

  ngOnInit() {
    this.newsupdatesService.loadNews() 
    .subscribe((result)=>{
      this.newsArr = this.newsupdatesService.getNews();
    });
  }
}
