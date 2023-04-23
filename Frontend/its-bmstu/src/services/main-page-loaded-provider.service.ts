import { Injectable } from '@angular/core';
import {Observable, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MainPageLoadedProviderService {

  MainPageLoaded: Subject<boolean> = new Subject<boolean>();
  constructor() { }

  onMainPageLoaded(): void {
    window.setTimeout(() => {
      this.MainPageLoaded.next(true);
    }, 100);
  }
}
