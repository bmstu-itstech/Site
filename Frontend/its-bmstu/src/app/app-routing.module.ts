import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EventsComponent} from "./pages/events/events.component";
import {AppComponent} from "./app.component";
import {MainPageComponent} from "./pages/main-page/main-page.component";

const routes: Routes = [
  { path: 'events', component: EventsComponent },
  { path: 'main-page', component: MainPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
