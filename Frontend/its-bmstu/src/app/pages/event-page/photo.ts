export class Photo {
  imageSrc: string;
  columnSize: number;
  columnClass: string;
  url: string;

  constructor(imageSrc: string, url: string, columnSize: number = 6) {
    this.url = url;
    this.imageSrc = imageSrc;
    this.columnSize = columnSize;
    this.columnClass = "col-" + columnSize;
  }
}
