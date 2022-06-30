import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../interfaces/Usuario';
import { UsuarioProvider } from '../providers/UsuarioProvider';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario = {} as Usuario;


  constructor(private router:Router, private usuarioApi: UsuarioProvider) { 
  }

  ngOnInit(): void {
  }

  login(){

    this.usuarioApi.postLogin(this.usuario.nombreUsu, this.usuario.password).subscribe((data) => {
      if(data.ok){
        this.router.navigateByUrl("/imagenesDeportes");
      }
      else{
        alert(data.error);
      }
    })
  }
}
