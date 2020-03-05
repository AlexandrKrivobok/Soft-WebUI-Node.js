import {getNumbers} from '../src/modules/task6.js';
export function testNumbers(ass) {
  describe('test for task6', () => {
    it('correct data', () => {
      ass.equal(getNumbers(3, 2), '2, 3, 4');
    });

    it('correct data', () => {
      ass.equal(getNumbers(-4, 22), '5, 6, 7, 8');
    });

    it('incorrect input type', () => {
      ass.deepEqual(getNumbers(true, 2), {status: 'failure', reason: 'incorrect input type'});
    });

    it('non integer length', () => {
      ass.deepEqual(getNumbers(4.5, 2), {status: 'failure', reason: 'non integer length'});
    });
  });
}