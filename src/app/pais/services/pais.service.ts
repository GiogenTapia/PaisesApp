import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {


  private _apiURL : String = 'https://restcountries.com/v3.1';


  constructor(private http: HttpClient) { }
  
  public obtenerPais(termino : string): Observable<Country[]> {
    
    const url = `${this._apiURL}/name/${termino}`;
     return this.http.get<Country[]>(url);

  }
}