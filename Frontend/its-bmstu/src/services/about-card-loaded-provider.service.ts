import { Injectable } from '@angular/core';
import {Observable, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AboutCardLoadedProviderService {

  AboutLoaded: Subject<boolean> = new Subject<boolean>();
  constructor() { }

  onAboutCardLoaded(): void {
    window.setTimeout(() => {
      this.AboutLoaded.next(true);
    }, 100);
  }
}
