import {checkPolindrome} from '../src/modules/task4.js';
export function testPolindrome(ass) {
  describe('test for task4', () => {
    it('correct data', () => {
      ass.equal(checkPolindrome(12345), 0);
    });

    it('correct data', () => {
      ass.equal(checkPolindrome(33377777), 77777);
    });

    it('correct data', () => {
      ass.equal(checkPolindrome(9), 0);
    });

    it('float data', () => {
      ass.deepEqual(checkPolindrome(6.8), {status: 'failure', reason: 'non integer input'});
    });

    it('incorrect data type', () => {
      ass.deepEqual(checkPolindrome(NaN), {status: 'failure', reason: 'wrong input type'});
    });
  });
}