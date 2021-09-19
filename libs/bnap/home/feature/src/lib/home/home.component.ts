import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IrishTimesIphoneResponse } from '@better-news/api-interfaces';

@Component({
  selector: 'bnap-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {
  latest$ = this.http.get<IrishTimesIphoneResponse>('/api/latest');
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    console.log('ngOnInit()');
  }
}
