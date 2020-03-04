import {multi} from '../app/multi.js'
export function testMulti(ass) {
  describe('Проверка ф-ции multi', () => {
    it('Multi of 2 nums', () => {
      ass.equal(multi(2, 2), 4);
    });
  
    it('Multi of 3 nums', () => {
      ass.equal(multi(2, 2, 2), 8);
    });
  
    it('Multi of 4 nums', () => {
      ass.equal(multi(2, 2, 2, 2), 16);
    });
  
    it('string check', () => {
      ass.equal(multi(2, 3, 'four'), 5);
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