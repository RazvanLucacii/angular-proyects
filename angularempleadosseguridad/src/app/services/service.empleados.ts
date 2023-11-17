import { Injectable } from "@angular/core";
import { Login } from "../models/login";
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable()
export class ServiceLogin{
    public login!: Login;

    constructor(public _http: HttpClient) {}

    getEmpleados(token: string): Observable<any> {
        var request = "api/empleados";
        var url = environment.apiUrls + request;
        var headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': 'bearer ' + token
        })
        return this._http.get(url, {headers});
    }


    getLogin(login: Login): Observable<any> {
        var json = JSON.stringify(login);
        var header = new HttpHeaders().set("content-type", "application/json");
        console.log(json)
        var request = "auth/login";
        var url = environment.apiUrls + request;
        return this._http.post(url, json,{headers: header});
    }
}