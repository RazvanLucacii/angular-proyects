import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthDataService } from './service.auth-data';

@Injectable({
  providedIn: 'root',
})
export class EmpleadoService {
  private apiUrl = 'https://apiempleadoscoreoauth.azurewebsites.net';

  constructor(private http: HttpClient, private authDataService: AuthDataService) {}

  obtenerSubordinados(): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'bearer ' + this.authDataService.token,
    });

    return this.http.get(`${this.apiUrl}/api/empleados/subordinados`, { headers: headers });
  }
}