/*
 * sensor_async.html
 *
 * This program will showcase some basic array data processing techniques using timers to simulate
 * asynchronous sensor event processing.
 *
 * We will populate an array, then iterate through to compute averages, high and low values in array.
 * The use of constants will allow us to easily adjust number of data items - making code maintenance simple!
 *
 * Note the architectural differences in how we fill the array - rather than nested loops, we 
 * track the next element of the array to fill using global variables representing the day and reading
 * variables to manage the population of the matrix. 
 *
 * This example will also illustrate the use of a timer / interval ID to help manage turning off
 * an existing timer once it's started.
 */


/*
 * global data
 */

var temperature = [
	[0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0],

];		// array for temperature readings

// some useful constants

const TIME_DELAY = 100;		// time delay in milliseconds before next reading
const MAX_READINGS = 8;		// number of readings per day
const NUM_DAYS = 5;		// how many days worth of readings

// manage the insertion into the temperature matrix using the day and reading variables

var day = 0;
var reading = 0;

// use this to track our timer used for periodic processing

var intervalID = 0;			


/*
 * function read_sensor (sensor_number);
 *
 * Purpose: simulate reading from a sensor, using a random number simulation
 */

function read_sensor (sensor_number)
{
	// simulate a sensor reading through a random number between 0 and 100
	// Math.random() returns a randomized fraction from 0.0 up to (but not including) 1.0
	
	return Math.random() * 100;
}


/*
 * function populate_temperature_table()
 *
 * Purpose: This function will be called upon whenever our timer interval has elapsed
 *          which simulates periodic event processing of IoT data. Note the use of the global
 *          variables day and reading to track which of our temperature matrix elements needs to be 
 *          filled with the next available reading. Instead of the polling code running through a 
 *          loop to fill data and then "delay" (which actually isn't supported in a browser
 *          the way normal console environments work), we instead track which row/col of the matrix
 *          is being used to fill, and then adjusting the row/col as each row is completed. Once
 *          all rows have been filled, we trigger the output of the sensor data and stop our interval
 *          timer using the interval ID obtained when we registered the interval originally.
 */

function populate_temperature_table() {
	console.log ("reading temperature!");
	if (day < NUM_DAYS) {
		temperature[day][reading] = read_sensor (1);
		reading++;
		if (reading >= MAX_READINGS) {
			reading = 0;
			day++;
		}
	} else {
		output_results();
		console.log ("turning off timer!");
		clearInterval (intervalID);	// we're done, stop periodic processing
	}
}


/*
 * function output_results()
 *
 * Purpose: This function outputs the data collected via the simulated sensor readings
 *          done on a time interval. 
 */

function output_results()
{
	// output all our readings visually

	let x = 0, y = 0;

	for (y = 0; y < NUM_DAYS; y++) {
		console.log ("Day " + y);
		for (x = 0; x < MAX_READINGS; x++) {
			console.log ("   " + temperature[y][x]);
		}
		console.log ("\n\n");
	}


	// compute our statistics

	let sum = 0;
	let average_week = 0;
	let average = new Array (NUM_DAYS);
	let high = new Array (NUM_DAYS);
	let low = new Array (NUM_DAYS);

	average.fill (0);	// fill average array with 0 as daily average
	high.fill (0);		// fill high array with 0 as maximum daily temp initially
	low.fill (100);		// fill low array with 100 as minimum daily temp initially

	for (y = 0; y < NUM_DAYS; y++) {
		sum = 0;
		for (x = 0; x < MAX_READINGS; x++) {
			sum = sum + temperature[y][x];
			if (temperature[y][x] > high[y]) {
				high[y] = temperature[y][x];
			}
			if (temperature[y][x] < low[y]) {
				low[y] = temperature[y][x];
			}
		}

		average[y] = sum / MAX_READINGS;
	}

	// output stats

	for (y = 0; y < NUM_DAYS; y++) {
		console.log ("Statistics for day " + y);
		console.log ("  Average temperature over shift: " + average[y]);
		console.log ("  Highest temperature over shift: " + high[y]);
		console.log ("  Lowest temperature over shift: " + low[y]);
		console.log ("\n\n");
	}

	// compute weekly average temp

	sum = 0;
	for (y = 0; y < NUM_DAYS; y++) {
		sum = sum + average[y];
	}

	average_week = sum / NUM_DAYS;
	console.log ("Average for week: " + average_week);
	console.log ("\n\n");
}


// This is our main() function

function main()
{
	console.log ("Hello sensor_async.js");

	// set up our event handler to fill the temperature table until full

	console.log ("Starting timer ...");
	intervalID = setInterval (populate_temperature_table, TIME_DELAY);
}


// execute

main();
