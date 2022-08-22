import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.sass']
})
export class PokemonListComponent implements OnInit {

  ngOnInit(): void {
    console.log(this.pokemonService.getPokemons());
  }

  constructor(public pokemonService: PokemonService) {}
}

