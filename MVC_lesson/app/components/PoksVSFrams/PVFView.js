export class PVFView{
  constructor(handleClickPOF) {
    this.btn = document.querySelector('.btn-poks-vs-frams');
    this.table = document.querySelector('.poks-vs-frams');
    this.input = document.querySelector('.input');
    this.ITStuff =  document.querySelector('#ITStuff');
    this.Pokemons =  document.querySelector('#Pokemons');

    this.btn.addEventListener('click', handleClickPOF);
  }

  renderPokemons(arr) {
    this.info.innerHTML = arr.map(p => this.getSinglePokemon(p)).join('');
  }

  // render 1 pokemon from pokemon object to UI
  getSinglePokemon({name, pic}) {
    return `<div class="pokemon-info d-flex">
    <div class="card" style="width: 12rem;">
      <img src="${pic}" class="card-img-top" alt="pokemon">
      <div class="card-body">
        <h5 class="card-title pokemon-name">${name}</h5>
      </div>
    </div>`
  }

  // render next pokemon if it's a pokemon, or ITStuff if it's not a pokemon
  renderCompareResult(compareResult, word) {
    if (compareResult) {
      this.Pokemons.innerHTML = this.Pokemons.innerHTML + `, ${word}`;
    } else {
      this.ITStuff.innerHTML = this.ITStuff.innerHTML + `, ${word}`;
    }
  }

  // get user input word to find out if it's pokemon name or not
  getUserInput() {
    const word = this.input.value;

    this.input.innerHTML = '';

    return word.toLowerCase();
  }
}