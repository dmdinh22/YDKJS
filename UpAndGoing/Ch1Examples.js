// EXPRESSIONS
a = b*2;

alert(a);

// CONSOLE EXERCISES
a = 21;
b = a*2;
console.log(b);  // 42
// returns undefined

// INPUT
age = prompt("Please tell me your age:");
console.log(age);

// OPERATORS
// ex 1
a = 2;
b = a+1;

// ex 2
var a = 20;

a = a+1;
a = a*2;

console.log(a);  // 42

// VALUES & TYPES
"I am a string";
'I am also a string';

42;

true;
false;

// CONVERTING TYPES (casting)
var a = "42";
var b = Number(a);

console.log(a);  // "42"
console.log(b);  // 42


// COMMENTS
var a = 42;  // 42 is the meaning of life

/*the following value is used because
  it has been shown that it answers every 
  question in the universe. */
var a = 42;

var a = /* arbitrary value */ 42;
console.log(a);  //42

// VARIABLES
var amount = 99.99;

amount = amount * 2; 

console.log(amount);  //199.98

// convert 'amount' to a string, and 
// add '$' to the beginning
amount = '$' + String(amount);

console.log(amount);  //"199.98"

// VAR EX
var TAX_RATE = 0.08;  // 8% sales tax
var amount = 99.99;

amount = amount*2;
amount = amount+(amount*TAX_RATE);

console.log(amount);  // 215.9784
console.log(amount.toFixed(2));  //"215.98"

// as of es6
const TAX_RATE = 0.08;
var amount = 99.99;

// BLOCKS
var amount = 99.99;

// general block
{
	amount = amount*2;
	console.log(amount);  //199.98
}

var amount = 99.99;

// is amount big enough?
if (amount>10) {	    // <-- block attached to "if"
	amount = amount*2;
	console.log;  // 199.98
}

// CONDITIONALS
var bank_balance = 302.13;
var amount = 99.99;

if (amount < bank_balance) {
	console.log("I want to buy this phone!")
}

const ACCESSORY_PRICE = 9.99;

var bank_balance = 302.13;
var amount = 99.99;

amount = amount * 2;

// can we afford the extra purchase?
if (amount < bank_balance) {
	console.log("I'll take the accessory!");
	amount = amount + ACCESSORY_PRICE;
}
// otherwise
else {
	console.log("No thanks.");
}

// LOOPS

// while
while (numOfCustomers > 0) {
	console.log("How may I help you?");

	// help the customer...
	
	numOfCustomers = numOfCustomers - 1;
}

// do while
do {
	console.log("How may I help you?");

	// help the customer...
	
	numOfCustomers = numOfCustomers - 1;
} while (numOfCustomers > 0);

// impractical loop
var i = 0;

// a "while true" loop would run until it's false - forever
while (true) {
	// stop the loop?
	if ((i <= 9) === false) {
		break;
	}

	console.log(i);
	i = i + 1;
}
// 0 1 2 3 4 5 6 7 8 9


// for loop 
for (var i = 0; i <=9; i = i+1) {
	console.log(i);
}
// 0 1 2 3 4 5 6 7 8 9


// FUNCTIONS

function printAmount() {
	conosle.log(amount.toFixed(2));
}

var amount = 99.99;

amount = amount * 2;

printAmount(); //"199.98"


// fn with param
function printAmount(amt) {
	console.log(amt.toFixed(2));
}

function formatAmount() {
	return "$" + amount.toFixed(2);
}

var amount = 99.99;

printAmount(amount*2); //"199.98"

amount = formatAmount();
console.log(amount);	//"$99.99"

// fn to organize code
const TAX_RATE = 0.08;

function calculateFinalPurchaseAmount(amt) {
	// calculate the new amount with the tax
	amt = amt + (amt * TAX_RATE);

	// return the new amount
	return amt;
}

var amount = 99.99;

amount = calculateFinalPurchaseAmount( amount );

console.log( amount.toFixed( 2 ) );	// "107.99"

// SCOPE
//
// different scopes
function one() {
	// this 'a' var only belongs to the one() fn
	var a = 1;
	console.log(a);
}

function two() {
	// this 'a' var only belongs to the two() fn
	var a = 2;
	console.log(a);
}

one();	//1
two();	//2

// nested scopes
function outer() {
	var a = 1;

	function inner() {
		var b = 2;

		// we can access both 'a' and 'b' here
		console.log(a+b);  // 3
	}

	inner();

	// we can only access 'a' here
	console.log(a);  // 1
}

outer();



