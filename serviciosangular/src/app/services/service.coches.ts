import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

import { environment } from "src/environments/environment";

@Injectable()
export class ServiceCoches {
    constructor(private _http: HttpClient) {}
    getCochesPromesa(): Promise<any> {
        var request = "webresources/coches";
        var url = environment.urlApiCoches + request;
        var promise = new Promise((resolve) =>{
            this._http.get(url).subscribe(response =>{
                resolve(response);
            })
        })
        return promise;
    }
}