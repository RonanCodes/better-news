import { IrishTimesIphoneResponse } from '@better-news/api-interfaces';
import { Controller, Get } from '@nestjs/common';

import { IrishTimesRestEndpoint } from './irish-times-rest/irish-times-rest-endpoint.model';
import { IrishTimesRestService } from './irish-times-rest/irish-times-rest.service';

@Controller()
export class AppController {
  constructor(private readonly irishTimesRestService: IrishTimesRestService) {}

  @Get(IrishTimesRestEndpoint.Abroad)
  getAbroad() {
    return this.irishTimesRestService.getAbroad();
  }

  @Get(IrishTimesRestEndpoint.Brexit)
  getBrexit(): string {
    return this.irishTimesRestService.getBrexit();
  }

  @Get(IrishTimesRestEndpoint.Business)
  getBusiness(): string {
    return this.irishTimesRestService.getBusiness();
  }

  @Get(IrishTimesRestEndpoint.Coronavirus)
  getCoronavirus(): string {
    return this.irishTimesRestService.getCoronavirus();
  }

  @Get(IrishTimesRestEndpoint.Culture)
  getCulture(): string {
    return this.irishTimesRestService.getCulture();
  }

  @Get(IrishTimesRestEndpoint.Galleries)
  getGalleries(): string {
    return this.irishTimesRestService.getGalleries();
  }

  @Get(IrishTimesRestEndpoint.Ireland)
  getIreland(): string {
    return this.irishTimesRestService.getIreland();
  }

  @Get(IrishTimesRestEndpoint.Latest)
  getLatest(): string {
    return this.irishTimesRestService.getLatest();
  }

  @Get(IrishTimesRestEndpoint.LifeStyle)
  getLifeStyle(): string {
    return this.irishTimesRestService.getLifeStyle();
  }

  @Get(IrishTimesRestEndpoint.MostRead)
  getMostRead(): string {
    return this.irishTimesRestService.getMostRead();
  }

  @Get(IrishTimesRestEndpoint.Opinion)
  getOpinion(): string {
    return this.irishTimesRestService.getOpinion();
  }

  @Get(IrishTimesRestEndpoint.Politics)
  getPolitics(): string {
    return this.irishTimesRestService.getPolitics();
  }

  @Get(IrishTimesRestEndpoint.Sport)
  getSport(): string {
    return this.irishTimesRestService.getSport();
  }

  @Get(IrishTimesRestEndpoint.SubscriberOnly)
  getSubscriberOnly(): string {
    return this.irishTimesRestService.getSubscriberOnly();
  }

  @Get(IrishTimesRestEndpoint.TopStories)
  getTopStories(): string {
    return this.irishTimesRestService.getTopStories();
  }

  @Get(IrishTimesRestEndpoint.Video)
  getVideo(): string {
    return this.irishTimesRestService.getVideo();
  }

  @Get(IrishTimesRestEndpoint.World)
  getWorld(): string {
    return this.irishTimesRestService.getWorld();
  }
}
