import { Controller, Get } from '@nestjs/common';

import { Message } from '@better-news/api-interfaces';

import { AppService } from './app.service';
import { RestEndpoint } from './rest-endpoint.model';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get(RestEndpoint.Abroad)
  getAbroad(): Message {
    return this.appService.getAbroad();
  }

  @Get(RestEndpoint.Brexit)
  getBrexit(): Message {
    return this.appService.getBrexit();
  }

  @Get(RestEndpoint.Business)
  getBusiness(): Message {
    return this.appService.getBusiness();
  }

  @Get(RestEndpoint.Coronavirus)
  getCoronavirus(): Message {
    return this.appService.getCoronavirus();
  }

  @Get(RestEndpoint.Culture)
  getCulture(): Message {
    return this.appService.getCulture();
  }

  @Get(RestEndpoint.Galleries)
  getGalleries(): Message {
    return this.appService.getGalleries();
  }

  @Get(RestEndpoint.Ireland)
  getIreland(): Message {
    return this.appService.getIreland();
  }

  @Get(RestEndpoint.Latest)
  getLatest(): Message {
    return this.appService.getLatest();
  }

  @Get(RestEndpoint.LifeStyle)
  getLifeStyle(): Message {
    return this.appService.getLifeStyle();
  }

  @Get(RestEndpoint.MostRead)
  getMostRead(): Message {
    return this.appService.getMostRead();
  }

  @Get(RestEndpoint.Opinion)
  getOpinion(): Message {
    return this.appService.getOpinion();
  }

  @Get(RestEndpoint.Politics)
  getPolitics(): Message {
    return this.appService.getPolitics();
  }

  @Get(RestEndpoint.Sport)
  getSport(): Message {
    return this.appService.getSport();
  }

  @Get(RestEndpoint.SubscriberOnly)
  getSubscriberOnly(): Message {
    return this.appService.getSubscriberOnly();
  }

  @Get(RestEndpoint.TopStories)
  getTopStories(): Message {
    return this.appService.getTopStories();
  }

  @Get(RestEndpoint.Video)
  getVideo(): Message {
    return this.appService.getVideo();
  }

  @Get(RestEndpoint.World)
  getWorld(): Message {
    return this.appService.getWorld();
  }
}
