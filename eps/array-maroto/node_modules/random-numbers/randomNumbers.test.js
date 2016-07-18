'use strict'

const util = require('util')
const expect = require('chai').expect
const create = require('./randomNumbers')

describe('randonNumbers', () => {  
  const testNameTruey = 'is number'
  const randomNumber = create.randomNumber()
  describe(testNameTruey,  () => {
    it('testing if '+randomNumber+' '+testNameTruey, () => {
      expect(util.isNumber(randomNumber)).to.equal(true)
    });
  });
  const testNameNoteEqualLast = 'is not equal the last'
  const randomNumber2 = create.randomNumber()
  describe(testNameNoteEqualLast,  () => {
    it('testing if '+randomNumber2+' '+testNameNoteEqualLast+' '+randomNumber, () => {
      expect(randomNumber2).to.not.equal(randomNumber)
    });
  });
});