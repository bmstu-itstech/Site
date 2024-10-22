import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {NavigationBarComponent} from './pages/navigation-bar/navigation-bar.component';
import {MainPageHeaderCardComponent} from './pages/main-page/header/main-page-header-card.component';
import {RouterModule, RouterOutlet} from "@angular/router";
import {EventPageComponent} from './pages/event-page/event-page.component';
import {AppRoutingModule} from './app-routing.module';
import {AboutUsComponent} from './pages/main-page/about-us/about-us.component';
import {InfographicsComponent} from "./pages/main-page/infographics/infographics.component";
import {OurPartnersComponent} from "./pages/main-page/our-partners/our-partners.component";
import {ContactsComponent} from "./pages/contacts/contacts.component";
import {FooterComponent} from "./pages/footer/footer.component";
import {IvyCarouselModule} from "./carousel/carousel.module";
// import {SlickCarouselModule} from "ngx-slick-carousel";
import {EventsCollectionComponent} from './pages/main-page/events-collection/events-collection.component';
import {MainPageComponent} from './pages/main-page/main-page.component';
import {Carousel2Component} from './carousel2/carousel2.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {NgOptimizedImage} from "@angular/common";
import {GalleryModule} from "ng-gallery";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import { HttpClientModule, HttpClient } from '@angular/common/http';
import {TranslateHttpLoader} from "@ngx-translate/http-loader";

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    MainPageHeaderCardComponent,
    EventPageComponent,
    AboutUsComponent,
    InfographicsComponent,
    OurPartnersComponent,
    ContactsComponent,
    FooterComponent,
    EventsCollectionComponent,
    MainPageComponent,
    Carousel2Component
  ],
  imports: [
    BrowserModule,
    RouterOutlet,
    AppRoutingModule,
    IvyCarouselModule,
    BrowserAnimationsModule,
    HttpClientModule,
    GalleryModule.withConfig({}),
    RouterModule.forRoot([
      {path: '', component: MainPageComponent, pathMatch: 'full'},
      {path: 'event', component: EventPageComponent},
    ], {scrollPositionRestoration: 'top'}),
    NgOptimizedImage,
    TranslateModule.forRoot({
      defaultLanguage: 'ru',
      loader: {
        provide: TranslateLoader,
        useFactory: function (http: HttpClient) {
          return new TranslateHttpLoader(http);
        },
        deps: [HttpClient],
      },
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
