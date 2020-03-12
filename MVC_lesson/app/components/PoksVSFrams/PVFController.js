import {PVFModel} from './PVFModel.js'
import {PVFView} from './PVFView.js'

export class PokemonsVSFrameworks{
  constructor() {
    this.model = new PVFModel();
    this.view = new PVFView(this.handleClickPOF);
  }
  

  handleClickPOF = () => {
    const word = this.view.getUserInput();
    
    this.model.compare(word).then(compareResult => this.view.renderCompareResult(compareResult, word));
  }
}