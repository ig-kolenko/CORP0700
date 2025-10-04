/*
 * structure.html
 *
 * This program will demonstrate some basic data structure (class) concepts.
 */


// define a simple data structure class called Person with defaults

class Person {
	// data members
	firstname = "";
	lastname = "";
	address = "";
	age = 0;
	weight = 0;
	bankaccountvalue = 0;
}


// define a data structure called Human with a number of properties (members) including constructor
// and an output capability

class Human {
	// data members
	firstname;
	lastname;
	address;
	age;
	weight;
	bankaccountvalue;
	
	// constructor
	constructor (fn, ln, addr, a, w, b) {
		this.firstname = fn;
		this.lastname = ln;
		this.address = addr;
		this.age = a;
		this.weight = w;
		this.bankaccountvalue = b;
	}

	output() {
		console.log ("Human Class Output:");
		console.log ("  First Name: " + this.firstname);
		console.log ("  Last Name: " + this.lastname);
		console.log ("  Address: " + this.address);
		console.log ("  Age: " + this.age);
		console.log ("  Weight: " + this.weight);
		console.log ("  Bank Account Value: $" + this.bankaccountvalue);
		console.log ("\n\n\n");
	}
}



// helper function to output contents of the struct

function outputPerson (title, person)
{
	console.log (title);
	console.log ("First Name: " + person.firstname);
	console.log ("Last Name: " + person.lastname);
	console.log ("Address: " + person.address);
	console.log ("Age: " + person.age);
	console.log ("Weight: " + person.weight);
	console.log ("Bank Account Value: $" + person.bankaccountvalue);
	console.log ("\n\n\n");
}

// This is the main() function

function main()
{
	// allocate (instantiate) a variable called person based on class Person

	let person = new Person;

	// output default data from variable person

	outputPerson ("Default person data", person);

	// let's make the variable person useful by changing the member data

	person.firstname = "Joe";
	person.lastname = "Smith";
	person.address = "100 King St. Kitchener ON N2G 2F5";
	person.age = 33;
	person.weight = 150;
	person.bankaccountvalue = 2485;

	outputPerson ("After changing the person data members directly", person);

	// allocate a variable to maintain Sally Smith's details

	let person2 = new Person;

	person2 = { ...person };	// copy over Joe's details
	
	// update Sally's specifics (she lives at same address and has same last name as Joe)

	person2.firstname = "Sally";
	person2.age = 10;
	person2.weight = 80;
	person2.bankaccountvalue = 0;

	outputPerson ("The Smith Family details - Joe", person);
	outputPerson ("The Smith Family details - Sally", person2);

	// another means of initializing a data structure / class

	var person3 = { firstname:"Billy", lastname:"Bob", address:"25 Duke St. Waterloo ON N4S 7W6", 
		age:57, weight:193, bankaccountvalue:210 };

	outputPerson ("Our 3rd person via JSON object", person3);

	// another means of initializing a data structure / class

	var person4 = { first:"Billy", last:"Bob", address:"11 Water St. Hamilton ON L5J 2Z3", 
		age:32, weight:143, bankaccountvalue:7654 };

	outputPerson ("Our 4rd person via JSON object - what went wrong?", person4);

	// allocate (instantiate) a variable called person based on class Person

	var p = new Human ("Jane", "Jones", "55 Queen St. Cambridge ON N3W 1Q5", 26, 120, 32856);

	// use the member function output from variable p

	p.output();

	// why does this work with the Human class?

	outputPerson ("using our structure output function for variable p - why does this work?", p);
}


// execute

main();

