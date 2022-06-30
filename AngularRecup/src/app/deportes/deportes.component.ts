import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DeportesProvider } from '../providers/DeportesProvider';

@Component({
  selector: 'app-deportes',
  templateUrl: './deportes.component.html',
  styleUrls: ['./deportes.component.css']
})
export class DeportesComponent implements OnInit {

  listaDeportes: any = [];

  constructor(private router:Router, private deporteApi: DeportesProvider) { 
    this.ObtenerDeportes();
  }

  ngOnInit(): void {
    this.ObtenerDeportes(); 
  }

  ObtenerDeportes() {
    this.deporteApi.getDeportes().subscribe((data) => {
      if(data !== undefined) {
        this.listaDeportes = data;
      } else {
        alert("No se obtuvieron deportes");
      }
    });
  }

}
