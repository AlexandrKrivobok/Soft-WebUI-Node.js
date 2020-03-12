export class PVFModel{
  constructor() {
    this.link = 'https://pokeapi.co/api/v2/pokemon/';
    this.isPokemon = true;
  }

  compare(word) {
    return fetch(`${this.link}${word}`).then(resp => {
      console.log(resp.status)
      if (resp.status === 404) {
        this.isPokemon = false;
      } else {
        this.isPokemon = true;
      }

      return this.isPokemon;
    });
  }
}