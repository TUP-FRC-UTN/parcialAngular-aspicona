import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from "rxjs";

@Injectable()
export class UsuarioProvider{

    apiUrlBase: string = environment.urlBaseApi;

    constructor(private http: HttpClient){

    }

    postLogin(nombreUsu: string, password: string): Observable<any>{
        const comando = {
            "nombreUsuario": nombreUsu,
            "password": password
          };

          const url = this.apiUrlBase + '/usuario/login';
          const headers = { 'content-type': 'application/json' }
          const body = JSON.stringify(comando);
          console.log(body);
          return this.http.post(url, body, { 'headers': headers})
    }
}