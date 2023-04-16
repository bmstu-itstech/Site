import {Component} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent {

  constructor(private router: Router) {

  }

  clickAboutMenuItem(): void {
    const currentPage = this.router.url;
    console.log("Page is" + currentPage);

    if (currentPage !== '')
      this.router.navigate([''], {state: {scrollToAboutCard: true}})
        .then(() => {
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

            // if (element !== null) {
            //   //   element.scrollIntoView({behavior: 'smooth'});
            //   //const id = 'profilePhoto';
            //   const yOffset = -30;
            //
            //
            //   //const y = element.get + yOffset;
            //   //console.log("y is " + y);
            //
            //   window.scrollTo({top: y, behavior: 'smooth'});
            //
            // }
          }
        });
  }

}
