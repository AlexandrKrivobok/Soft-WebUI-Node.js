import {PokemonModel} from './PokemonModel.js'
import {PokemonView} from './PokemonView.js'

export class PokemonController{
  constructor() {
    this.model = new PokemonModel();
    this.view = new PokemonView(this.handleClickRandomPokemon);
    // context problem, handleClick... won't work in view

    // this.view = new PokemonView(this.handleClickRandomPokemon.bind(this)); // 1. way to fix context

    // this.view = new PokemonView(() => this.handleClickRandomPokemon()); // 2. way to fix context
  }
  
  // (mediator) just taking data from model and do smth in view using it
  handleClickRandomPokemon = () => { // 3. way to fix context
    this.model.getRandomPokemon().then(arr => this.view.renderPokemons(arr));
  }
}