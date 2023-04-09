import {Component} from '@angular/core';
import {UrlsProviderService} from "../../../services/urls-provider.service";
import {Photo} from "./photo";

@Component({
  selector: 'app-event-page',
  templateUrl: './event-page.component.html',
  styleUrls: ['./event-page.component.scss']
})
export class EventPageComponent {
  photos: Photo[] = [];
  columnSizes: number[] | undefined;
  firstPhotoStyleBackground2: string = '';
  private _urlsProviderService: UrlsProviderService;

  constructor(urlsProviderService: UrlsProviderService) {
    this._urlsProviderService = urlsProviderService;

    //this.downloadPhotos();
    this.downloadHeaderPhoto();

  }

  private downloadPhotos() {
    // fetch(this._urlsProviderService.getEventUrl(),
    //   {
    //     headers: new Headers({
    //       'Access-Control-Allow-Origin': '*'
    //     })
    //   })
    //   .then(response => response.json())
    //   .then(photos => {
    //     this.columnSizes = [6, 6, 4, 4, 4, 4];
    //
    //     for (let i = 0; i < photos.count; i++) {
    //       let url = photos.results[i].photo;
    //       this.photos.push(new Photo(url, this.columnSizes[i]));
    //     }
    //
    //     this.firstPhotoStyleBackground2 = `linear-gradient(to bottom, rgba(20, 16, 75, 0) 0%, #14104B 100%)`;
    //   });
  }

  private downloadHeaderPhoto() {

    //fetch("https://its-bmstu.ru/api/v0/actions/informacionnaya-bezopasnost/photos?format=json")
  }
}

