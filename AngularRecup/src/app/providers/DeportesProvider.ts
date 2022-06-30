import { Injectable } from "@angular/core";
import { HttpClient} from '@angular/common/http'
import { environment } from "src/environments/environment";
import { Observable } from "rxjs";

@Injectable()
export class DeportesProvider {

    apiUrlBase: string = environment.urlBaseApi;

    constructor(private http: HttpClient) {

    }
    
    getDeportes() : Observable<any> {

        const url = this.apiUrlBase + "/deporte/getdeportes";

        const headers = {'content-type': 'application/json'};

        return this.http.get(url, {'headers': headers})
    }
}