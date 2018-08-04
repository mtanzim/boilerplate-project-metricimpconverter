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
    units = sanitizedInput.slice(firstCharIndex, sanitizedInput.length).toLowerCase();

    if (!validUnits.includes(units)) throw new Error('Invalid Units!')
    if (!isNumOnly) return units;


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

      num = Number(num).toFixed(5);
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
    var result;

    return result;
  };

  this.spellOutUnit = function (unit) {
    var result;

    return result;
  };

  this.convert = function (initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    var result;

    return result;
  };

  this.getString = function (initNum, initUnit, returnNum, returnUnit) {
    var result;

    return result;
  };

}

module.exports = ConvertHandler;
