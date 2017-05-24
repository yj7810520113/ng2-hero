import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroesComponent } from './heroes/heroes.component';
import {HeroService} from './hero.service';
import { DashboardComponent } from './dashboard/dashboard.component';

import {AppRoutingModule} from './app-routing.module';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroesComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    HttpModule,
    // InMemoryWebApiModule.forRoot(InMemoryDataService),
    // RouterModule.forRoot([
    //   {
    //     path:'heroes',
    //     component:HeroesComponent
    //   },
    //   {
    //     path:'dashboard',
    //     component:DashboardComponent
    //   },
    //   {
    //     path:'',
    //     redirectTo:'/dashboard',
    //     pathMatch:'full'
    //   },
    //   {
    //     path:'detail/:id',
    //     component:HeroDetailComponent
    //   },
    //   // {
    //   //   path: '',
    //   //   redirectTo: '/dashboard',
    //   //   pathMatch: 'full'
    //   // },
    //
    // ])
  ],
  providers: [
    HeroService
  ],
  bootstrap: [AppComponent],

})
export class AppModule { }


