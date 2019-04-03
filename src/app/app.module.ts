import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { registerLocaleData } from '@angular/common';
import localeHu from '@angular/common/locales/hu';
import { FormsModule } from '@angular/forms';
import { RiderRowComponent } from './components/nyilvantartas/rider/rider-row/rider-row.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { HorseComponent } from './components/nyilvantartas/horse/horse.component';
import { RaceCategoryComponent } from './components/nyilvantartas/race-category/race-category.component';
import { RiderComponent } from './components/nyilvantartas/rider/rider.component';
import { SeasonComponent } from './components/nyilvantartas/season/season.component';
import { StartNumberComponent } from './components/nyilvantartas/start-number/start-number.component';
import { VenueComponent } from './components/nyilvantartas/venue/venue.component';
import { AddHorseComponent } from './components/nyilvantartas/horse/add-horse/add-horse.component';
import { IndexComponent } from './components/index/index.component';
import { HorseRowComponent } from './components/nyilvantartas/horse/horse-row/horse-row.component';
import { DeleteHorseComponent } from './components/nyilvantartas/horse/delete-horse/delete-horse.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { ResultsComponent } from './components/versenylebonyolitas/results/results.component';
import { VenueNewModalComponent } from './components/nyilvantartas/venue/venue-new-modal/venue-new-modal.component';
import { StartNumberRowComponent } from './components/nyilvantartas/start-number/start-number-row/start-number-row.component';
import { AddHorseModalComponent } from './components/nyilvantartas/horse/add-horse-modal/add-horse-modal.component';
import { NewSeasonModalComponent } from './components/nyilvantartas/season/new-season-modal/new-season-modal.component';
import { RaceResultsComponent } from './components/versenylebonyolitas/results/race-results/race-results.component';
import { AddRiderModalComponent } from './components/nyilvantartas/rider/add-rider-modal/add-rider-modal.component';
import { AddStartNumberComponent } from './components/nyilvantartas/start-number/add-start-number/add-start-number.component';
import { FilterPipe } from './filter.pipe';
import { RegistrationComponent } from './components/versenylebonyolitas/registration/registration.component';
import { ResultsRowComponent } from './components/versenylebonyolitas/results/results-row/results-row.component';
import { RaceResultsRowComponent } from './components/versenylebonyolitas/results/race-results-row/race-results-row.component';



@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    HorseComponent,
    RaceCategoryComponent,
    RiderComponent,
    SeasonComponent,
    StartNumberComponent,
    VenueComponent,
    IndexComponent,
    AddHorseComponent,
    HorseRowComponent,
    DeleteHorseComponent,
    LoginComponent,
    RiderRowComponent,
    VenueNewModalComponent,
    StartNumberRowComponent,
    ResultsComponent,
    AddHorseModalComponent,
    NewSeasonModalComponent,
    RaceResultsComponent,
    AddRiderModalComponent,
    AddStartNumberComponent,
    FilterPipe,
    RegistrationComponent,
    ResultsRowComponent,
    RaceResultsRowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [FilterPipe, HorseComponent, RiderComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }

registerLocaleData(localeHu, 'hu');
