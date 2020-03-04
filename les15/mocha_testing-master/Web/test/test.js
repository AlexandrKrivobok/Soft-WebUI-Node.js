// Simple tests
const foo = 'barr';

describe('Simple test', () => {
  it('Cheks for type is a string', () => {
    assert.typeOf(foo, 'string');
  });

  it('Checks for equality', () => {
    assert.equal(foo, 'bar');
  });

  it('Checks for length', () => {
    assert.lengthOf(foo, 3);
  });
});

//Simple equations tests
describe('calculator', () => {
  describe('sum functions', () => {
    it('2 + 2 equals to 4', () => {
      assert.equal(2 + 2, 4);
    });

    it('5 + 7 equals to 12', () => {
      assert.equal(5 + 7, 12);
    });
  });

  describe('subtract functions', () => {
    it('10 - 2 equals to 8', () => {
      assert.equal(10 - 2, 8);
    });
  });
});

//Functions for demo testing
describe('task.6', () => {
  it('return string of comma separated numbers', () => {
    assert.equal(showRowOfSquares(3, 4), '2, 3, 4');
  });
});