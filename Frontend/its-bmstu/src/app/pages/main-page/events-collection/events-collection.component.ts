import { Component } from '@angular/core';
import {UrlsProviderService} from "../../../../services/urls-provider.service";

import {Photo} from "../../event-page/photo";

@Component({
  selector: 'app-events-collection',
  templateUrl: './events-collection.component.html',
  styleUrls: ['./events-collection.component.scss']
})
export class EventsCollectionComponent {
  private _urlsProviderService: UrlsProviderService;
  photos: Photo[] = [];
  constructor(urlsProviderService: UrlsProviderService) {
    this._urlsProviderService = urlsProviderService;
    this.downloadEvents();

  }

  private downloadEvents() {
    fetch(this._urlsProviderService.getEventsCollectionUrl())
      .then(response => response.json())
      .then(events => {
        const typedEvents = events as EventsCollectionDto;
        let columnSizes: number[] = [6, 6, 4, 4, 4, 4];
        for (let i = 0; i < typedEvents.count; i++) {
          let url = typedEvents.results[i].short_description;
          this.photos.push(new Photo(url, columnSizes[i]));
        }

      });
  }
}

export interface EventDto {
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
