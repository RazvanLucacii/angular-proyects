import { Injectable } from "@angular/core";
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Personaje } from "../models/personaje";
import { Serie } from "../models/serie";

@Injectable()
export class ServiceSeries {
    constructor(private _http: HttpClient){}

    getSeries(): Observable<any> {
        var request = "api/series";
        var url = environment.apiUrlSeries + request;
        return this._http.get(url);
    }

    getPersonajes(): Observable<any> {
        var request = "api/personajes";
        var url = environment.apiUrlSeries + request;
        return this._http.get(url);
    }

    getPersonajesSeries(id: string): Observable<any> {
        var request = "api/series/personajesserie/" + id;
        var url = environment.apiUrlSeries + request;
        return this._http.get(url);
    }

    getSerie(id: string): Observable<any> {
        var request = "api/series/" + id;
        var url = environment.apiUrlSeries + request;
        return this._http.get(url);
    }

    create(personaje: Personaje): Observable<any> {
        var json = JSON.stringify(personaje);
        var header = new HttpHeaders().set("content-type", "application/json");
        console.log(json)
        var request = "api/personajes";
        var url = environment.apiUrlSeries + request;
        return this._http.post(url, json,{headers: header});
    }

    update(personaje: number, serie: number): Observable<any>{
        var request = "api/personajes/" + personaje + "/" + serie;
        var url = environment.apiUrlSeries + request;
        return this._http.put(url, {});
    }
}