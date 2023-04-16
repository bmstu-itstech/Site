import {Component, OnInit} from '@angular/core';
import {EnabledStateChange} from "../../carousel2/carousel2.component";
import {AboutCardLoadedProviderService} from "../../../services/about-card-loaded-provider.service";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
  animations: [EnabledStateChange],
})
export class MainPageComponent implements OnInit {
  isEnabled = true;

  constructor(private aboutCardLoadedProviderService: AboutCardLoadedProviderService) {
  }

  ngOnInit(): void {
    this.aboutCardLoadedProviderService.onAboutCardLoaded();
  }

  toggleIsEnabled(): void {
    this.isEnabled = !this.isEnabled;
  }
}
