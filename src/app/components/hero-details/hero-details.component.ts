import { Component, OnInit } from '@angular/core';
import { HeroService ,Hero  } from '../../service/hero.service';
import { VillanosService, Villano } from '../../service/villanos.service';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styles: [
  ]
})
export class HeroDetailsComponent implements OnInit {

   hero:any = [];
   villano:any = [];
   imgCasa:string;

  constructor(private _activeRoute: ActivatedRoute, private _heroService:HeroService, private _villanoService:VillanosService) {
   
    this._activeRoute.params.subscribe( params=>{
      console.log(params['id']);
      if(params['id']>=10000){
        let x = params['id']-10000;
        console.log(x);
        this.hero = this._villanoService.getVillano(x);
      }else{
        this.hero = this._heroService.getHero(params['id']);
           }          
    })
   }
  ngOnInit(): void {
  }
  
}

