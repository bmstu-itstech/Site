import { Component } from '@angular/core';
import {UrlsProviderService} from "../../../../services/urls-provider.service";

import {Photo} from "../../event-page/photo";
import {Router} from "@angular/router";

@Component({
  selector: 'app-events-collection',
  templateUrl: './events-collection.component.html',
  styleUrls: ['./events-collection.component.scss']
})
export class EventsCollectionComponent {
  private _urlsProviderService: UrlsProviderService;
  photos: Photo[] = [];
  private _router: Router;

  constructor(urlsProviderService: UrlsProviderService,
              router: Router) {
    this._urlsProviderService = urlsProviderService;
    this._router = router;

    this.downloadEvents();

  }

  private downloadEvents() {
    fetch(this._urlsProviderService.getEventsCollectionUrl())
      .then(response => response.json())
      .then(events => {
        const typedEvents = events as EventsCollectionDto;
        let columnSizes: number[] = [6, 6, 4, 4, 4, 4];
        for (let i = 0; i < typedEvents.count; i++) {
          let event = typedEvents.results[i];
          let navigationUrl = this._urlsProviderService.getEventUrl(event.slug);
          //TODO fix image url
          let imageUrl = "http://its-bmstu.ru/media/actions/photo/uf2N3P_Uxtc_U9VAnvJ.jpg";

          this.photos.push(new Photo(imageUrl, null, event, columnSizes[i]));
        }

      });
  }

  navigateToEvent(photo: Photo) {
    this._router.navigate(['event'], {state: {slug: photo.event?.slug}});
  }
}

export interface EventDto {
  imageUrl: string | undefined;
  slug: string;
  title: string;
  description: string;
  short_description: string;
}

export interface EventsCollectionDto {
  count: number;
  next: string | null;
  previous: string | null;
  results: EventDto[];
}
