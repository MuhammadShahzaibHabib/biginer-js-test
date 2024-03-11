//Question no. 1

var num = +prompt("Enter the number");

if(num % 2 === 0){

    console.log("the number is even");
}
else{
    console.log("the number is odd");
}

// Question no. 2

var num = +prompt("Enter Number");
if(num > 0){

    console.log("The number is positive");

}
else if(num === 0){
    console.log("The number is zero");
}
else{
    console.log("The number is negative");
}

// Question no. 3

var num1 = +prompt("Enter num1");
var num2 = +prompt("Enter num2");

if(num1 > num2){
    console.log(num1);
}
else{
    console.log(num2);
}

 //Question no. 4

var num1 = +prompt("Enetr the number1");
var num2 = +prompt("Enetr the number2");
var num3 = +prompt("Enetr the number3");

if(num1 < num2 && num1 < num3){
    console.log(num1);
}
else if(num2 < num1 && num2 < num3){
    console.log(num2);
}
else{
    console.log(num3);
}

// Question no. 5

var sub1 = +prompt("ENter subject 1 marks");
var sub2 = +prompt("ENter subject 2 marks");
var sub3 = +prompt("ENter subject 3 marks");
var avrg;

avrg = (sub1 + sub2 + sub3)/ 3 ;

if(avrg >= 90){

    console.log("A1");
}
else if(avrg >= 80){

    console.log("A");
}
else if(avrg >= 70){

    console.log("B");
}
else if(avrg >= 60){

    console.log("c");
}

// Qusetion no.6

var tem_in_celcius = parseFloat(prompt("Enter the temprature"));

tem_in_Fahrenheit = (tem_in_celcius*1.8)+32;

console.log(tem_in_Fahrenheit);

// Question no. 7

var side_1 = +prompt("Enter the length of side 1");
var side_2 = +prompt("Enter the length of side 2");
var side_3 = +prompt("Enter the length of side 3");

if(side_1 === side_2 && side_2 === side_3 && side_3 === side_1){

    console.log("equilateral triangle");
}
else if(side_1 === side_2 || side_2 === side_3 || side_3 === side_1){

    console.log("isosceles triangle");
}
else{

    console.log("scalene triangle");
}

// Qustion no. 8

var char = prompt("Enetr thr character");

if(char === 'A' || char === 'E' || char === 'I' || char === 'O' || char === 'U'){

    console.log("VOWEL");
}
else if(char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u'){

    console.log("vowel");
}
else{

    console.log("Consonent");
}

// Question no. 9

var base = +prompt("Enter the base number");
var exponent = +prompt("Enetr the expontent");

var result = base**exponent;

console.log(result);

// Question no. 10

var age = +prompt("Enter the age");

if(age <= 12){

    console.log("child");
}
else if(age <= 19){

    console.log("Teenager");
}
else if(age <= 64){

    console.log("Adult");
}
else{

    console.log("Senior");
}