import { Injectable, ErrorHandler } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class OrganizacionService {

  domain: string = "http://localhost:10010";

  constructor(private http: HttpClient) { }

  getOrganizaciones()  {
    //console.log(this.http.get<Organizacion[]>(`${this.domain}/organizaciones`));
    return this.http.get(`${this.domain}/organizaciones`)
  }

  getOrganizacion(id: String) {
    const url = `${this.domain}/organizaciones/${id}`;
    //console.log(this.http.get(url))
    return this.http.get(url)
  }

  postOrganizacion(organizacion: Object) {
    return this.http.post(`${this.domain}/organizaciones`, organizacion)
  }

  updateOrganizacion(organizacion: Object, id: String) {
    return this.http.put(`${this.domain}/organizaciones/${id}`, organizacion, httpOptions)
  }

  deleteOrganizacion(id: String) {
    return this.http.delete(`${this.domain}/organizaciones/${id}`)
  }
}
