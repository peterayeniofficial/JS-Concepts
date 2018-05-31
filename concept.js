/* Mastering Javascript Concepts, My Note */

// Closure

function multiplier(factor){
    return number => number * factor;
}

// function call

let twice = multiplier(2);
console.log(twice(5));
// result 10

/* Understanding Recursive function */

function power(base, exponent){
    if (exponent == 0){
        return 1;
    }else {
        return base * power(base, exponent - 1);
    }
}

// function call
console.log(power(2, 3));


/* Understading this is in an a normal function and arrow function */

// This in a normal function
/* in the normal usage the value of this is in the global context 
which set the value of scoop to NAN or Undfined */

// constructor
function IceCream(scoop){
    this.scoop = 0;
}

IceCream.prototype.addScoop = function (){
    setTimeout(function(){
        this.scoop++;
        console.log("Scoop Added");
    }, 500);
};

// function call
desert = new IceCream()
desert.addScoop()

// this fix using closure

// constructor
function NewIceCream(scoop){
    this.scoop = 0;
}

NewIceCream.prototype.addNewScoop = function(){
    const cone = this;
    setTimeout(function(){
        cone.addNewScoop++;
        console.log("New Scoop Added")
    }, 500);
};

// this fix using Arrow Function Expression 

// constructor
function MakeIceCream(scoop){
    this.scoop = 0;
}

MakeIceCream.prototype.makeScoop = function(){
    setTimeout(()=>{
        this.scoop++;
        console.log("I have just make a new Ice Cream!");
    }, 500);
};

anotherIceCream = new MakeIceCream();
anotherIceCream.makeScoop();

/* Default structure and Destructuring Array */

function createGrid([width = 3, height = 4] = []){
    return `Generates a ${width} and ${height} grid`;
}

/* Default and Destructuring Object */

function createSundae({scoops = 1, toppings = ['Hot Source']} = {}){
    const scoopText = scoops === 1 ? 'scoop' : 'scoops';
    return `Your Sundae as ${scoops} ${scoopText} with ${toppings.join(' and ')} toppings` 
}

function buildHouse({floors = 1, color = 'red', walls = 'brick'} = {}){
    return `Your house has ${floors} floor(s) with ${color} ${walls} walls.`
}

/* Class in JS */

class Desert {
    constructor(calories = 250) {
        this.calories = calories;
    }
}

class IceCream extends Desert{
    constructor(flavour, calories, toppings = []){
        super(calories);
        this.flavour = flavour;
        this.toppings = toppings;

    }
    addTopping(topping){
        this.toppings.push(topping);
    }
}

/* Write a function min that takes two arguments 
and returns their minimum.
*/

function min(firstNumber, secondNumber){
    if (firstNumber < secondNumber){
        return firstNumber;
    }else {
        return secondNumber;
    }
}

// function call
console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10

/*
Define a recursive function isEven corresponding to this description. T
he function should accept a single parameter (a positive, whole number) and return a Boolean.

Test it on 50 and 75. See how it behaves on -1. Why? Can you think of a way to fix this?
Zero is even.

One is odd.

For any other number N, its evenness is the same as N - 2.

*/


// Your code here.


console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → ??


/*
You can get the Nth character, or letter, from a string by writing "string"[N]. 
The returned value will be a string containing only one character (for example, "b"). 
The first character has position 0, which causes the last one to be found at position 
string.length - 1. In other words, a two-character string has length 2, and its characters 
have positions 0 and 1.

Write a function countBs that takes a string as its only argument and returns a number 
that indicates how many uppercase “B” characters there are in the string.

Next, write a function called countChar that behaves like countBs, except it takes a s
econd argument that indicates the character that is to be counted (rather than counting only 
uppercase “B” characters). Rewrite countBs to make use of this new function.

*/

// Your code here.

console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4
