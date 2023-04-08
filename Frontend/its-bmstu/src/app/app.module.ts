import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import {IvyCarouselModule} from 'angular-responsive-carousel';
import { AppComponent } from './app.component';
import { NavigatonBarComponent } from './pages/navigation-bar/navigaton-bar.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import {RouterOutlet} from "@angular/router";
import { EventsComponent } from './pages/events/events.component';
import { AppRoutingModule } from './app-routing.module';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import {InfographicsComponent} from "./pages/infographics/infographics.component";
import {OurPartnersComponent} from "./pages/our-partners/our-partners.component";
import {ContactsComponent} from "./pages/contacts/contacts.component";
import {FooterComponent} from "./pages/footer/footer.component";
import {IvyCarouselModule} from "./carousel/carousel.module";
import {SlickCarouselModule} from "ngx-slick-carousel";
// import {IvyCarouselModule} from "./carousel/carousel.module";

@NgModule({
  declarations: [
    AppComponent,
    NavigatonBarComponent,
    MainPageComponent,
    EventsComponent,
    AboutUsComponent,
    InfographicsComponent,
    OurPartnersComponent,
    ContactsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    RouterOutlet,
    AppRoutingModule,
    IvyCarouselModule,
    SlickCarouselModule,
    // IvyCarouselModule,
    // IvyCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
