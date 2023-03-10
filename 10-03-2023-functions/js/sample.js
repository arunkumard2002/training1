/**
 * Primitive Datatypes 
 * we have discussed on 
 * Strings
 * Number
 * Undefined
 * null
 * Boolean = true or false flag
 * */

/**
 * Non Primitive DataType
 * 1. Arrays
 * 2. Objects
 * 3. Functions
 */
/**
 * javascript reserved keywords
 * https://www.w3schools.com/js/js_reserved.asp
 */

// named function
// syntax of a function is

/**
 * function is a keyword
 * the funname is a function name
 * () are called paranthesis
 * {} are called curly brased and our code logic relies under 
 * this code block and add semi colon for code termination
 * what ever the code we add inside the paranthesis it should be
 * in comma seperated, and the passing values in paranthesis
 * are called parameters. example: p1
 * @param {string} p1 
 */
function funname(p1){
    let myname = 'arun';
    console.log(p1);
    console.log(myname);
};
// execution of a function
funname();

// function express
let hi = function() {
    console.log('Hi ....');
}

hi();
let names;
// IIFE (Immediate invoke function exection)
(function() {
    names = 'arun';
    console.log("IIFE function is executed");
})()

console.log(names);

// arrow function
let arrowFn = () => {
    console.log('This is an arrow function')
}
arrowFn();

/**
 * Higher order function
 */

let highOrderFn = function(callback, value){
    debugger;
    return callback(value);
}

let callback = highOrderFn(funname, 'This is higher order functio');

/**
 * Closure function means having a function inside main function and returning
 * back that inside function outside.
 * @returns function
 */
let outerFn = function() {
    let myname = 'arun';
    let innerFn = () => {
        console.log(myname);
    }
    return innerFn;
}

let innerFn = outerFn();

/**
 * In JavaScript you cannot use these reserved words as variables, labels, or function names:
abstract	arguments	await*	boolean
break	byte	case	catch
char	class*	const	continue
debugger	default	delete	do
double	else	enum*	eval
export*	extends*	false	final
finally	float	for	function
goto	if	implements	import*
in	instanceof	int	interface
let*	long	native	new
null	package	private	protected
public	return	short	static
super*	switch	synchronized	this
throw	throws	transient	true
try	typeof	var	void
volatile	while	with	yield
 */
