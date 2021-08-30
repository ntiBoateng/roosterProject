const assert = require('assert')
const Rooster = require('../index')


describe('Rooster',()=>{
  describe('.announceDawn',()=>{
    it('returns a rooster call',()=>{
      const expected = 'cock-a-doodle-doo!';
      const result = Rooster.announceDawn()

      assert.equal(result,expected)
    })
  })
})

describe('Rooster',()=>{
  describe('.timeAtDawn',()=>{
    it('returns its argument as a string',()=>{
      let result =Rooster.timeAtDawn(12);
      let expected = '12';

      assert.strictEqual(result,expected)
    })
    it('throws an error if passed a number less than 0',()=>{
      assert.throws(
  () => {
     Rooster.timeAtDawn(-12);
  },
  RangeError
);
    })
    it('throws an error if passed a number greater than 23',()=>{
      assert.throws(
  () => {
     Rooster.timeAtDawn(24);
  },
  RangeError
);
    })
  })
})
