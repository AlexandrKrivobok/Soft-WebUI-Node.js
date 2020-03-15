export class RenderView {
  constructor(cBack) {
    this.animalContainer = document.querySelector('#animalContainer') 
    window.addEventListener('load', cBack);  
  }

  renderData(arr) {
    this.animalContainer.innerHTML = arr.map(el => this.renderSingleAnimal(el)).join('');
  }

  renderSingleAnimal({id, species, price, gender, weight, birth_date, color, breed, image, is_sterile, hair}) {
    return `    <ul class="col-4" style="background: no-repeat url('${image}'); background-position: center; background-size: 100%; font-weight: 700; color: white;">
      <li>id: ${id}</li>
      <li>species: ${species}</li>
      <li>price: ${price}</li>
      <li>gender: ${gender}</li>
      <li>weight: ${weight}</li>
      <li>birth_date: ${birth_date}</li>
      <li>color: ${color}</li>
      <li>breed: ${breed}</li>
      <li>is_sterile: ${is_sterile}</li>
      <li>hair: ${hair}</li>
    </ul>`;
  }
}