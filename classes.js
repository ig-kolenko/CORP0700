/*
 * classes.html
 *
 * This program will demonstrate some basic class concepts, both pre-defined classes
 * as well as custom classes with data members and class methods
 */


// define a class called Person with a number of properties (members)
// including a private member (radius)

class Circle {
	// class data members
	#radius;
	
	// class methods
	constructor (r = 1) {
		this.#radius = r;
	}
	getRadius() {				// example of a "getter" method
		return this.#radius;	
	}
	getDiameter() {
		return this.#radius * 2;	// diameter is double the radius
	}
	getCircumference() {
		return 2 * Math.PI * this.#radius; 	// formula: 2 pi r
	}
}


// This is our main() function

function main()
{
	// allocate (instantiate) variables based on class Circle

	var c1 = new Circle (5);		// circle has radius of 5 units
	var c2 = new Circle ();			// circle has default radius
	
	// output the Circle instances directly (JSON output)

	console.log ("\n\n\n");
	console.log (c1);
	console.log (c2);

	// remove the comments below and see the results

	//c1.#radius = 4;	// attempt to access private data member directly - exception!

	console.log ("\n\n\n");
	console.log ("c1 Radius: " + c1.getRadius());	
	console.log ("c1 Diameter: " + c1.getDiameter());
	console.log ("c1 Circumference: " + c1.getCircumference());

	console.log ("\n\n\n");
	console.log ("c2 Radius: " + c2.getRadius());	
	console.log ("c2 Diameter: " + c2.getDiameter());
	console.log ("c2 Circumference: " + c2.getCircumference());

	// on the fly data structures (JSON)

	var car = { make: "Ford", model: "F150", color: "Blue" };
	console.log ("\n\n\n");
	console.log ("My car is a " + car.color + " " + car.make + " " + car.model);
	console.log (car);

	// some fun with Math class

	var c = [];

	for (x = 0; x < 10; x++) {
		c[x] = Math.trunc ((Math.random() * 100) + 1);
	}
	console.log ("\n\n\n");
	console.table (c);

	// some fun with Date class

	var d1 = new Date();
	var d2 = new Date (2024, 1, 15, 3);
	var d3 = new Date ("January 15, 2024 11:15:22");

	console.log ("\n\n\n");
	console.log ("d1: " + d1);
	console.log ("d2: " + d2);
	console.log ("d3: " + d3);

	const days = [ "Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi" ];
	console.log (days[d3.getDay()]);
}


// execute

main();
