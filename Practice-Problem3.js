// You are given three numbers 13, 79, and 45. Write a program that will print the
// largest number using if-else.

var r1=13,r2=79,r3=45;
if(r1 >= r2 && r1 >= r3){
    console.log('13 is largest number');
}
else if(r2>=r1 && r2>=r3){
    console.log('79 is largest number');
}
else{
    console.log('45 is largest number');
}

// You are given a triangle with the sides 9, 8, 9. Write a program to check whether a
// triangle is Isosceles or not using if-else.
// Isosceles => two sides are equal
var r1=9,r2=8,r3=9;
if(r1 == r2 && r2 == r3){
    console.log('Equilateral');
}
else if(r1==r2 && r1==r3){
    console.log('Isosceles ');
}
else{
    console.log('Scalene ');
}