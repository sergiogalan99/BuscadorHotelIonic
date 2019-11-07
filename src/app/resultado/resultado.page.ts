import { Component, OnInit } from '@angular/core';
import { PeticionControllerService } from '../shared/peticion-controller.service';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.page.html',
  styleUrls: ['./resultado.page.scss'],
})
export class ResultadoPage implements OnInit {

  constructor(public resultadoService: PeticionControllerService) { }

  ngOnInit() {
  }

}
