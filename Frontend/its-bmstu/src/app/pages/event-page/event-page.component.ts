import {Component} from '@angular/core';
import {UrlsProviderService} from "../../../services/urls-provider.service";
import {Photo} from "./photo";
import {Router} from "@angular/router";
import {toArray} from "rxjs";
import {GalleryItem, ImageItem} from "ng-gallery";
import {PhotoCollectionDto} from "./photoCollectionDto";

@Component({
  selector: 'app-event-page',
  templateUrl: './event-page.component.html',
  styleUrls: ['./event-page.component.scss']
})
export class EventPageComponent {
  photos: Photo[] = [];
  currentPhotosCount: number = 1;
  photosDownloadingPageSize : number = 15;
  images = [

    // ... more items
  ];
  //galleryPhotos: ImageItem[] = [];
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
    this.downloadPhotos();
    //this.downloadHeaderPhoto();
  }

  private downloadPhotos() {
    //TODO use new service method with offset and pagesize
    fetch(this._urlsProviderService.getEventPhotosUrl(this.slug, this.photosDownloadingPageSize, this.currentPhotosCount))
      .then(response => response.json())
      .then(untypedPhotos => {
        let photos = untypedPhotos as PhotoCollectionDto;
        this.columnSizes = [6, 6, 4, 4, 4, 6, 6, 4, 4, 4, 6, 6, 4, 4, 4, 6, 6, 4, 4, 4, 6, 6, 4, 4, 4, 6, 6, 4, 4, 4, 6, 6, 4, 4, 4, 6, 6, 4, 4, 4, 6, 6, 4, 4, 4, 6, 6, 4, 4, 4, 6, 6, 4, 4, 4, 6, 6, 4, 4, 4, 6, 6, 4, 4, 4, 6, 6, 4, 4, 4, 6, 6, 4, 4, 4, 6, 6, 4, 4, 4, 6, 6, 4, 4, 4, 6, 6, 4, 4, 4, 6, 6, 4, 4, 4, 6, 6, 4, 4, 4];
        for (let i = 0; i < photos.count; i++) {
          let imageSrc = photos.results[i].photo;
          this.photos.push(new Photo(imageSrc, null, null, this.columnSizes[i]));
          //this.galleryPhotos.push(new ImageItem({src: 'IMAGE_SRC_URL', thumb: 'IMAGE_THUMBNAIL_URL'}));
          // @ts-ignore
        }
        this.currentPhotosCount += 1;


        this.firstPhotoStyleBackground2 = `linear-gradient(to bottom, rgba(20, 16, 75, 0) 0%, #14104B 100%)`;
      });
  }

  private downloadHeaderPhoto() {

    //fetch("https://its-bmstu.ru/api/v0/actions/informacionnaya-bezopasnost/photos?format=json")
  }

  goBack() {
    this.router.navigate(['/']);
  }

  protected readonly toArray = toArray;
  protected readonly String = String;

  downloadMorePhotos() {
    fetch(this._urlsProviderService.getEventPhotosUrl(this.slug, this.photosDownloadingPageSize, this.currentPhotosCount))
      .then(response => response.json())
.then(response => {

});
  }
}

