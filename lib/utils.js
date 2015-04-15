'use strict';
var findExponentialFor10 = function findExpFor10(value) {
  var i = 0;
  var absValue = Math.abs(value);
  var strValue = absValue.toString();
  if(strValue.indexOf('.') !==-1){
    return  - strValue.split('.')[1].length;
  }else{
    return strValue.length-1;
  }
};
exports.getExponentialFor10 = findExponentialFor10;

var roundToStandard = function roundToStandard(value) {
  if (value > 0) {
    return Math.floor(value / 3.0) * 3;
  } else if (value < 0) {
    return Math.floor(value / 3.0) * 3;
  } else {
    return 0;
  }
};
exports.roundToStandard = roundToStandard;

var makeReverseMap = function makeReverseMap(forwardMap) {
  var reverseMap = {};
  for (var key in forwardMap) {
    if (forwardMap.hasOwnProperty(key)) {
      reverseMap[forwardMap[key]] = key;
    }
  }
  return reverseMap;
}

exports.makeReverseMap = makeReverseMap