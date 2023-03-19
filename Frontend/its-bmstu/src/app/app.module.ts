import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavigatonBarComponent } from './pages/navigation-bar/navigaton-bar.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import {RouterOutlet} from "@angular/router";
import { InfografikaComponent } from './pages/infografika/infografika.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    NavigatonBarComponent,
    MainPageComponent,
    InfografikaComponent
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
