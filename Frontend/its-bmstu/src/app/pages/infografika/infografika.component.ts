import { Component } from '@angular/core';

@Component({
  selector: 'app-infografika',
  templateUrl: './infografika.component.html',
  styleUrls: ['./infografika.component.scss']
})
export class InfografikaComponent {
  photos: Photo[] = [];
  columnSizes: number[] | undefined;
  constructor() {
    fetch('https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits')
      .then(response => response.json())
      .then(B => {
        this.columnSizes = [6, 6, 4, 4, 4, 4];
        for (let i = 0; i < B.photos.length; i++){
          let url = B.photos[i];
          this.photos.push(new Photo(url, this.columnSizes[i]));
        }
      }
      )

  }
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
