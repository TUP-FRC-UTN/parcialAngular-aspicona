import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeportesComponent } from './deportes/deportes.component';
import { LoginComponent } from './login/login.component';
import { TextoComponent } from './texto/texto.component';

const routes: Routes = [
  {path: "login", component: LoginComponent},
  {path: "imagenesDeportes", component: DeportesComponent},
  {path: "texto", component: TextoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
