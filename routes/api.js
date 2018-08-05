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
      // console.log("START");
      var input = req.query.input;
      // var initNum = undefined;
      // var initUnit = undefined;
      // try {
      // let { num: initNum, units: initUnit}  = convertHandler.splitOrig(input);
      // console.log (convertHandler.splitOrig(input));
      var initNum = convertHandler.getNum(input);
      var initUnit = convertHandler.getUnit(input);
      if (initNum === undefined && initUnit === undefined) return res.status(404).send('Invalid number and unit!');
      if (initNum === undefined) return res.status(404).send('Invalid number!');
      if (initUnit === undefined) return res.status(404).send('Invalid Unit!');
      // console.log(initNum);
      // console.log(initUnit);

      var returnUnit = convertHandler.getReturnUnit(initUnit);
      var returnNum = Number(convertHandler.convert(initNum, initUnit).toFixed(5));
      // console.log(returnUnit);
      // console.log(returnNum);
      
      if (returnUnit === undefined) return res.status(404).send('Invalid return Unit!');
      if (returnNum === undefined) return res.status(404).send('Invalid return number!');

      var string = convertHandler.getString(initNum, initUnit, returnNum, returnUnit);
      if (string === undefined) return res.status(404).send('Invalid return string!');

      return res.json({ initNum, initUnit, returnUnit, returnNum, string });
      // } catch (err) {
      //   return next(err);
      // }

      // var initUnit = convertHandler.getUnit(input);
      // var toString = convertHandler.getString(initNum, initUnit, returnNum, returnUnit);

      //res.json
    });

};
