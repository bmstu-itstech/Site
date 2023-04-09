import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EventPageComponent} from "./pages/event-page/event-page.component";
import {AppComponent} from "./app.component";
import {MainPageHeaderCardComponent} from "./pages/main-page/header/main-page-header-card.component";

const routes: Routes = [
  {path: 'events', component: EventPageComponent},
  {path: 'main-page', component: MainPageHeaderCardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
