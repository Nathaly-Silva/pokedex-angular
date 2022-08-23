import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';
import { Pokemon } from '../models/pokemon.model';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.sass']
})
export class PokemonListComponent implements OnInit {

    localPokemons: Pokemon[] = [];

    async getPokemons(){
      await this.pokemonService.carregarPokemons();
      console.log(this.pokemonService.pokemons);
      this.pokemonService.pokemons.map((pokemon: any) => {
        this.localPokemons.push(
          new Pokemon(
            pokemon.name,
            pokemon.url
          )
        );
      });

    }

    ngOnInit(){
      this.getPokemons();
    }

  constructor(public pokemonService: PokemonService){}
  }
