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
    .get(function (req, res, next){
      console.log("START");
      var input = req.query.input;
      // var initNum = undefined;
      // var initUnit = undefined;
      try {
        // let { num: initNum, units: initUnit}  = convertHandler.splitOrig(input);
        // console.log (convertHandler.splitOrig(input));
        var initNum = convertHandler.getNum(input);
        var initUnit = convertHandler.getUnit(input);
        console.log(initNum);
        console.log(initUnit);
      } catch (err) {
        return next(err);
      }
      


      
      // var initUnit = convertHandler.getUnit(input);
      // var returnNum = convertHandler.convert(initNum, initUnit);
      // var returnUnit = convertHandler.getReturnUnit(initUnit);
      // var toString = convertHandler.getString(initNum, initUnit, returnNum, returnUnit);
      
      //res.json
    });
    
};
