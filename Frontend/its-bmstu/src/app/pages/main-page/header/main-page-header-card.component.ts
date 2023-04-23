import { Component } from '@angular/core';
import { NavigationBarComponent } from "../../navigation-bar/navigation-bar.component";
import {Router} from "@angular/router";
import {MainPageLoadedProviderService} from "../../../../services/main-page-loaded-provider.service";

@Component({
  selector: 'app-main-page-header',
  templateUrl: './main-page-header-card.component.html',
  styleUrls: ['./main-page-header-card.component.scss']
})
export class MainPageHeaderCardComponent {

  // constructor(private NavigationBarService: NavigationBarComponent) {
  //
  // }
  //
  // clickButton() {
  //   this.NavigationBarService.clickAboutMenuItem()
  // }

  constructor(private router: Router,
              private MainPageLoadedProvider: MainPageLoadedProviderService) {

  }

  clickAboutMenuItem(): void {
    const currentPage = this.router.url;
    console.log("Page is " + currentPage);

    if (currentPage !== '/')
      this.router.navigate([''], {state: {scrollToAboutCard: true}})
        .then(() => {
          console.info("Scrolling to about card")
          const subscription = this.MainPageLoadedProvider.MainPageLoaded.subscribe(() => {
            console.info("About card loaded")
            this.scrollToAboutCard();
            subscription.unsubscribe();
          });

        });
    else
      this.scrollToAboutCard();
  }

  private scrollToAboutCard() {
    if (document !== undefined && document !== null) {

      let element = document.getElementById("about-us-id");

      if (element) {
        const rect = element.getBoundingClientRect();
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
        const top = rect.top + scrollTop - 50;
        const left = rect.left + scrollLeft;
        window.scrollTo({top, left, behavior: 'smooth'});
      }
    }
  }
}
