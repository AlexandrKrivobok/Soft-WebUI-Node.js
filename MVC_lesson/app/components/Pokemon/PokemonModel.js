export class PokemonModel{
  constructor() {
    this.link = 'https://pokeapi.co/api/v2/pokemon/';
    this.pokemonMax = 807;
    this.base = [];
  }

  getRandomPokemon() {
    // random id generation to get random pokemon
    const id = Math.floor(Math.random() * this.pokemonMax + 1);

    // taking data, parsing, taking required info from data, pushing it into our arr for UI
    return fetch(`${this.link}${id}`).then(r => r.json()).then(data => { 
      this.base.unshift({
        id,
        name: data.name,
        pic: data.sprites.front_default,
      });

      return this.base;
    }); 
  }
}