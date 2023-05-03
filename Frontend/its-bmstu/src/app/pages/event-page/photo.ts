import {EventDto} from "../main-page/events-collection/events-collection.component";
import {GalleryItem, ImageItem} from "ng-gallery";
import {GalleryItemData, ImageItemData} from "ng-gallery/lib/components/templates/items.model";

export class Photo implements ImageItem {
  imageSrc: string;
  columnSize: number;
  columnClass: string;
  event: EventDto | null = null;
  title: string | null = null;
  src: string | null = null;
  thumb: string;


  constructor(imageSrc: string, title: string | null, event: EventDto | null, columnSize: number = 6) {
    this.title = title;
    this.src = imageSrc;
    this.thumb = imageSrc;
    this.event = event;
    this.imageSrc = imageSrc;
    this.columnSize = columnSize;
    this.columnClass = "col-" + columnSize;
    this.type = "image";
    this.data = {} as ImageItemData;
  }

  readonly data: ImageItemData;
  readonly type: string;
}
