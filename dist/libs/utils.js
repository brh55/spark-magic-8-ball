'use strict';

function checkUndefined(srcObject) {
    var objectKeys = Object.keys(srcObject);
    objectKeys.forEach(function (value, key) {
        if (!value) throw new Error(key + ' is not defined.');
    });
    return srcObject;
}

module.exports = {
    checkUndefined: checkUndefined
};