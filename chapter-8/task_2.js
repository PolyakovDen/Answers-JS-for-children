// Проверка масива на индентичность 

'use strict'

function areArraysSame (arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }

    for (let i = 0; i < arr1.length; i++) {
        arr1[i] !== arr2[i];
        return false;
    }

    return true;
}

console.log(areArraysSame([1, 2, 3, 9, 11], [1, 2, 3, 7]));