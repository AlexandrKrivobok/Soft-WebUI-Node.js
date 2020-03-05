import {fibRow} from '../src/modules/task7.js';
export function testFib(ass) {
  describe('test for task7', () => {
    it('correct data', () => {
      ass.deepEqual(fibRow({min: 1, max: 7}), [1, 2, 3, 5]);
    });

    it('correct data', () => {
      ass.deepEqual(fibRow({min: -1, max: -3}), [1, 2]);
    });

    it('correct data', () => {
      ass.deepEqual(fibRow({min: 1, length: 2}),[13, 21, 34, 55, 89]);
    });
    
    it('value is missing', () => {
      ass.deepEqual(fibRow({min: 1}),{status: 'failure', reason: 'value is missing'});
    });

    it('value is missing', () => {
      ass.deepEqual(fibRow({hello: 1}),{status: 'failure', reason: 'value is missing'});
    });

    it('wrong input type', () => {
      ass.deepEqual(fibRow({min: 1, max: true}), {status: 'failure', reason: 'wrong type of value'});
    });

    it('wrong input type', () => {
      ass.deepEqual(fibRow({length: true}), {status: 'failure', reason: 'wrong type of value'});
    });

    it('non integer length', () => {
      ass.deepEqual(fibRow({length: 1.2}), {status: 'failure', reason: 'non integer length'});
    });
    
    // it('non integer parameters', () => {
    //   ass.deepEqual(getLuckyTicket({min: 1.99, max: -12}), {status: 'failure', reason: 'non integer parameters'});
    // });

    // it('min > max', () => {
    //   ass.deepEqual(getLuckyTicket({min: 221, max: -12}), {status: 'failure', reason: 'min > max'});
    // });
  });
}