'use strict';

function checkUndefined(srcObject) {
    const objectKeys = Object.keys(srcObject);
    objectKeys.forEach((value, key) => {
        if (!value)
            throw new Error(`${key} is not defined.`);
    });
    return srcObject
}

module.exports = {
    checkUndefined: checkUndefined
}
