/**
 * Imports
 */
const expect = require('chai').expect;
const xor = require('../');

/**
 * Tests
 */
describe('Xor tests', function describeXorTests() {
  describe('empty calls', function describeEmptyCalls() {
    it('errors out on empty calls', () => {
      const wrappedXor = function () {
        xor();
      };

      expect(() => xor()).to.throw(Error, 'Must pass in at least one argument');
    });
  });

  describe('single-argument calls', function describeSingleArgumentCalls() {
    it('true should return true', () => {
      expect(xor(true)).to.equal(true);
    });

    it('true-ish should return true', () => {
      expect(xor('true')).to.equal(true);
      expect(xor(1)).to.equal(true);
      expect(xor('string')).to.equal(true);
      expect(xor({})).to.equal(true);
    });

    it('false should return false', () => {
      expect(xor(false)).to.equal(false);
    });

    it('false-ish should return false', () => {
      expect(xor(0)).to.equal(false);
      expect(xor('')).to.equal(false);
      expect(xor(undefined)).to.equal(false);
    });
  });

  describe('two-argument calls', function describeTwoArgumentCalls() {
    it('two different booleans', () => {
      expect(xor(true, false)).to.equal(true);
      expect(xor(false, true)).to.equal(true);
    });

    it('two different true-ish arguments', () => {
      expect(xor(true, 0)).to.equal(true);
      expect(xor('string', undefined)).to.equal(true);
      expect(xor('', true)).to.equal(true);
    });

    it('two identical booleans', () => {
      expect(xor(true, true)).to.equal(false);
      expect(xor(false, false)).to.equal(false);
    });

    it('two similar arguments', () => {
      expect(xor(true, 'string')).to.equal(false);
      expect(xor(1, {})).to.equal(false);
      expect(xor(0, false)).to.equal(false);
      expect(xor('false', 'false')).to.equal(false);
    });
  });

  describe('multi-argument calls', function describeMultiArgumentCalls() {
    it('stacked booleans', () => {
      expect(xor(true, true, true)).to.equal(true);
      expect(xor(true, false, true)).to.equal(false);
      expect(xor(false, false, false)).to.equal(false);
      expect(xor(true, false, true, false, true)).to.equal(true);
      expect(xor(false, false, false, false, false, true)).to.equal(true);
    });

    it('stacked mixed arguments', () => {
      expect(xor(true, 0, {}, 'false')).to.equal(true);
      expect(xor('', null, 0, 1, false)).to.equal(true);
      expect(xor('string', true, 1, {})).to.equal(false);
    });
  });
});
