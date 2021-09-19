import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IrishTimesIphoneResponse } from '@better-news/api-interfaces';

@Component({
  selector: 'better-news-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  hello$ = this.http.get<IrishTimesIphoneResponse>('/api/world');
  constructor(private http: HttpClient) {}
}
