import { Component, OnInit } from '@angular/core';
import { VillanosService } from '../../service/villanos.service';

@Component({
  selector: 'app-villanos',
  templateUrl: './villanos.component.html'
})
export class VillanosComponent implements OnInit {
  villano: any[] = [];
  constructor(private _villanoService: VillanosService){

   }

  ngOnInit(): void {
    this.villano = this._villanoService.getVillanos();
    console.log(this.villano);
  }

}
