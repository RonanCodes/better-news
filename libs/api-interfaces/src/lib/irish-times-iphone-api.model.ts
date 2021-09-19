/**
 * This model was generated from the iphone-latest sample file, using the https://jsonformatter.org/json-to-typescript web app.
 * This web app generated enums which is unique among conversion tools.
 *
 * We are assuming that all the endpoints will share this model.
 */

export interface IrishTimesIphoneResponse {
  interstitialadvert: Interstitialadvert;
  displaytimestamps: number;
  displaycategories: number;
  subonlymessage: string;
  subonlystrapline: string;
  color: string;
  videoPlayerId: string;
  stories: Story[];
}

export interface Interstitialadvert {
  alias: string;
  domain: string;
  network: string;
  refreshinterval: string;
  subnetwork: string;
}

export interface Story {
  color?: Color;
  link?: string;
  videos?: Video[];
  section?: string;
  relatedlinks?: Relatedlink[];
  title?: string;
  customfields?: Customfields;
  content?: string;
  backgroundcolor?: Backgroundcolor;
  shares?: number;
  presentation?: Presentation;
  uid?: string;
  articlesection?: string;
  group_link?: string;
  commentsstatus?: number;
  bigstory?: string;
  indeximage?: Image[];
  firsttab?: Firsttab;
  assettype: Assettype;
  summary?: string;
  images?: Image[];
  chartbeat_path?: string;
  group_name?: string;
  dfp_adverts?: DfpAdvertElement[];
  author?: string;
  toplead?: string;
  advert?: Interstitialadvert;
  publicationdate?: Date;
  digitalpass?: Digitalpass;
  commentcount?: number;
  relateditems?: Relateditem[];
  position: string;
  category?: Category;
  embeds?: any[];
  writerimage?: Image;
  ad_unit?: string;
  targeting?: StoryTargeting;
}

export enum Assettype {
  Article = 'article',
  DfpAdvert = 'dfp_advert',
}

export enum Backgroundcolor {
  Ffffff = '#FFFFFF',
}

export enum Category {
  News = 'News',
  Sport = 'Sport',
}

export enum Color {
  C9252C = '#C9252C',
  Ff6600 = '#FF6600',
  The0099C2 = '#0099C2',
  The39B54A = '#39B54A',
  The787657 = '#787657',
}

export interface Customfields {
  template: Template;
  commentsEnabled: string;
  dateline?: string;
  genericdataentered: string;
  variant: Variant;
  writers: string;
  prismgenre: Prismgenre;
  hermesSupertitle: string;
  agency?: Agency;
  topic?: Topic;
}

export enum Agency {
  Pa = 'PA',
  Reuters = 'Reuters',
}

export enum Prismgenre {
  Current = 'Current',
}

export enum Template {
  Generic = 'generic',
}

export enum Topic {
  Brexit = 'Brexit',
  Coronavirus = 'Coronavirus',
  Empty = '',
  USElection = 'US Election',
}

export enum Variant {
  Web = 'web',
}

export interface DfpAdvertElement {
  ad_unit: AdUnit;
  targeting: DfpAdvertTargeting;
  div_id: DivID;
}

export enum AdUnit {
  The2695176TheIrishTimesNewsInContent = '/2695176/The_Irish_Times/News_InContent',
  The2695176TheIrishTimesSportInContent = '/2695176/The_Irish_Times/Sport_InContent',
}

export enum DivID {
  DivGPTAdInContent1 = 'div-gpt-ad-InContent-1',
  DivGPTAdInContent2 = 'div-gpt-ad-InContent-2',
  DivGPTAdInContent3 = 'div-gpt-ad-InContent-3',
  DivGPTAdInContent4 = 'div-gpt-ad-InContent-4',
  DivGPTAdInContent5 = 'div-gpt-ad-InContent-5',
}

export interface DfpAdvertTargeting {
  kvsubsection: string;
  kvlevel3: string;
  kvcontentid: string;
  kvtopic: Topic;
  kvinline: string;
}

export enum Digitalpass {
  M = 'M',
}

export enum Firsttab {
  ImageFirst = 'imageFirst',
  VideoFirst = 'videoFirst',
}

export interface Image {
  sizes?: SizeElement[];
  caption?: string;
}

export interface SizeElement {
  size: SizeEnum;
  width: number;
  source: string;
  height: number;
}

export enum SizeEnum {
  Large = 'large',
  Medium = 'medium',
  Small = 'small',
}

export enum Presentation {
  PackageStory = 'packageStory',
  Standard = 'standard',
}

export interface Relateditem {
  digitalpass: Digitalpass;
  linkimagetype: string;
  title: string;
  url: string;
}

export interface Relatedlink {
  digitalpass: Digitalpass;
  color: Color;
  section: string;
  title: string;
  url: string;
}

export interface StoryTargeting {
  kvpos: string;
  kvcontentid: string;
}

export interface Video {
  dfp_advert: VideoDfpAdvert;
  caption: string;
  videoid: string;
  advert: VideoAdvert;
}

export interface VideoAdvert {
  len: string;
  domain: string;
  subnetwork: string;
  alias: string;
  refreshinterval: string;
  key: string;
  network: string;
}

export interface VideoDfpAdvert {
  url: string;
}
