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
