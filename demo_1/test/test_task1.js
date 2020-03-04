import {createCheeseBoard} from '../src/modules/task1.js';
export function testChess(ass) {
  describe('Tests of task1', () => {
    it('correct parameters', () => {
      ass.equal(createCheeseBoard(1, 1, '%'), '% \n');
    });

    it('correct parameters', () => {
      ass.equal(createCheeseBoard(-1, -1, '%'), '% \n');
    });

    it('some of parameters missed', () => {
      ass.deepEqual(createCheeseBoard(1, 1), {status: 'failure', reason: 'some of parameters missed'});
    });

    it('incorrect parameters type', () => {
      ass.deepEqual(createCheeseBoard(1, true, '%'), {status: 'failure', reason: 'wrong input type. width, height - numbers, symb - string'});
    });

    it('out of range', () => {
      ass.deepEqual(createCheeseBoard(66, 6, 'i'), {status: 'failure', reason: 'input values are not in range. width and height should be in range 1 - 50'});
    });

    it('integer params only', () => {
      ass.deepEqual(createCheeseBoard(6.5, 6, 'i'), {status: 'failure', reason: 'width, height must be an integer'});
    });

    


    
  
  });


  
}