/*
 * months.js
 *
 * This program showcase the creation of an array of constant strings, and output them
 * to illustrate that arrays can be built of any of our primitive data types
 */


// create constant array of month names

const months = [ "January", "February", "March", "April", "May", "June",
	"July", "August", "September", "October", "November", "December" ];



// This is our main() function

function main()
{
	console.log ("Hello months.js");

	let x;

	for (x = 0; x < 12; x++) {
		console.log (months[x]);
	}

	// now use the length property of the months array

	for (x = 0; x < months.length; x++) {
		console.log (months[x]);
	}
}


// execute

main();
