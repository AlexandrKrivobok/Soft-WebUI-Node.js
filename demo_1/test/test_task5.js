import {getLuckyTicket} from '../src/modules/task5.js';
export function testLuckyTicket(ass) {
  describe('test for task5', () => {
    it('correct data', () => {
      ass.deepEqual(getLuckyTicket({min: 1, max: 12}), {simpleCount: 0,  hardCount: 1, winner: 'the winner is: HARD WAY'});
    });

    it('correct data', () => {
      ass.deepEqual(getLuckyTicket({min: -1, max: -12}), {simpleCount: 0,  hardCount: 1, winner: 'the winner is: HARD WAY'});
    });

    it('wrong input type', () => {
      ass.deepEqual(getLuckyTicket([]), {status: 'failure', reason: 'wrong input type'});
    });

    it('non integer parameters', () => {
      ass.deepEqual(getLuckyTicket({min: 1.99, max: -12}), {status: 'failure', reason: 'non integer parameters'});
    });

    it('min > max', () => {
      ass.deepEqual(getLuckyTicket({min: 221, max: -12}), {status: 'failure', reason: 'min > max'});
    });

    it('out of range', () => {
      ass.deepEqual(getLuckyTicket({min: 2, max: 9999221}), {status: 'failure', reason: 'out of range'});
    });
  });
}