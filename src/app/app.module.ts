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

import { HeroFormComponent } from './hero-form/hero-form.component';
import {LoggerService} from "./logger.service";

@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroesComponent,
    DashboardComponent,
    HeroFormComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
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
    HeroService,
    LoggerService
  ],
  bootstrap: [AppComponent],

})
export class AppModule { }


