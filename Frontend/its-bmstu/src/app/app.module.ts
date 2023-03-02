import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavigatonBarComponent } from './pages/navigation-bar/navigaton-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigatonBarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
