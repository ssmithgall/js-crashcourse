console.log('Hello World');
// Comment

// Variables

let b = 'dog';
console.log(b);

let someNumber = 45;
console.log(someNumber);


let ourPlanetName = 'Earth';
let currentUserName = 'Stephen';

let num1 = 5.7;
num1 = num1 + 10;
console.log(num1);

/*Functions
1. Create a function
2. Call the function
*/

//Call the function
function fun() {
    console.log('this is a function');
}

//Call the function
fun();

/* Create a function that takes in a name and says Hello followed by name

Ex: Name: Stephen
    Return: Hello Stephen
    */


/*
function greeting( yourName) {
    
    let result = 'Hello ' + yourName + '!';
    console.log(result);
}

let name = prompt('What is your name?'); //prompt is stored in a variable
greeting(name);

//How do arguments work in functions?
// How to add 2 numbers together in a function?

function sumNumbers(a, b){ //Function called "sumNumbers" has 2 inputs. a and b are not defined as numbers
    let result = a + b; //creates a variable and tells the function what to do
    console.log(a + b); //prints out the result in the console window
}

sumNumbers(10, 10);
sumNumbers('Hello ', 'Stephen!'); // the ''s creates a string



function dogs (dogNames) {  //Creates the function
    let result = dogNames + ' are the best boys!'; //defines the function output. String concatenation
    console.log(result);
}

let dogNames = prompt('What are your dogs names?'); //sets the variable and creates the prompt
dogs(dogNames); //Calls the function
*/

// While Loops

/*
let num = 0; // defines num variable

while (num < 100) { //
    num += 1; // +1 until 100
    console.log(num) //print it all out
}

*/
 /*
// For Loop
for(let num = 0; num <= 100; num++) { //Same thing as above While Loop.
    console.log(num);
}
*/


// Data types
let yourAge = 27; // number
let yourName = 'Stephen'; //string
let name = {first: 'Stephen', last: 'Smithgall'}; //object/dictionary. (Key: Value)
let truth = false; //boolean
let groceries = ['apple', 'banana', 'oragnes']; //array/list
let random; // undefined
let nothing = null; //value null


//Strings in javascript (common methods)
let fruit = 'Banana,apple,pear';
let moreFruits = 'Banana\nApple\nPeach\nPlum'; // \n = new line
console.log(moreFruits);

console.log(fruit.length); //counts the characters of the variable fruit (let fruit = 'Banana')
console.log(fruit.indexOf('an')); //prints number of 'an' in the variable
console.log(fruit.indexOf('v')); //prints number of 'v' in the variable
console.log(fruit.slice(1, 5)); //cuts the variable
console.log(fruit.replace('Ban', '123')); //replaces portion of the variable
console.log(fruit.toUpperCase() + 'S!'); //makes upper case and adds S!
console.log(fruit.toLowerCase()); //makes lower case
console.log(fruit.charAt(2)); // finds the character at 2
console.log(fruit[2]); // same as above
console.log(fruit.split(',')); // split by a comma
console.log(fruit.split('')); //split by character since there is no comma

// Array
let fruits = ['banana', 'apple', 'orange', 'pear']; // setting values in an array
fruits = new Array('banana', 'apple', 'orange', 'pear'); // same as above

console.log(fruits[3]); // accessing values in an arry 0,1,2,3

fruits[0] = 'plum'; //changed the value of 0
console.log(fruits[0]);

for (let f = 0; f < fruits.length; f++) {
    console.log(fruits[f]);
}


// array common methods

console.log('to string', fruits.toString());
console.log(fruits.join(', '));
console.log(fruits.pop(), fruits); // removes last item
console.log(fruits.push('peaches'), fruits); //appends/adds items
console.log(fruits[4]); 
fruits[fruits.length] = 'new fruit'; //sames as fruits.push
console.log(fruits);
fruits.shift(); // remove first element from a array
console.log(fruits);
fruits.unshift('kiwi'); // add first element to an array
console.log(fruits);

let vegetables = ['tomato', 'broccoli', 'green beans']; // new array
let allGroceries = fruits.concat(vegetables); // adds a string concantanation of vegetables to fruits
console.log(allGroceries); // prints the full array of fruits and vegetables
console.log(allGroceries.slice(1, 4)); // sclies array entries 
console.log(allGroceries.reverse()); // reverses the array
console.log(allGroceries.sort());

let someNumbers = [5, 10, 20, 25, 6, 7, 88, 234, 1, 2];
console.log(someNumbers.sort(function(a, b) {return a-b})); // sorted in ascending order
console.log(someNumbers.sort(function(a, b) {return b-a})); // sorted in descending order

let emptyArray = new Array(); // creates empty array
for (let num = 0; num <= 10; num++) { // for loop
    emptyArray.push(num); // keeps adding numbers to the array
}

console.log(emptyArray);


// Objects in JavaScript. Dictionaries in Python

let student = {
    first: 'Stephen', 
    last: 'Smithgall', 
    age:27, 
    height:170,
    studentInfo: function (){
        return this.first + '\n' + this.last + '\n' + this.age + '\n' + this.height;
    }
};

/*
console.log(student.first);
console.log(student.last);
student.first = 'notStephen';
console.log(student.first);
student.age++;
console.log(student.age);
student.age++;
console.log(student.age);
*/

console.log(student.studentInfo());

// Conditionals, Control Flows (If Else Statements)
// 18 to 35 is my target demographic
// && AND
// || OR

/*

let age = prompt('What is your age?'); //prompt for your age

if ((age >= 18) && (age <= 35) ) {  //if age is between 18-35
    status = 'target demo'; //then you are in the target demographic
    console.log(status); //print the target demo string
}   else {
    status = ' not my audience'; // if not then print this string
    console.log(status);
}

*/

// Switch statements
// how differentiate between weekday vs. weekend
// Day 0 Sunday -->
// Day 6 Saturday -->
// Day 4 Thursday --> weekday


switch (4) {
    case 0:
        text = 'weekend';
        break;
    case 5:
        text = 'weekend';
        break;
    case 6:
        text = 'weekend';
        break;

    default:
        text = 'weekday';
}

console.log(text);