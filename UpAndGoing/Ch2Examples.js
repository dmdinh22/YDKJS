// VALUES & TYPES
//
var a; 		
typeof a;	// "undefined"

a = "hello world";
typeof a;	// "string"

a = 42;
typeof a;	// "number"

a = true;
typeof a;	// "boolean"

a = null;
typeof a;	// "object" -- weird, bug

a = undefined;
typeof a;	// "undefined"

a = { b: "c" };
typeof a;	// "object"

// OBJECTS
//
//ex 1
var obj = {
	a: "hello world",
	b: 42,
	c: true
};

obj.a;		// "hello world"
obj.b;		// 42
obj.c;		// true

obj["a"];	// "hello world"
obj["b"];	// 42
obj["c"];	// true

// ex 2 - key stoed in another variable
var obj = {
	a: "hello world",
	b: 42
};

var b = "a";

obj[b];		// "hello world"
obj["b"];	// 42

// ARRAYS 
//
var arr = [ "hello world", 42, true ];


arr[0];		// "hello world"
arr[1];		// 42
arr[2];		// true
arr.length;	// 3

typeof arr;	// "object"


// FUNCTIONS
//
function foo() {
	return 42;
}

foo.bar = "hello world";

typeof foo;		// "function"
typeof foo();		// "number"
typeof foo.bar;		// "string"

// BUILT-IN TYPE METHODS
//
var a = "hello world";
var b = 3.14159

a.length;		// 11
a.toUpperCase();	// "HELLO WORLD"
b.toFixed(4);		// "3.1416"

// COMPARING VALS
//

// explicit casting
var a = "42";

var b = Number(a);

a;	// "42"
b;	// 42 -- the number!

// implicit casting
var a = "42"
var b = a * 1; // "42" implicitly casted to 32 here

a;	// "42"
b;	// 42 - int!

// TRUTHY & FALSY
//
// "falsy" values
"" // empty string
0, -0, NaN // invalid number
null, undefined
false

// "truthy" values
"hello"
42
true
[], [1,"2", 3] // arrays
{} { a: 42 } // objects
function foo() { .. } // functions

// EQUALITY
//
==, ===, !=, !==

// implicit casting
var a = "42";
var b = 42;

a == b;		// true - not strict, doesn't check against type
a === b;	// false - strict - checks against type

// array default casts to strings
var a = [1,2,3];
var b = [1,2,3];
var c = "1,2,3";

a == c;		// true
b == c;		// true
a == b;		// false

// INEQUALITY
var a = 41;
var b = "42";
var c = "43";

a < b;		// true
b < c;		// true

// GOTCHA - comparisons between potentially different types

var a = 42;
var b = "foo";

a < b;		// false
a > b;		// false
a == b;		// false -- all cases the b value is coerced to NaN

// VARIABLES
// An identifier must start with a-z, A-Z, $, or _. It can then contain any of those characters plus the numerals 0-9.
// Words that cannot be used as variables, but OK for property names (reserved words)
	//include the JS keywords (for, in, if, etc.) as well as null, true, and false.

//FUNCTION SCOPES
//

// Hoisting - when a var declaration is conceptually "moved" to top of its enclosing scope


var a = 2;

foo();			// works because `foo()`
				// declaration is "hoisted"

function foo() {
	a = 3;

	console.log( a );	// 3

	var a;		// declaration is "hoisted"
				// to the top of `foo()`
}

console.log( a );	// 2
// not a good idea to rely on variable hoisting to use a variable earlier 
// in scope than its var declaration appears. more common and accepted to 
// use hoisted function declarations, ie foo() call appearing before declaration


// NESTED SCOPES

function foo() {
	var a = 1;

	function bar() {
		var b = 2;

		function baz() {
			var c = 3;

			console.log( a, b, c );	// 1 2 3
		}

		baz();
		console.log( a, b );		// 1 2
	}

	bar();
	console.log( a );				// 1
}

foo();


// access var's value in scope where it's not available

function foo() {
	a = 1;	// a is not formally declared
}

foo();
a;		// 1 -> oops!! automatically a global variable :(

// declare vars to belong to individual blocks using "let" keyword

function foo() {
	var a = 1;

	if (a >= 1) {
		let b = 2;

		while (b < 5) {
			let c = b * 2;
			b++;

			console.log( a + c );
		}
	}
}

foo();
// 5 7 9



// CONDITIONALS

// if else
if (a == 2) {
	// do something
}
else if (a == 10) {
	// do another thing
}
else if (a == 42) {
	// do yet another thing
}
else {
	// fallback to here
}

// switch case
switch (a) {
	case 2:
		// do something
		break;
	case 10:
		// do another thing
		break;
	case 42:
		// do yet another thing
		break;
	default:
		// fallback to here
}

//  using break to only have one case to run
switch (a) {
	case 2:
	case 10:
		// some cool stuff
		break;
	case 42:
		// other stuff
		break;
	default:
		// fallback
}

// TERNARY OPERATOR - one liners for if/else
var a = 42;

var b = (a > 41) ? "hello" : "world";

// similar to:

// if (a > 41) {
//    b = "hello";
// }
// else {
//    b = "world";
// }


// STRICT MODE
// // Individual function
function foo() {
	"use strict";

	// this code is strict mode

	function bar() {
		// this code is strict mode
	}
}

// this code is not strict mode


// // whole file
"use strict";

function foo() {
	// this code is strict mode

	function bar() {
		// this code is strict mode
	}
}

// this code is strict mode


// // disables implicit auto-global variable declaration from omitting the var
function foo() {
	"use strict";	// turn on strict mode
	a = 1;			// `var` missing, ReferenceError
}

foo();
