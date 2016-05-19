function double_to_one(inputsArray) {
  var splitedArray = getSplitedArray(inputsArray)

  var printArray = getPrint(splitedArray);

  return printArray;
}

function getSplitedArray(inputsArray) {
  var splitedArray = [];

  inputsArray.forEach(function (num) {
    if (num.length !== 1) {
      var splitedNum = num.toString().split("");

      splitedNum.forEach(function (num) {
        if (parseInt(num)) {
          splitedArray.push(parseInt(num));
        }
      });
    } else {
      splitedArray.push(parseInt(num));
    }
  });

  return splitedArray;
}

function getPrint(splitedArray) {
  var print = [] ;

  for (var i = 0; i < splitedArray.length; i++) {
    var num = isExist(splitedArray[i], splitedArray, i);

    if (!num) {
      print.push(splitedArray[i]);
    }
  }

  return print;
}

function isExist(num, splitedArray, flag) {
  for (var i = 0; i < flag; i++) {
    if (num === splitedArray[i]) {

      return true;
    }
  }
}

module.exports = double_to_one;
