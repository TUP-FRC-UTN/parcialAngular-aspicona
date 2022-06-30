import { Injectable } from "@angular/core";
import { HttpClient} from '@angular/common/http'
import { environment } from "src/environments/environment";
import { Observable } from "rxjs";

@Injectable()
export class TextoProvider {

    apiUrlBase: string = environment.urlBaseApi;

    constructor(private http: HttpClient) {

    }
    
    getTexto() : Observable<any> {

        const url = this.apiUrlBase + "/persona/gettexto";

        const headers = {'content-type': 'application/json'};

        return this.http.get(url, {'headers': headers})
    }
}