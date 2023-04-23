import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {MainPageLoadedProviderService} from "../../../services/main-page-loaded-provider.service";

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent {

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

  clickInfographicsItem() {
    const currentPage = this.router.url;
    console.log("Page is " + currentPage);

    if (currentPage !== '/')
      this.router.navigate([''], {state: {scrollToInfographicsCard: true}})
        .then(() => {
          console.info("Scrolling to infographics card")
          const subscription = this.MainPageLoadedProvider.MainPageLoaded.subscribe(() => {
            console.info("Infographics card loaded")
            this.scrollToInfographicsCard();
            subscription.unsubscribe();
          });

        });
    else
      this.scrollToInfographicsCard();
  }

  private scrollToInfographicsCard() {
    if (document !== undefined && document !== null) {

      let element = document.getElementById("infographics-id");

      if (element) {
        const rect = element.getBoundingClientRect();
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
        const top = rect.top + scrollTop - 30;
        const left = rect.left + scrollLeft;
        window.scrollTo({top, left, behavior: 'smooth'});
      }
    }
  }

  clickEventsItem() {
    const currentPage = this.router.url;
    console.log("Page is " + currentPage);

    if (currentPage !== '/')
      this.router.navigate([''], {state: {scrollToEventsCard: true}})
        .then(() => {
          console.info("Scrolling to events card")
          const subscription = this.MainPageLoadedProvider.MainPageLoaded.subscribe(() => {
            console.info("Events card loaded")
            this.scrollToEventsCard();
            subscription.unsubscribe();
          });

        });
    else
      this.scrollToEventsCard();
  }

  private scrollToEventsCard() {
    if (document !== undefined && document !== null) {

      let element = document.getElementById("events-id");

      if (element) {
        const rect = element.getBoundingClientRect();
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
        const top = rect.top + scrollTop - 70;
        const left = rect.left + scrollLeft;
        window.scrollTo({top, left, behavior: 'smooth'});
      }
    }
  }

  clickContactsItem() {
    const currentPage = this.router.url;
    console.log("Page is " + currentPage);

    if (currentPage !== '/')
      this.router.navigate([''], {state: {scrollToContactsCard: true}})
        .then(() => {
          console.info("Scrolling to contacts card")
          const subscription = this.MainPageLoadedProvider.MainPageLoaded.subscribe(() => {
            console.info("Contacts card loaded")
            this.scrollToContactsCard();
            subscription.unsubscribe();
          });

        });
    else
      this.scrollToContactsCard();
  }

  private scrollToContactsCard() {
    if (document !== undefined && document !== null) {

      let element = document.getElementById("contacts-id");

      if (element) {
        const rect = element.getBoundingClientRect();
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
        const top = rect.top + scrollTop;
        const left = rect.left + scrollLeft;
        window.scrollTo({top, left, behavior: 'smooth'});
      }
    }
  }
}
