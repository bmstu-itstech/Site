import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavigatonBarComponent } from './pages/navigation-bar/navigaton-bar.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import {RouterOutlet} from "@angular/router";
import { EventsComponent } from './pages/events/events.component';
import { AppRoutingModule } from './app-routing.module';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ContactsComponent } from './pages/contacts/contacts.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigatonBarComponent,
    MainPageComponent,
    EventsComponent,
    AboutUsComponent,
    ContactsComponent
  ],
    imports: [
        BrowserModule,
        RouterOutlet,
        AppRoutingModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
