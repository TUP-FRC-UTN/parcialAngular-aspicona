import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Texto } from '../interfaces/Texto';
import { TextoProvider } from '../providers/TextoProvider';

@Component({
  selector: 'app-texto',
  templateUrl: './texto.component.html',
  styleUrls: ['./texto.component.css']
})
export class TextoComponent implements OnInit {

  texto = {} as Texto;

  constructor(private router:Router, private textoApi: TextoProvider) { 
    this.ObtenerTexto();
  }

  ngOnInit(): void {
  }

  ObtenerTexto() {
    this.textoApi.getTexto().subscribe((data) => {
      if(data.ok) {
        this.texto = data;
      } else {
        alert(data.error);
      }
    });
  }
}
