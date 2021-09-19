import { Injectable } from '@nestjs/common';
import { IrishTimesIphoneResponse } from '@better-news/api-interfaces';

@Injectable()
export class AppService {
  getAbroad() {
    return 'getAbroad';
  }
  getBrexit() {
    return 'getBrexit';
  }
  getBusiness() {
    return 'getBusiness';
  }
  getCoronavirus() {
    return 'getCoronavirus';
  }
  getCulture() {
    return 'getCulture';
  }
  getGalleries() {
    return 'getGalleries';
  }
  getIreland() {
    return 'getIreland';
  }
  getLatest() {
    return 'getLatest';
  }
  getLifeStyle() {
    return 'getLifeStyle';
  }
  getMostRead() {
    return 'getMostRead';
  }
  getOpinion() {
    return 'getOpinion';
  }
  getPolitics() {
    return 'getPolitics';
  }
  getSport() {
    return 'getSport';
  }
  getSubscriberOnly() {
    return 'getSubscriberOnly';
  }
  getTopStories() {
    return 'getTopStories';
  }
  getVideo() {
    return 'getVideo';
  }
  getWorld() {
    return 'getWorld';
  }
}
