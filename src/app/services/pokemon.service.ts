import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  pokemons = [];


  constructor(private httpClient: HttpClient) {
    this.carregarPokemons();
  }
  async carregarPokemons() {
    const requisicao = await this.httpClient
    .get<any>('https://pokeapi.co/api/v2/pokemon?limit=150')
    .toPromise().then(response=>{
      this.pokemons = response.results;
    })
  }

  getPokemons(): any{
    return this.pokemons;
  }

}
