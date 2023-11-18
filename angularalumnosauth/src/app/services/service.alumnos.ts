import { Injectable } from "@angular/core";
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from "rxjs";
import { environment } from "../../environments/environment";
import { AuthDataService } from "./service.auth-data";
import { Alumno } from "../models/alumno";

@Injectable()
export class ServiceAlumnos {

    constructor(
        private _http: HttpClient,
        private authDataService: AuthDataService,
    ){}


    getAlumnos(): Observable<any>{
        var request = "api/alumnos/alumnostoken";
        var url = environment.apiUrls + request;
        var headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': 'bearer ' + this.authDataService.token
        })
        return this._http.get(url, {headers});
    }

    insertAlumno(alumno: Alumno): Observable<any>{
        var request = "api/alumnos/insertalumnotoken";
        var url = environment.apiUrls + request;
        var headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': 'bearer ' + this.authDataService.token
        })
        return this._http.post(url, alumno, {headers});
    }
}