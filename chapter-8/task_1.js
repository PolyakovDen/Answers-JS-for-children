//Создать две функции add и multiply, которые принимают два аргуиента. 
// add должна сумировать аргументы, multiply умножать.
// решить данное уравнение = 36325 * 9824 + 777

'use strict'


function add(a, b) {
    let resultAdd = a + b;
    return resultAdd;
}

function multiply(a, b) {
    let resultMultiply = a * b;
    return resultMultiply;
}
 
console.log(add(multiply(36325, 9824), 777));