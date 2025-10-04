/*
 * events.html
 *
 * This program illustrates how to set up a simple event handler (key presses, mouse moves and timers)
 * To illustrate this, we will use the "keypress" and "mousemove" events for the document object
 * which represents the browser window. The document object has an 'keypress' event, and 
 * we can set that event to automatically call upon our own custom function. Repeat for 'mousemove' event and
 * for a timer. This example also illustrates using a global variable within the application to count
 * the number of key presses that have occured since the program was executed. Ideally, this would be 
 * connected to a database for long term storage if such information was important for your system's needs.
 */

var countOfKeypresses = 1;	// count how many events have been triggered (global variable)
var countOfSeconds = 1;

// define event handler for keypress event

function handle_keypress(e) {
	console.log ("keypress: " + countOfKeypresses++ + " key: " + e.keyCode); // increment keypress count
}

// define event handler for mouse movement event
function handle_mousemove(e) {
	console.log ("mouse coordinates [" + e.clientX + "," + e.clientY + "]");	
}

// define one shot Timer event
function handle_five_seconds() {
	console.log ("five seconds have elapsed!");
}

function handle_one_second() {
	console.log ("seconds: " + countOfSeconds++);
}


// This is our main() function

function main()
{
	console.log ("Hello events.js");
	console.log ("Press any key or move your mouse - watch the data in the console log display");

	document.addEventListener("keypress", handle_keypress, false);
	document.addEventListener("mousemove", handle_mousemove, false);
	setTimeout (handle_five_seconds, 5000);
	setInterval (handle_one_second, 1000);
}


// execute

main();
