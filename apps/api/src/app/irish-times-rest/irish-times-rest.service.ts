import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';

import { IrishTimesIphoneResponse } from '@better-news/api-interfaces';
import { IrishTimesRestEndpoint } from './irish-times-rest-endpoint.model';
import { IrishTimesRestConstants } from './irish-times-rest.constants';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class IrishTimesRestService {
  constructor(private httpService: HttpService) {}

  private getIrishTimesUrl(endpoint: string): string {
    return `${IrishTimesRestConstants.baseUrl}${endpoint}`;
  }

  private get(endpoint: string) {
    return this.httpService
      .get<IrishTimesIphoneResponse>(this.getIrishTimesUrl(endpoint))
      .pipe(map((axiosResponse) => axiosResponse.data));
  }

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
