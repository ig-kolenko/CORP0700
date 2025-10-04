/*
 * time.js
 *
 * This program demonstrates developing a function with defaulted parameters
 */


// TODO: add any packages of interest



// TODO: add any global variables below (use keyword var to allocate them)



// function convert_HMS() will transform the Hours, Minutes and Seconds
// provided as paramters and return the equivalent fractional hour value
//
// The function has defaults of 0 for each of hour, minute and second.

function convert_HMS (h = 0, m = 0, s = 0)
{
	let fractional_time;

	fractional_time = h + m / 60 + s / 3600;

	return fractional_time;
}



// The main() function is our starting point for our application

function main()
{
	console.log ("Hello time.js");

	let t = 0;

	t = convert_HMS (3, 30, 44);
	console.log ("3h 30m 44s = " + t + " hours");

	t = convert_HMS (3, 5);
	console.log ("3h 5m = " + t + " hours");

	t = convert_HMS (1);
	console.log ("1h = " + t + " hours");

	t = convert_HMS ();
	console.log ("All defaults = " + t + " hours");
}


// execute main

main();
