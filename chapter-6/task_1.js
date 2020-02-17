// Написать цикл, который будет менять масив с животными, к ним нужно добавить ключевое слово awesome

'use strict'

let animals = ['Cat', 'Fish', 'Pig', 'Dog'];

for (let i = 0; i < animals.length; i++) {
    animals[i] = 'Awesome ' + animals[i];
}

console.log(animals);
