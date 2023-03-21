import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavigatonBarComponent } from './pages/navigation-bar/navigaton-bar.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import {RouterOutlet} from "@angular/router";
import { EventsComponent } from './pages/events/events.component';
import { AppRoutingModule } from './app-routing.module';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { OurPartnersComponent } from './pages/our-partners/our-partners.component';
import {IvyCarouselModule} from "./carousel/carousel.module";

@NgModule({
  declarations: [
    AppComponent,
    NavigatonBarComponent,
    MainPageComponent,
    EventsComponent,
    AboutUsComponent,
    OurPartnersComponent
  ],
  imports: [
    BrowserModule,
    RouterOutlet,
    AppRoutingModule,
    IvyCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
