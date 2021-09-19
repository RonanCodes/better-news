import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';
import {
  Image,
  IrishTimesIphoneResponse,
  SizeElement,
  SizeEnum,
  Story,
} from '@better-news/api-interfaces';

@Component({
  selector: 'bnap-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArticleComponent {
  @Input() story?: Story;

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
