import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DeportesComponent } from './deportes/deportes.component';
import { TextoComponent } from './texto/texto.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DeportesProvider } from './providers/DeportesProvider';
import { UsuarioProvider } from './providers/UsuarioProvider';
import { TextoProvider } from './providers/TextoProvider';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DeportesComponent,
    TextoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [DeportesProvider, UsuarioProvider, TextoProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
