/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {



  this.splitOrig = function (input, isNumOnly) {

    const validUnits = ['gal', 'l', 'mi', 'km', 'lbs', 'kg', 'GAL', 'L', 'MI', 'KM', 'LBS', 'KG'];
    // console.log(input);
    // console.log(input.search(/[a-zA-Z]/g));
    let sanitizedInput = input.replace(/\s/g, "");

    // console.log('In controller');

    // console.log(sanitizedInput);
    let num = sanitizedInput;
    let units = sanitizedInput;

    let firstCharIndex = sanitizedInput.search(/[a-zA-Z]/g);
    // units = sanitizedInput.slice(firstCharIndex, sanitizedInput.length).toLowerCase();
    units = sanitizedInput.slice(firstCharIndex, sanitizedInput.length);

    // if (!validUnits.includes(units)) throw new Error('Invalid Units!')

    if (!isNumOnly) {
      if (!validUnits.includes(units)) return undefined;
      return units;
    }


    if (firstCharIndex > -1) {
      num = sanitizedInput.slice(0, firstCharIndex);
      if (String(num) === "") {
        // console.log('Blank number!');
        num = 1;
      }
      // console.log(`num part: ${num}`);
      // console.log(`unit part: ${units}`);
      // test number portion
      if (isNaN(num)) {
        // console.log('IS NAN!');
        // console.log(num);
        let slashIndex = num.search(/\//g);

        if (slashIndex > -1) {
          let numerator = num.slice(0, slashIndex);
          let denom = num.slice(slashIndex + 1, num.length);
          // console.log(`Top fraction: ${numerator}`);
          // console.log(`Bottom fraction: ${denom}`);

          // console.log(isNaN(numerator) || isNaN(denom));
          // if (isNaN(numerator) || isNaN(denom)) throw new Error('Invalid number');
          if (isNaN(numerator) || isNaN(denom)) return undefined;


          num = Number(numerator / denom);

          // } else throw new Error('Invalid number');
        } else return undefined;
      }

      // num = Number(num).toFixed(5);
      // console.log(num);
      return num;
      // } else throw new Error('Invalid Number and Unit!');
    } else return undefined;
  }

  this.getNum = function (input) {
    return this.splitOrig(input, true);
  };

  this.getUnit = function (input) {
    return this.splitOrig(input, false);
  };

  this.getReturnUnit = function (initUnit) {

    var unitDict = {
      'gal': 'l',
      'mi': 'km',
      'lbs': 'kg',
      'GAL': 'L',
      'MI': 'KM',
      'LBS': 'KG',
      'l': 'gal',
      'km': 'mi',
      'kg': 'lbs',
      'L': 'GAL',
      'KM': 'MI',
      'KG': 'LBS'
    };
    return unitDict[initUnit] || undefined;
  };

  this.spellOutUnit = function (unit) {

    // console.log(unit);

    var unitDict = {
      'gal': 'gallons',
      'mi': 'miles',
      'lbs': 'pounds',
      'l': 'litres',
      'km': 'kilometres',
      'kg': 'kilograms',
    };

    return unitDict[unit.toLowerCase()];
  };

  this.convert = function (initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;

    let convertedVal = undefined;

    switch (initUnit.toLowerCase()){
      case 'gal':
        convertedVal = initNum * galToL;
        break;
      case 'l':
        convertedVal = initNum / galToL;
        break;

      case 'lbs':
        convertedVal = initNum * lbsToKg;
        break;
      case 'kg':
        convertedVal = initNum / lbsToKg;
        break;

      case 'mi':
        convertedVal = initNum * miToKm;
        break;
      case 'km':
        convertedVal = initNum / miToKm;
        break;
      default:
        convertedVal = undefined; 
    }

    // console.log(convertedVal);
    return convertedVal;
  };

  this.getString = function (initNum, initUnit, returnNum, returnUnit) {
    // console.log(initUnit);
    var string = `${initNum} ${this.spellOutUnit(initUnit)} converts to ${returnNum} ${this.spellOutUnit(returnUnit)}`;
    // console.log(string); 
    return string;
  };

}

module.exports = ConvertHandler;
