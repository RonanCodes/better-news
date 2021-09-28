import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  Image,
  IrishTimesIphoneResponse,
  SizeElement,
  SizeEnum,
  Story,
} from '@better-news/api-interfaces';

import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'bnap-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArticleComponent {
  public showMetaData = false;
  @Input() story?: Story;

  public state$: any;

  // public story?;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    // Start each page at the top (because browser remembers route scroll location, can remove once unique id per story):
    window.scroll(0, 0);

    console.log('ARTICLE INIT');

    // this.story$ = this.route.paramMap.pipe(
    //   switchMap((params) => {
    //     this.selectedId = Number(params.get('id'));
    //     return this.service.getHeroes();
    //   })
    // );

    // this.story = JSON.parse(
    //   this.route!.snapshot!.paramMap!.get('story')!
    // ) as Story;

    // console.log({ state: window.history.state });

    // TODO: We should use a data store (NGRX) with a unique id per story
    try {
      this.story = JSON.parse(window.history.state['story']);
    } catch (error) {
      console.error(
        'Cannot reload and article, must navigate from article preview list page',
        { error }
      );
    }

    // this.state$ = this.route.paramMap.pipe(
    //   tap((paramMap) => console.log({ paramMap })),

    //   map(() => window.history.state),
    //   tap((state) => (this.story = state['story'])),
    //   tap((state) => console.log({ state }))
    // );
  }

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
