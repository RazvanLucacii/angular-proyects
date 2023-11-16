import { Injectable } from "@angular/core";
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Serie } from "../models/serie";

@Injectable()
export class ServiceSeries {
    constructor(private _http: HttpClient){}

    getSeries(): Observable<any> {
        var request = "api/series";
        var url = environment.apiUrlSeries + request;
        return this._http.get(url);
    }

    getSerie(id: string): Observable<any> {
        var request = "api/series/" + id;
        var url = environment.apiUrlSeries + request;
        return this._http.get(url);
    }
}