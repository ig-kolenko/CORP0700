/*
 * nfactorial.js
 *
 * This program computes the N! result for value N
 */


// TODO: add any packages of interest



// TODO: add any global variables below (use keyword var to allocate them)



// The n_factorial function will compute the N! result for parameter n

function n_factorial (n)
{
	let p = 1;		// minimum factorial is 1
	let x;

	for (x = 2; x <= n; x++) {
		p = p * x;	// perform factorial operation here
	}

	return p;
}

// The main() function is our starting point for our application


function main()
{
	console.log ("Hello n_factorial.js");

	let x = 0;
	let r = 0;

	for (x = 1; x <= 10; x++) {
		r = n_factorial (x);
		console.log (x + "! = " + r);
	}
}


// execute main

main();
