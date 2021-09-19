import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  Category,
  Image,
  IrishTimesIphoneResponse,
  IrishTimesRestEndpoint,
  SizeElement,
  SizeEnum,
  Story,
} from '@better-news/api-interfaces';
import { Observable } from 'rxjs';
import { delay, switchMap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'bnap-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoryComponent implements OnInit {
  public stories$?: Observable<Story[]>;
  public categoryName?: IrishTimesRestEndpoint;

  constructor(
    private http: HttpClient,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // const category = IrishTimesRestEndpoint.SubscriberOnly;
    // Todo: change to regular case (lodash)
    // this.categoryName = category;

    // const category = this.activatedRoute.snapshot.paramMap.get(
    //   'category'
    // ) as IrishTimesRestEndpoint;
    // this.categoryName = category;

    // console.log({ category });

    // console.log('ngOnInit');
    // this.stories$ = this.http.get<Story[]>(`/api/${category}`);

    this.stories$ = this.activatedRoute.paramMap.pipe(
      switchMap((params) => {
        const category = params.get('category') as IrishTimesRestEndpoint;
        const id = params.get('id') as IrishTimesRestEndpoint;
        // Todo: change to regular case (lodash)

        this.categoryName = category;
        console.log({ params, category, id });
        return this.http.get<Story[]>(`/api/${category}`);
      })
    );
    // this.stories$ = this.http.get<Story[]>(`/api/${category}`);
    // .pipe(delay(4000));
    console.log('init');
  }
}
