const findExponentialFor10 = function findExpFor10(value) {
    const i = 0;
    const absValue = Math.abs(value);
    const strValue = absValue.toString();
    if(strValue.includes('.')){
        return  - strValue.split('.')[1].length;
    }else{
        return strValue.length-1;
    }
};
export {findExponentialFor10 as getExponentialFor10};

const roundToStandard = function roundToStandard(value) {
    if (value > 0) {
        return Math.floor(value / 3.0) * 3;
    } else if (value < 0) {
        return Math.floor(value / 3.0) * 3;
    } else {
        return 0;
    }
};
export {roundToStandard};

const makeReverseMap = function makeReverseMap(forwardMap) {
    const reverseMap = {};
    for (const key in forwardMap) {
        if (forwardMap.hasOwnProperty(key)) {
            reverseMap[forwardMap[key]] = key;
        }
    }
    return reverseMap;
};

export {makeReverseMap};