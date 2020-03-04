import {sum} from '../app/sum.js'
export function testSum(ass) {
  describe('Проверка ф-ции sum', () => {
    it('Summing of 2 nums', () => {
      ass.equal(sum(2, 2), 4);
    });
  
    it('Summing of 3 nums', () => {
      ass.equal(sum(2, 2, 2), 6);
    });
  
    it('Summing of 4 nums', () => {
      ass.equal(sum(2, 2, 2, 5), 11);
    });
  
    it('string check', () => {
      ass.equal(sum(2, 3, 'four'), 5);
    });
  
    describe('incorrect args', () => {
      it('check of input data type', () => {
        ass.equal(sum(true, undefined, 'four', 29), 29);
      });
    
      it('check of input data type', () => {
        ass.equal(sum(true, NaN, 'four', 29), 29);
      });
    
      it('check of no input', () => {
        ass.equal(sum(), 0);
      });
    });
  });  
}