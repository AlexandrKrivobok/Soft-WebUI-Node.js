export class PokemonView{
  constructor(HandleClickRP) {
    this.btn = document.querySelector('.btn-poke');
    this.info = document.querySelector('.pokemon-info');
    this.btn.addEventListener('click', HandleClickRP);
  }

  renderPokemons(arr) {
    this.info.innerHTML = arr.map(p => this.getSinglePokemon(p)).join('');
  }

  // render 1 pokemon from pokemon object to UI
  getSinglePokemon({name, pic}) {
    return `<div class="pokemon-info d-flex ">
    <div class="card my-5 mx-3" style="width: 12rem;">
      <img src="${pic}" class="card-img-top" alt="pokemon">
      <div class="card-body">
        <h5 class="card-title pokemon-name">${name}</h5>
      </div>
    </div>`
  }
}