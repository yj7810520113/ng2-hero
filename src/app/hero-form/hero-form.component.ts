import { Component, OnInit } from '@angular/core';
import {HeroFormModel} from "../hero-form-model";
import {Hero} from "../hero";

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent implements OnInit {

  powers=['test1','test2','test3'];
  model=new HeroFormModel(18,'maomao',this.powers[0],'hhh');
  submitter=false;

  constructor() { }

  ngOnInit() {
  }

  onSubmit(){
    this.submitter=true;
  }
  //如果用disgnostic():string()的话，html中用{{disgnostic}}的话，返回的是函数而不是函数的值
  get disgnostic(){
    return JSON.stringify(this.model);
  }

  disgnosticValue():string{
    return JSON.stringify(this.model);
  }

  get hidden(){
    return true;
  }

  newHero(){
    this.model=new HeroFormModel(42,'','');
  }

}
