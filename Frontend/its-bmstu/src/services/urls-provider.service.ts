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
    return this.baseUrl + "actions" + "/" + slug + this.formatParameter;
  }

  public getEventPhotosUrl(slug: string, page_size: number, page : number) {
    return this.baseUrl + "actions" + "/" + slug + "/photos" + this.formatParameter + "&page_size=" + page_size + "&page=" + page;
  }

  public getEventInnerUrl(slug: string) {
    return this.baseUrl + "actions" + "/" + slug + "/photos" + this.formatParameter;
  }

  getEventPartnersUrl(slug: string) {
    return this.baseUrl + "actions" + "/" + slug + this.formatParameter;
  }

  getPartnersUrl() {
    // return this.baseUrl + "partners" + this.formatParameter;
    return this.baseUrl + "actions/" + "partners" + "/" + this.formatParameter;
  }


}
