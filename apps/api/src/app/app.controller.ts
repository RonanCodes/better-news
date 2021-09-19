import { IrishTimesIphoneResponse } from '@better-news/api-interfaces';
import { Controller, Get, Render } from '@nestjs/common';

import { IrishTimesRestEndpoint } from './irish-times-rest/irish-times-rest-endpoint.model';
import { IrishTimesRestService } from './irish-times-rest/irish-times-rest.service';

@Controller()
export class AppController {
  constructor(private readonly irishTimesRestService: IrishTimesRestService) {}

  @Get()
  @Render('index')
  root() {}

  @Get(IrishTimesRestEndpoint.Abroad)
  getAbroad() {
    return this.irishTimesRestService.getAbroad();
  }

  @Get(IrishTimesRestEndpoint.Brexit)
  getBrexit() {
    return this.irishTimesRestService.getBrexit();
  }

  @Get(IrishTimesRestEndpoint.Business)
  getBusiness() {
    return this.irishTimesRestService.getBusiness();
  }

  @Get(IrishTimesRestEndpoint.Coronavirus)
  getCoronavirus() {
    return this.irishTimesRestService.getCoronavirus();
  }

  @Get(IrishTimesRestEndpoint.Culture)
  getCulture() {
    return this.irishTimesRestService.getCulture();
  }

  @Get(IrishTimesRestEndpoint.Galleries)
  getGalleries() {
    return this.irishTimesRestService.getGalleries();
  }

  @Get(IrishTimesRestEndpoint.Ireland)
  getIreland() {
    return this.irishTimesRestService.getIreland();
  }

  @Get(IrishTimesRestEndpoint.Latest)
  getLatest() {
    return this.irishTimesRestService.getLatest();
  }

  @Get(IrishTimesRestEndpoint.LifeStyle)
  getLifeStyle() {
    return this.irishTimesRestService.getLifeStyle();
  }

  @Get(IrishTimesRestEndpoint.MostRead)
  getMostRead() {
    return this.irishTimesRestService.getMostRead();
  }

  @Get(IrishTimesRestEndpoint.Opinion)
  getOpinion() {
    return this.irishTimesRestService.getOpinion();
  }

  @Get(IrishTimesRestEndpoint.Politics)
  getPolitics() {
    return this.irishTimesRestService.getPolitics();
  }

  @Get(IrishTimesRestEndpoint.Sport)
  getSport() {
    return this.irishTimesRestService.getSport();
  }

  @Get(IrishTimesRestEndpoint.SubscriberOnly)
  getSubscriberOnly() {
    return this.irishTimesRestService.getSubscriberOnly();
  }

  @Get(IrishTimesRestEndpoint.TopStories)
  getTopStories() {
    return this.irishTimesRestService.getTopStories();
  }

  @Get(IrishTimesRestEndpoint.Video)
  getVideo() {
    return this.irishTimesRestService.getVideo();
  }

  @Get(IrishTimesRestEndpoint.World)
  getWorld() {
    return this.irishTimesRestService.getWorld();
  }
}
