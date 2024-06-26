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
  selector: 'bnap-article-preview-simple',
  templateUrl: './article-preview-simple.component.html',
  styleUrls: ['./article-preview-simple.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArticlePreviewSimpleComponent {
  stringify(story: Story): string {
    return JSON.stringify(story);
  }

  // TODO: move this to a util class as it's all duplicated
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

  getFormattedDate(date: string): string {
    const formattedDate = new Date(Date.parse(date));
    // return formattedDate.toLocaleDateString();

    // `${formattedDate.toDateString()}
    return formattedDate.toLocaleTimeString('en-IE', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour12: true,
    });
    // return formattedDate.toLocaleString();
  }
}
