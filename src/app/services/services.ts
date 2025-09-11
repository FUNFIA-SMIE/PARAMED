import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Services {
  //apiUrl = `http://192.168.88.200:3001`;
  apiUrl = `http://localhost:3001`
  constructor(
    private http: HttpClient
  ) { }
  Consultation_jour_attente(statut: any): Observable<any> {
    return this.http.get(`${this.apiUrl}/consultation/consultation_jour/${statut}`);
  }

  Save_constante(data: any): Observable<any> {

    return this.http.post(`${this.apiUrl}/constantes`, data);
  }

  Liste_des_constant(): Observable<any> {

    return this.http.get(`${this.apiUrl}/constantes`);
  }

  Modifier_constant(id: any, constante: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/constantes/${id}`, constante);
  }

  Supprimer_constant(id: any): Observable<any> {
    return this.http.delete(`${this.apiUrl}/constantes/${id}`);
  }

}
