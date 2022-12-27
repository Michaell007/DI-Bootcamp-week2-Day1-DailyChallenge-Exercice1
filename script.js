const fruits = ["Banana", "Apples", "Oranges", "Blueberries"];

// delete banana
fruits.splice(0, 1);

// order array
fruits.sort();

// add kiwi to end
fruits.push("Kiwi");

// delete Apples
let fruits_new = fruits.slice(1);

// reverse order
fruits_new.reverse();

console.log(fruits_new);