/*
 * tictactoe.html
 *
 * This program showcase the creation of an array of arrays (matrix) to represent a tic tac toe boad.
 * The matrix is 3 x 3 - 3 rows, 3 columns.
 * This also showcases some common techniques to ouptut matrix style data
 */


// TODO: implement this function

// function output_board (board);
//
// This function will output a 3 x 3 tic tac toe board
// using the parameter board to represent the matrix of data

function output_board (board)
{
}


// This is our main() function

function main()
{
	let tictactoe = [ [ "_", "_", "_" ], [ "_", "_", "_" ], [ "_", "_", "_" ] ];

	// put an X in the middle square

	tictactoe[1][1] = "X";

	let row = 0, col = 0; 		// allocate row and column loop counters

	// output tic tac toe board - TODO: update this to use the output_board() function

	let s;

	for (row = 0; row < 3; row++) {
		s = "";			// set up for next row of output
		for (col = 0; col < 3; col++) {
			s = s + tictactoe[row][col] + " ";	// build tic tac toe board data and a space
		}
		console.log (s);	// output row
	}
	console.log ("\n\n\n");		// leave a few blank lines before next output

	// fill the 3rd column with O

	for (row = 0; row < 3; row++) {
		tictactoe[row][2] = "O";	// column 2 is the 3rd column
	}

	// output tic tac toe board - TODO: update this to use the output_board() function

	for (row = 0; row < 3; row++) {
		s = "";			// set up for next row of output
		for (col = 0; col < 3; col++) {
			s = s + tictactoe[row][col] + " ";	// build tic tac toe board data and a space
		}
		console.log (s);	// output row
	}
	console.log ("\n\n\n");		// leave a few blank lines before next output

	// here's what the console shows when you try to output the array directly - can you make sense of this?

	console.log (tictactoe);
}


// execute

main();

