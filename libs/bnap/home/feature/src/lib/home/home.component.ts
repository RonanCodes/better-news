import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  Image,
  IrishTimesIphoneResponse,
  SizeElement,
  SizeEnum,
  Story,
} from '@better-news/api-interfaces';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'bnap-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  public latestStories$: Observable<Story[]>;

  constructor(private http: HttpClient) {
    this.latestStories$ = this.http
      .get<Story[]>('/api/latest')
      .pipe(delay(4000));
  }

  // getImages(images: Image[]): Image {
  //   return images[0]!;
  // }
}
