import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

import { environment } from "src/environments/environment";

@Injectable()
export class ServicePlantilla {
    constructor(private _http: HttpClient) {}

    getPlantillaPromesa(): Promise<any> {
        var request = "api/plantilla/funciones";
        var url = environment.urlApiPlantilla + request;
        var promise = new Promise((resolve) =>{
            this._http.get(url).subscribe(response =>{
                resolve(response);
            })
        })
        return promise;
    }

    getFuncionPromesa(funcion: string): Promise<any> {
        var request = "api/plantilla/plantillafuncion/" + funcion;
        var url = environment.urlApiPlantilla + request;
        var promise = new Promise((resolve) =>{
            this._http.get(url).subscribe(response =>{
                resolve(response);
            })
        })
        return promise;
    }

    
}