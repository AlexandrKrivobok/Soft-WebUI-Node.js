import {rectangleInRectangle} from '../src/modules/task2.js';
export function testRectangles(ass) {
  describe('Tests of task2', () => {
    it('correct prameters', () => {
      ass.equal(rectangleInRectangle({w: 10, h: 10}, {h: 5, w: 5}), 1);
    });

    it('some of parameters missing', () => {
      ass.deepEqual(rectangleInRectangle({w: 10, h: 10}, {b: 5, a: 5}), {status: 'failure', reason: 'parameters missing'});
    });

    it('incorrect prameters range', () => {
      ass.deepEqual(rectangleInRectangle({w: -10, h: 10}, {h: 5, w: -5}), {status: 'failure', reason: 'out of range. width, height should be in range > 0'});
    });

    it('wrong prameters type', () => {
      ass.deepEqual(rectangleInRectangle({w: 10, h: 10}, {h: 5, w: true}), {status: 'failure', reason: 'wrong parameters type'});
    });
  });
}