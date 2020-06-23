import { Injectable } from '@angular/core';
import { NewsUpdates } from '../model/news.model';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/Rx';
@Injectable()
export class NewsUpdatesService {
  private NewsList : NewsUpdates [] = [];
  
  constructor(private http: Http) { }
  loadNews() {
    return this.http.get("/api/news")
        .map((respone: Response) => {
                const data = respone.json();
                this.NewsList = data;
                return data;
            },
            (error) => console.log(error)
        );
}

getNews() {
  return this.NewsList.slice();
}

}
