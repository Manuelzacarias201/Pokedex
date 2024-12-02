import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Pokemon } from '../models/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonAPIService {
  private apiURL = 'https://pokeapi.co/api/v2/pokemon';
  constructor(private http: HttpClient) { }

  getPokemons(): Observable<Pokemon[]> {
    return this.http.get<any>(this.apiURL).pipe(
      map(response => response.results)
    );
  }

  getPokemonsByName(name: string): Observable<any> {
    return this.http.get<any>(`${this.apiURL}/${name}`);
  }
}
