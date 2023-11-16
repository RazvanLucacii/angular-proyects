import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Departamento } from 'src/app/models/departamento';

@Injectable()
export class ServiceDepartamentos {
    constructor(private _http: HttpClient){}

    getDepartamentos(): Observable<any> {
        var request = "api/departamentos";
        var url = environment.apiUrls + request;
        return this._http.get(url);
    }

    create(departamento: Departamento): Observable<any> {
        //DEBEMOS CONVERTIR EL OBJETO CLASS DEPARTAMENTO A JSON
        var json = JSON.stringify(departamento);
        //VAMOS A ENVIAR UN OBJETO JSON, POR LO QUE DEBEMOS INDICAR
        //EN LA PETICION EL FORMATO DE DICHO OBJETO.  LO REALIZAMOS CON HEADERS
        var header = new HttpHeaders().set("content-type", "application/json");
        console.log(json)
        var request = "api/departamentos";
        var url = environment.apiUrls + request;
        return this._http.post(url, json,{headers: header});
    }

    update(departamento: Departamento): Observable<any>{
        var json = JSON.stringify(departamento);
        var header = new HttpHeaders().set("content-type", "application/json");
        var request = "api/departamentos";
        var url = environment.apiUrls + request;
        return this._http.put(url, json, {headers: header});
    }

    delete(id: string): Observable<any>{
        var request = "api/departamentos/" + id;
        var url = environment.apiUrls + request;
        return this._http.delete(url);
    }
}