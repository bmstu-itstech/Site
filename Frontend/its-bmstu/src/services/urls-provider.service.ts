import { Injectable } from '@angular/core';

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

  public getEventInnerUrl(slug: string) {
    return this.baseUrl + "actions" + "/" + slug + "/photos" + this.formatParameter;
  }
}
