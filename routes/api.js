/*
*
*
*       Complete the API routing below
*
*
*/
var expect = require('chai').expect;
var ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {

  var convertHandler = new ConvertHandler();

  app.route('/api/convert')
    .get(function (req, res, next) {
      console.log("START");
      var input = req.query.input;
      // var initNum = undefined;
      // var initUnit = undefined;
      // try {
      // let { num: initNum, units: initUnit}  = convertHandler.splitOrig(input);
      // console.log (convertHandler.splitOrig(input));
      var initNum = convertHandler.getNum(input);
      var initUnit = convertHandler.getUnit(input);
      console.log(initNum);
      console.log(initUnit);

      var returnUnit = convertHandler.getReturnUnit(initUnit);
      var returnNum = convertHandler.convert(initNum, initUnit).toFixed(5);
      console.log(returnUnit);
      console.log(returnNum);

      if (initNum === undefined && initUnit === undefined) return next(new Error('Invalid number and unit!'));
      if (initNum === undefined) return next(new Error('Invalid number!'));
      if (initUnit === undefined) return next(new Error('Invalid Unit!'));
      if (returnUnit === undefined) return next(new Error('Invalid Return Unit!'));
      if (returnNum === undefined) return next(new Error('Invalid Return number!'));

      return res.json({ initNum, initUnit, returnUnit, returnNum  });
      // } catch (err) {
      //   return next(err);
      // }

      // var initUnit = convertHandler.getUnit(input);
      // var toString = convertHandler.getString(initNum, initUnit, returnNum, returnUnit);

      //res.json
    });

};
