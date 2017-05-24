import {Component, Input, OnInit} from '@angular/core';
import {Hero} from "../hero";
import {HeroService} from "../hero.service";
import {ActivatedRoute, Params} from "@angular/router";
import {Location} from "@angular/common";

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  @Input() hero:Hero;
  constructor(
    private heroService:HeroService,
    private route:ActivatedRoute,
    private location:Location
  ) { }

  ngOnInit() {
    //switchMap件可观察的路由参数中的id映射到一个新的Observable中，即HeroService.getHero()方法的结果
    this.route.params.switchMap((params:Params)=>this.heroService.getHero(+params['id']))
      .subscribe(hero=>this.hero=hero);
  }

  goBack():void{
    this.location.back();
  }

}