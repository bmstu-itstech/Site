import {Component, OnInit} from '@angular/core';
import {MainPageLoadedProviderService} from "../../../../services/main-page-loaded-provider.service";

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent {

  firstCheckBoxValue: boolean = false;
  secondCheckBoxValue: boolean = false;
  thirdCheckBoxValue: boolean = false;

  toggleFirstCheckBox() {
    this.firstCheckBoxValue = !this.firstCheckBoxValue;
  }

  toggleSecondCheckBox() {
    this.secondCheckBoxValue = !this.secondCheckBoxValue;
  }

  toggleThirdCheckBox() {
    this.thirdCheckBoxValue = !this.thirdCheckBoxValue;
  }
}
