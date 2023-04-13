import {Component} from '@angular/core';
import {EnabledStateChange} from "../../carousel2/carousel2.component";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
  animations: [EnabledStateChange],
})
export class MainPageComponent {
  isEnabled = true;

  toggleIsEnabled(): void {
    this.isEnabled = !this.isEnabled;
  }
}
