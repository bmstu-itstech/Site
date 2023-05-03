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

        for (let i = 0; i < 5; i++) {
          typedEvents.results.push(typedEvents.results[0])
        }

        console.info(typedEvents.results);

        let columnSizes: number[] = [6, 6, 12, 12, 6, 6];
        console.info(typedEvents.count)
        for (let i = 0; i < typedEvents.results.length; i++) {
          let event = typedEvents.results[i];
          console.info(event)
          let navigationUrl = this._urlsProviderService.getEventUrl(event.slug);
          let title = event.title;
          this.photos.push(new Photo(event.preview, title, event, columnSizes[i]) );
        }

      });
  }

  navigateToEvent(photo: Photo) {
    this._router.navigate(['event'], {state: {slug: photo.event?.slug}});
  }
}

export interface EventDto {
  title: string;
  description: string;
  short_description: string;
  slug: string;
  preview: string;
}

export interface EventsCollectionDto {
  count: number;
  next: string | null;
  previous: string | null;
  results: EventDto[];
}
