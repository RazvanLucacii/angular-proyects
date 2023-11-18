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

    getAlumno(id: string): Promise<any>{
        var request = "api/alumnos/findalumnotoken/" + id;
        var url = environment.apiUrls + request;
        var headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': 'bearer ' + this.authDataService.token
        })
        var promise = new Promise((resolve) =>{
            this._http.get(url, {headers});
        })
        return promise;
    }

    insertAlumno(alumno: Alumno): Observable<any>{
        var json = JSON.stringify(alumno);
        var request = "api/alumnos/insertalumnotoken";
        var url = environment.apiUrls + request;
        var headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': 'bearer ' + this.authDataService.token
        })
        return this._http.post(url, json, {headers});
    }

    editarAlumno(alumno: Alumno): Observable<any>{
        var json = JSON.stringify(alumno);
        var request = "api/alumnos/updatealumnotoken";
        var url = environment.apiUrls + request;
        var headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': 'bearer ' + this.authDataService.token
        })
        return this._http.post(url, json, {headers});
    }
}