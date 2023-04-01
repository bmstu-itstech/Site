import { Component } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent {
  photos: Photo[] = [];
  columnSizes: number[] | undefined;
  firstPhotoStyleBackground2: string = '';

  constructor() {
    // fetch('https://its-bmstu.ru/api/v0/actions/informacionnaya-bezopasnost/photos?format=json',
    //   {
    //     headers: new Headers({
    //       'Access-Control-Allow-Origin': '*'
    //     })})
    //   .then(response => response.json())
    fetch('https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits')
      .then(response => response.json())
      .then(B => {
        let photos: PhotosDto = {
          "count": 4,
          "next": null,
          "previous": null,
          "results": [
            {
              "photo": "http://its-bmstu.ru/media/actions/photo/uf2N3P_Uxtc_U9VAnvJ.jpg",
              "width": 1927,
              "height": 857
            },
            {
              "photo": "http://its-bmstu.ru/media/actions/photo/lbfV5nTk7RE.jpg",
              "width": 2560,
              "height": 1440
            },
            {
              "photo": "http://its-bmstu.ru/media/actions/photo/1VPWBXptOi8.jpg",
              "width": 1920,
              "height": 857
            },
            {
              "photo": "http://its-bmstu.ru/media/actions/photo/lNNAmjoTSOs.jpg",
              "width": 1280,
              "height": 853
            }
          ]
        }

        this.columnSizes = [6, 6, 4, 4, 4, 4];

        for (let i = 1; i < photos.count; i++){
          let url = photos.results[i].photo;
          this.photos.push(new Photo(url, this.columnSizes[i-1]));
        }

        this.firstPhotoStyleBackground2 = `linear-gradient(to bottom, rgba(20, 16, 75, 0) 0%, #14104B 100%)`;
      });

  }
}

interface PhotoDto {
  photo: string;
  width: number;
  height: number;
}

export interface PhotosDto
{
  count: number;
  next: string | null;
  previous: string | null;
  results: PhotoDto[];
}

export class Photo {
  url: string;
  columnSize: number;
  columnClass: string;
  constructor(url: string, columnSize: number = 6) {
    this.url = url;
    this.columnSize = columnSize;
    this.columnClass = "col-" + columnSize;
  }
}
