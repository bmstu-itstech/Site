import {EventDto} from "../main-page/events-collection/events-collection.component";

export class Photo {
  imageSrc: string;
  columnSize: number;
  columnClass: string;
  event: EventDto | null = null;
  url: string | null = null;

  constructor(imageSrc: string, url: string | null, event: EventDto | null, columnSize: number = 6) {
    this.url = url;
    this.event = event;
    this.imageSrc = imageSrc;
    this.columnSize = columnSize;
    this.columnClass = "col-" + columnSize;
  }
}
