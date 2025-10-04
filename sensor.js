
/*
 * sensor.js
 *
 * This program will showcase some basic array data processing techniques
 *
 * We will populate an array, then iterate through to compute averages, high and low values in array.
 * The use of constants will allow us to easily adjust number of data items - making code maintenance simple!
 */


// This function will simulate reading a fictitious sensor using random number generation

function read_sensor (sensor_number)
{
	// simulate a sensor reading through a random number between 0 and 100
	// Math.random() returns a randomized fraction from 0.0 up to (but not including) 1.0
	
	return Math.random() * 100;
}

// This function will simulate waiting for some time period (but does nothing)

function wait (num_minutes)
{
	// simulate waiting num_minutes
	// here we'll just do nothing
}


// This is the main() function

function main()
{
	console.log ("Hello sensor.js");

	let temperature = [];		// array for temperature readings
	let x;				// loop control variable
	const MAX_READINGS = 8;		// number of readings
	const TIME_DELAY = 60;		// time delay in minutes before next reading

	// collect our readings over one shift

	for (x = 0; x < MAX_READINGS; x++) {
		temperature[x] = read_sensor (1);
		wait (TIME_DELAY);
	}

	// output all our readings visually

	for (x = 0; x < MAX_READINGS; x++) {
		console.log (temperature[x]);
	}

	// compute our statistics

	let sum = 0;
	let average = 0;
	let high = 0;
	let low = 100;

	for (x = 0; x < MAX_READINGS; x++) {
		sum = sum + temperature[x];
		if (temperature[x] > high) {
			high = temperature[x];
		}
		if (temperature[x] < low) {
			low = temperature[x];
		}
	}

	average = sum / MAX_READINGS;

	// output stats

	console.log ("Average temperature over shift: " + average);
	console.log ("Highest temperature over shift: " + high);
	console.log ("Lowest temperature over shift: " + low);
}


// execute

main();
