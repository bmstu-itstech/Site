import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {AboutCardLoadedProviderService} from "../../../services/about-card-loaded-provider.service";

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent {

  constructor(private router: Router,
              private aboutCardLoaderProvider: AboutCardLoadedProviderService) {

  }

  clickAboutMenuItem(): void {
    const currentPage = this.router.url;
    console.log("Page is " + currentPage);

    if (currentPage !== '/')
      this.router.navigate([''], {state: {scrollToAboutCard: true}})
        .then(() => {
          console.info("Scrolling to about card")
          const subscription = this.aboutCardLoaderProvider.AboutLoaded.subscribe(() => {
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
