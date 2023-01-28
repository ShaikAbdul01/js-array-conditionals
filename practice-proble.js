// Practice Problem 1
// var fruits = ['Apple', 'Banana', 'Orange'];
// a) Find the index of ‘Banana’ and replace ‘Banana’ with ‘Mango’.
// b) Remove ‘Orange’ and add ‘Watermelon’.
var fruits = ['Apple', 'Banana', 'Orange'];

//a
findBanana=fruits.indexOf('Banana');
console.log(findBanana);

//b
fruits.pop();
console.log(fruits);
fruits.push('Watermelon');
console.log(fruits);

