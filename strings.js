/*
 * strings.js
 *
 * This program will showcase a number of basic capabiilties with JavaScript strings
 * and some console output techniques for arrays and matrices.
 */



// The main() function is our starting point for our application

function main()
{
	// output the length of string s
	let s = "hello";
	let len = s.length;
	console.log ("original string s:", s);
	console.log ("length of s:", len);

	// a loop to output each character of the string, one character per line using at() function
	for (let x = 0; x < len; x++) {
		console.log (x, s.at (x));
	}

	// manipulate the string - for example, make the 2nd character of the string upper case
	s = s[0] + s[1].toUpperCase() + s.substring (2);
	console.log ("manipulated string s:", s);


	// show how length works for arrays too
	let a = [ 5, -3, 2, 7 ];
	len = a.length;

	console.log ("length of a:", len);
	for (x = 0; x < len; x++) {
		console.log (x, a[x]);
	}

	// output the ASCII value of the first character of the string
	s = "ABC";
	console.log ("s at offset 0:", s.charCodeAt (0));

	// convert an array of ASCII value data into a string
	let data = [65, 66, 67, 48, 49, 50 ];
	s = String.fromCharCode (...data);
	console.log ("s created from an array of ASCII bytes", s);

	// showcase console output and templated strings

	x = 5; y = 3; z = x * y;
	s = `x: ${x} y: ${y} zs: ${z} `;
	let b = [ [ 1, 2, 3 ], [4, 5, 6 ], [3, 6, 9 ] ];

	console.table (a);	// output a highly readable tabulated view of array 
	console.table (b);	// output a matrix in console view
	console.log ("templated string s", s);	// output the templated string
}



// execute main

main();
