import {Component} from '@angular/core';
import {UrlsProviderService} from "../../../services/urls-provider.service";
import {Photo} from "./photo";
import {Router} from "@angular/router";

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

  private router: Router;
  slug: string;

  constructor(urlsProviderService: UrlsProviderService,
              router: Router) {
    this.router = router;
    this._urlsProviderService = urlsProviderService;

    this.slug = this.router.getCurrentNavigation()!.extras.state!["slug"];
    this.downloadPhotos(this.slug);
    //this.downloadHeaderPhoto();
  }

  private downloadPhotos(slug: string) {
    fetch(this._urlsProviderService.getEventUrl(slug),
      {
        headers: new Headers({
          'Access-Control-Allow-Origin': '*'
        })
      })
      .then(response => response.json())
      .then(photos => {
        this.columnSizes = [6, 6, 4, 4, 4, 4];

        for (let i = 0; i < photos.count; i++) {
          let imageSrc = photos.results[i].photo;
          this.photos.push(new Photo(imageSrc, null, null, this.columnSizes[i]));
        }

        this.firstPhotoStyleBackground2 = `linear-gradient(to bottom, rgba(20, 16, 75, 0) 0%, #14104B 100%)`;
      });
  }

  private downloadHeaderPhoto() {

    //fetch("https://its-bmstu.ru/api/v0/actions/informacionnaya-bezopasnost/photos?format=json")
  }
}

