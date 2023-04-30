import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UrlsProviderService {

  public readonly baseUrl = 'https://its-bmstu.ru/api/v0/';
  public readonly formatParameter = '?format=json';

  public getEventsCollectionUrl(): string {
    return this.baseUrl + 'actions' + this.formatParameter;
  }

  public getEventUrl(slug: string) {
    return this.baseUrl + "actions" + "/" + slug + "/photos" + this.formatParameter;
  }

  public getEventPhotosUrl(slug: string, count: number, offset: number) {
    return this.baseUrl + "actions" + "/" + slug + "/photos" + this.formatParameter + "&count=" + count + "&offset=" + offset;
  }

  public getEventInnerUrl(slug: string) {
    return this.baseUrl + "actions" + "/" + slug + "/photos" + this.formatParameter;
  }

  getEventPartnersUrl(slug: string) {
    return this.baseUrl + "actions" + "/" + slug;
  }

  getPartnersUrl() {
    // return this.baseUrl + "partners" + this.formatParameter;
    return this.baseUrl + "actions/" + "partners" + "/" + this.formatParameter;
  }


}
