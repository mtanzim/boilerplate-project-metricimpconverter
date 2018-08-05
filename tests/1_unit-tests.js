/*
*
*
*       FILL IN EACH UNIT TEST BELOW COMPLETELY
*       -----[Keep the tests in the same order!]----
*       (if additional are added, keep them at the very end!)
*/

var chai = require('chai');
var assert = chai.assert;
var ConvertHandler = require('../controllers/convertHandler.js');

var convertHandler = new ConvertHandler();

suite('Unit Tests', function () {

  suite('Function convertHandler.getNum(input)', function () {

    test('Whole number input', function (done) {
      var input = '32L';
      assert.equal(convertHandler.getNum(input), (32).toFixed(5));
      done();
    });

    test('Decimal Input', function (done) {
      var input = '32.343L';
      assert.equal(convertHandler.getNum(input), (32.343).toFixed(5));
      done();
    });

    test('Fractional Input', function (done) {
      var input = '32/45L';
      assert.equal(convertHandler.getNum(input), Number(32 / 45).toFixed(5));
      done();
    });

    test('Fractional Input w/ Decimal', function (done) {
      var input = '3.2/45L';
      assert.equal(convertHandler.getNum(input), Number(3.2 / 45).toFixed(5));
      done();
    });

    test('Invalid Input (double fraction)', function (done) {
      var input = '3.2/45/45L';
      // console.log(convertHandler.getNum(input));
      assert.isUndefined(convertHandler.getNum(input));
      done();
    });

    test('No Numerical Input', function (done) {
      var input = 'L';
      // console.log(convertHandler.getNum(input));
      assert.equal(convertHandler.getNum(input), (1).toFixed(5));
      done();
    });

  });

  suite('Function convertHandler.getUnit(input)', function () {

    test('For Each Valid Unit Inputs', function (done) {
      var input = ['gal', 'l', 'mi', 'km', 'lbs', 'kg', 'GAL', 'L', 'MI', 'KM', 'LBS', 'KG'];
      input.forEach(function (ele) {
        // console.log(ele);
        // console.log(convertHandler.getUnit(`34${ele}`));
        assert.equal(convertHandler.getUnit(`34${ele}`), ele);
      });
      done();
    });

    test('Unknown Unit Input', function (done) {
      assert.equal(convertHandler.getUnit(`34 newtons`), undefined);
      done();
    });

  });

  suite('Function convertHandler.getReturnUnit(initUnit)', function () {

    test('Return For Each Valid Unit Inputs', function (done) {
      var input = ['gal', 'l', 'mi', 'km', 'lbs', 'kg'];
      var expect = ['l', 'gal', 'km', 'mi', 'kg', 'lbs'];
      input.forEach(function (ele, i) {
        assert.equal(convertHandler.getReturnUnit(ele), expect[i]);
      });
      done();
    });

  });

  suite('Function convertHandler.spellOutUnit(unit)', function () {

    test('For Each Valid Unit Inputs', function (done) {
      var unitDict = {
        'gal': 'gallons',
        'mi': 'miles',
        'lbs': 'pounds',
        'l': 'litres',
        'km': 'kilometres',
        'kg': 'kilograms',
      };

      Object.keys(unitDict).forEach(ele => {
        // console.log(ele);
        assert.equal(convertHandler.spellOutUnit(ele), unitDict[ele]);
        assert.equal(convertHandler.spellOutUnit(ele.toUpperCase()), unitDict[ele]);
      });
      //see above example for hint
      done();
    });

  });

  suite('Function convertHandler.convert(num, unit)', function () {

    test('Gal to L', function (done) {
      var input = [5, 'gal'];
      var expected = 18.9273;
      assert.approximately((convertHandler.convert(input[0], input[1])), expected, 0.1); //0.1 tolerance
      done();
    });

    test('L to Gal', function (done) {
      var input = [5, 'L'];
      var expected = 1.32086;
      assert.approximately((convertHandler.convert(input[0], input[1])), expected, 0.1); //0.1 tolerance
      done();
    });

    test('Mi to Km', function (done) {
      var input = [5, 'Mi'];
      var expected = 8.04672;
      assert.approximately((convertHandler.convert(input[0], input[1])), expected, 0.1); //0.1 tolerance
      done();
    });

    test('Km to Mi', function (done) {
      var input = [5, 'KM'];
      var expected = 3.10686;
      assert.approximately((convertHandler.convert(input[0], input[1])), expected, 0.1); //0.1 tolerance
      done();
    });

    test('Lbs to Kg', function (done) {
      var input = [5, 'lbs'];
      var expected = 2.26796;
      assert.approximately((convertHandler.convert(input[0], input[1])), expected, 0.1); //0.1 tolerance
      done();
    });

    test('Kg to Lbs', function (done) {
      var input = [5, 'KG'];
      var expected = 11.0231;
      assert.approximately((convertHandler.convert(input[0], input[1])), expected, 0.1); //0.1 tolerance
      done();
    });

  });

});