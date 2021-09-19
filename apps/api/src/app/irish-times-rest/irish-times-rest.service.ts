import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';

import {
  Assettype,
  IrishTimesIphoneResponse,
  Story,
} from '@better-news/api-interfaces';
import { IrishTimesRestEndpoint } from './irish-times-rest-endpoint.model';
import { IrishTimesRestConstants } from './irish-times-rest.constants';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';

@Injectable()
export class IrishTimesRestService {
  constructor(private httpService: HttpService) {}

  private getIrishTimesUrl(endpoint: string): string {
    return `${IrishTimesRestConstants.baseUrl}${endpoint}`;
  }

  private get(endpoint: string) {
    return this.httpService
      .get<IrishTimesIphoneResponse>(this.getIrishTimesUrl(endpoint))
      .pipe(
        map((axiosResponse) => axiosResponse.data.stories),
        map((stories) =>
          stories.filter((story) => story.assettype === Assettype.Article)
        ),
        tap((stories) => stories.forEach((story) => this.sanitizeStory(story)))
      );

    // <script>
  }

  sanitizeStory(story: Story): void {
    story.content = this.removeScriptsFromHTML(story.content);
  }

  // Move to util lib
  removeScriptsFromHTML(htmlString: string): string {
    // !?(<script>).+?(<\/script>)

    // const scriptTagsAndContent = `(<script>)\\w.*(<\\/script>)`;

    // const pattern = new RegExp('!?(<script>)\\w.*(<\\/script>)');
    // const pattern = new RegExp('!?(<script>)\\w.*(<\\/script>)');

    // const pattern = new RegExp('!?(<script>).+?(<\\/script>)');
    // const result = pattern.exec(htmlString);
    // console.log({ result });

    // g flag to replace ALL occurences: https://www.codeguage.com/courses/regexp/flags

    // TODO: use a library to find and remove all divs with the advert class on it.

    const pattern3 = new RegExp('!?(<script>).+?(</script>)', 'g');

    const sanitizedString = htmlString.replace(pattern3, '');

    // htmlString.replace('!?(<script>).+?(<\\/script>)', '');
    // console.log({ sanitizedString });

    return sanitizedString;
  }

  // removeTags(htmlString: string, tagName: string) {}

  getAbroad() {
    return this.get(IrishTimesRestEndpoint.Abroad);
  }
  getBrexit() {
    return this.get(IrishTimesRestEndpoint.Brexit);
  }
  getBusiness() {
    return this.get(IrishTimesRestEndpoint.Business);
  }
  getCoronavirus() {
    return this.get(IrishTimesRestEndpoint.Coronavirus);
  }
  getCulture() {
    return this.get(IrishTimesRestEndpoint.Culture);
  }
  getGalleries() {
    return this.get(IrishTimesRestEndpoint.Galleries);
  }
  getIreland() {
    return this.get(IrishTimesRestEndpoint.Ireland);
  }
  getLatest() {
    return this.get(IrishTimesRestEndpoint.Latest);
  }
  getLifeStyle() {
    return this.get(IrishTimesRestEndpoint.LifeStyle);
  }
  getMostRead() {
    return this.get(IrishTimesRestEndpoint.MostRead);
  }
  getOpinion() {
    return this.get(IrishTimesRestEndpoint.Opinion);
  }
  getPolitics() {
    return this.get(IrishTimesRestEndpoint.Politics);
  }
  getSport() {
    return this.get(IrishTimesRestEndpoint.Sport);
  }
  getSubscriberOnly() {
    return this.get(IrishTimesRestEndpoint.SubscriberOnly);
  }
  getTopStories() {
    return this.get(IrishTimesRestEndpoint.TopStories);
  }
  getVideo() {
    return this.get(IrishTimesRestEndpoint.Video);
  }
  getWorld() {
    return this.get(IrishTimesRestEndpoint.World);
  }
}
