import {Component, OnInit} from '@angular/core';
import {Hero} from "../hero";
import {HeroService} from "../hero.service";
import { Router} from "@angular/router";


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})


export class HeroesComponent implements OnInit{
  title = 'app works!';
  heroes:Hero[];
  selectedHero:Hero;

  constructor(
    private heroService:HeroService,
    private router:Router
  ){}

  ngOnInit():void{
    this.getHeroes();
  }

  onSelect(hero:Hero):void{
    this.selectedHero=hero;

  }
  getHeroes():void{
    this.heroService.getHeroes().then(heroes=>this.heroes=heroes);
    // this.heroes=this.heroService.getHeroes();
  }
  gotoDetail():void{
      //和[routerLink一样]
    this.router.navigate(['/detail', this.selectedHero.id]);
  }

}

