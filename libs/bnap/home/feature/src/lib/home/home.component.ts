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

@Component({
  selector: 'bnap-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  public latestStories$: Observable<Story[]>;

  constructor(private http: HttpClient) {
    this.latestStories$ = this.http.get<Story[]>('/api/latest');
  }

  // getImages(images: Image[]): Image {
  //   return images[0]!;
  // }

  getLargeImage(images: Image[]): string {
    // sizeElements: SizeElement[]
    const sizeElements = images[0].sizes!;

    return this.getLargeImageOrFirst(sizeElements!);
  }

  private getLargeImageOrFirst(sizeElements: SizeElement[]) {
    const largeImageSource = sizeElements.find(
      (sizeElement) => sizeElement.size === SizeEnum.Large
    )?.source;
    return largeImageSource ? largeImageSource : sizeElements[0]?.source;
  }

  getImageCaption(images: Image[]): string {
    const image = images[0];
    return image.caption!;
  }

  getWriterImage(image: Image): string {
    const sizeElements = image.sizes;
    return sizeElements ? this.getLargeImageOrFirst(sizeElements!) : '';
  }
}
