import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainMenuComponent } from './main-menu/main-menu.component';
import { RaceCategoryComponent } from './components/nyilvantartas/race-category/race-category.component';
import { HorseComponent } from './components/nyilvantartas/horse/horse.component';
import { RiderComponent } from './components/nyilvantartas/rider/rider.component';
import { SeasonComponent } from './components/nyilvantartas/season/season.component';
import { VenueComponent } from './components/nyilvantartas/venue/venue.component';
import { StartNumberComponent } from './components/nyilvantartas/start-number/start-number.component';
import { IndexComponent } from './components/index/index.component';
import { LoginComponent } from './login/login.component';
import { VenueNewModalComponent } from './components/nyilvantartas/venue/venue-new-modal/venue-new-modal.component';
import { ResultsComponent } from './components/versenylebonyolitas/results/results.component';
import { AddHorseComponent } from './components/nyilvantartas/horse/add-horse/add-horse.component';
import { RaceResultsComponent } from './components/versenylebonyolitas/results/race-results/race-results.component';
import { AddStartNumberComponent } from './components/nyilvantartas/start-number/add-start-number/add-start-number.component';
import { RegistrationComponent } from './components/versenylebonyolitas/registration/registration.component';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'index', component: IndexComponent },
  { path: 'race', component: RaceCategoryComponent },
  { path: 'horse', component: HorseComponent },
  { path: 'rider', component: RiderComponent },
  { path: 'season', component: SeasonComponent },
  { path: 'venue', component: VenueComponent },
  { path: 'startnumber', component: StartNumberComponent },
  { path: 'startnumber/addStartNumber', component: AddStartNumberComponent },
  { path: 'results', component: ResultsComponent},
  { path: 'login', component: LoginComponent },
  { path: 'venues/addVenue', component: VenueNewModalComponent},
  { path: 'horses/add', component: AddHorseComponent},
  { path: 'results/raceResults', component: RaceResultsComponent},
  { path: 'registration', component: RegistrationComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
