import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
//necesitamos devolver objetos Observable
//dicha libreria esta dentro de rxjs
import {Observable} from 'rxjs';
import { Global } from "../Global";
import { environment } from "src/environments/environment";

@Injectable()
export class ServicePersonas{
    //en el constructor, debemos recibir el objeto HttpClient
    //para realizar las peticiones HTTP
    constructor(private _http: HttpClient){}

    getPersonasPromesa(): Promise<any> {
        var request = "api/personas";
        var url = environment.urlApiPersonas + request;
        let  promise = new Promise((resolve) => {
            this._http.get(url).subscribe((response) => {
                resolve(response);
            })
        })
        return promise;
    }

    //los metodos get devolveran Observable
    getPersonas(): Observable<any> {
        var request = "api/personas";
        var url = Global.urlApiPersonas + request;
        //tenemos dos formas de trabajar con los servicios y sus promesas
        //1) igual que en vue, crear una promesa aqui en este metodo
        //y devolver los datos que extraemos de dicha promesa
        //2) devolver directamente la promesa para que el component
        //se subscriba
        return this._http.get(url);
    }
}