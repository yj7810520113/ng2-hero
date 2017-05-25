import { Injectable } from '@angular/core';
import {HEROES} from "./mock-heroes";
import {Hero} from "./hero";
import {LoggerService} from "./logger.service";

@Injectable()
export class HeroService {
  constructor(
    private logger:LoggerService
  ){

  }

  getHeroes():Promise<Hero[]>{
      this.logger.log('Getting heroes...');
    return Promise.resolve(HEROES);
    // return new Promise(resolve=>{
    //   resolve(this.getHeroes());
    // });
  }
  getHeroesSlowly(): Promise<Hero[]> {
    return new Promise(resolve => {
      // Simulate server latency with 2 second delay
      setTimeout(() => resolve(this.getHeroes()), 2000);
    });
  }
  getHero(id:number):Promise<Hero>{
    return this.getHeroes().then(heroes=>heroes.find(hero=>hero.id===id));
  }



}
