import { Component, OnInit } from '@angular/core';
import { VillanosService } from '../../service/villanos.service';

@Component({
  selector: 'app-villanos',
  templateUrl: './villanos.component.html'
})
export class VillanosComponent implements OnInit {

  constructor(private _villanoService: VillanosService) { }

  ngOnInit(): void {
  }

}
