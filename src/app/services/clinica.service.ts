import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { Clinica } from '../models/clinica.model';

const base_url = environment.base_url;


@Injectable({
  providedIn: 'root'
})
export class ClinicaService {


  constructor( private http: HttpClient ) { }


  get token(): string {
    return localStorage.getItem('token') || '';
  }

  get headers() {
    return {
      headers: {
        'x-token': this.token
      }
    };
  }



  cargarClinicas() {

    const url = `${ base_url }/hospitales`;
    return this.http.get( url, this.headers )
              .pipe(
                map( (resp: {ok: boolean, hospitales: Clinica[] }) => resp.hospitales )
              );
  }

  crearClinica( nombre: string ) {

    const url = `${ base_url }/hospitales`;
    return this.http.post( url, { nombre }, this.headers );
  }

  actualizarClinica( _id: string, nombre: string  ) {

    const url = `${ base_url }/hospitales/${ _id }`;
    return this.http.put( url, { nombre }, this.headers );
  }

  borrarClinica( _id: string ) {

    const url = `${ base_url }/hospitales/${ _id }`;
    return this.http.delete( url, this.headers );
  }

}
