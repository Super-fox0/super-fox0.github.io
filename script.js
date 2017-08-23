"use strict";

function heroTable() {
	// set json url and maek a request object
	var requestURL = 'https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/example.json';
	var request = new XMLHttpRequest();
	//send a get request to fill object with json file data
	request.open('GET', requestURL);
	request.responseType = 'json';
	request.send();
	// run this function when you get a response
	request.onload = function () {
		var requestData = request.response;
		//write out squad details to some shitty table
		document.getElementById('sn1').innerHTML = (requestData['squadName']);
		document.getElementById('ht1').innerHTML = (requestData['homeTown']);
		document.getElementById('f1').innerHTML = (requestData['formed']);
		document.getElementById('sb1').innerHTML = (requestData['secretBase']);
		document.getElementById('a1').innerHTML = (requestData['active']);
		// make some variables to hold each hero - shit way to do it
		var myh1 = document.createElement('h3');
		var myh2 = document.createElement('h3');
		var myh3 = document.createElement('h3');
		var z = 0; //number for changing myArray index

		var myArray = [myh1, myh2, myh3]; //array to hold hero text crap
		var heroHolder = requestData.members.length; //gets the number of heroes
		for (i = 0; i < heroHolder; i++) {
			// interate through heroes and write out attributes
			myArray[z].textContent = requestData.members[i].name;
			myArray[z].textContent = myArray[z].textContent + " " + requestData.members[i].age + " ";
			myArray[z].textContent = myArray[z].textContent + " " + requestData.members[i].secretIdentity;

			//get powers and add to bottom of attributes
			var powerHolder = requestData.members[i].powers.length;
			for (x = 0; x < powerHolder; x++) {
				myArray[z].textContent = myArray[z].textContent + " | " + requestData.members[i].powers[x] + " | ";
			}
			document.getElementsByTagName('body')[0].appendChild(myArray[z]); //write to webpage
			z++; //increment myArray index to cycle the next hero
		}
	}


}


function hero2() {
	// set json url and maek a request object
	var requestURL2 = 'https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/example.json';
	var request2 = new XMLHttpRequest();
	//send a get request to fill object with json file data
	request2.open('GET', requestURL);
	request2.responseType = 'json';
	request2.send();
	// run this function when you get a response
	request2.onload = function () {
		var requestData2 = request.response;
	}

}

function arrayString1() {
	var array1 = ["text1", "text2", "text3"]; //make array
	for (var i = 0; i < array1.length; i++) { //iterate through array
		console.log(array1[i]); //print array
	}
	array1.push("new Text bitch"); //add new array element to end
	console.log(" ");
	for (var z = 0; z < array1.length; z++) { //iterate
		console.log(array1[z]); //print
	}
	array1.splice(-1, 1) //remove last element
	console.log(" ");
	for (var c = 0; c < array1.length; c++) { //iterate
		console.log(array1[c]); //print
	}
}

function concatString() {
	var string1 = "blik";
	var number1 = 1;
	string1 = string1 + 1;
	console.log(string1);
}

function functions1(p1) {
	return p1 * p1;
}

function functions2(p1, p2, p3) {
	return p1 + p2 + p3;
}

// Functions test
console.log(functions1(3));
console.log(functions2(1, 2, 3));
var person = {
	name: "John",
	age: 50,
	occupation: "builder"
};
console.log(person.name, person.age, person.occupation);
person.name = "joe";
person.age = 21;
person.occupation = "bricklayer";
console.log(person.name, person.age, person.occupation);

function functions3() {
	person.age++;
	console.log(person.name, person.age, person.occupation);
}

function functions4() {
	var firstName = document.getElementById("form1").elements['fname'].value;
	var lastName = document.getElementById("form1").elements['lname'].value;
	var occupation = document.getElementById("form1").elements['occu'].value;

	var personx = {
		n: firstName,
		l: lastName,
		o: occupation
	};
	console.log(personx.n, personx.l, personx.o);
}

function makeParagraph() {
	var para = document.createElement("P") //make p tag
	var text = document.createTextNode("text for paragraph"); //text holder
	para.setAttribute("id", "p1"); // set p id
	para.appendChild(text); // set p text
	document.body.appendChild(para); // add to body
}

function changeText() {
	var textBox = document.getElementById("textArea"); //get text box
	var textholder = document.createTextNode(textBox.value); // get text from text box
	var para = document.getElementById("p1"); //get paragraph
	para.innerHTML = "";
	para.appendChild(textholder); //write to paragraph
	document.body.appendChild(para); //print paragraph
	document.get
}

function removePara() {
	var para1 = document.getElementById("p1") //get p element
	para1.parentNode.removeChild(para1); // remove p element
}

function convertToUpper() {
	var string = "He said \"My name is Elliot\"";
	console.log(string);
	string = string.toUpperCase();
	console.log(string);
}

function conditionals1(age) {
	if (age < 20 || age > 40) {
		return false;
	} else {
		return true;
	}
}

function iteration1() {
	for (var i = 0; i < 10; i++) {
		console.log(i);
	}
}

function iteration2() {
	for (var i = 0; i < 10; i++) {
		if ((i % 2) === 0) {
			console.log(i);
		} else {

		}

	}
}

function fizzBuzz() {
	for (var i = 0; i < 100; i++) {
		if ((i % 3) === 0 && (i % 5) === 0) {
			console.log("Fizz Buzz");
		} else {
			if ((i % 5 === 0)) {
				console.log("Buzz");
			} else {
				if ((i % 3) === 0) {
					console.log("fizz");
				} else {
					console.log(i);
				}
			}
		}
	}
}

function iteration4(num) {
	var original = num;
	var plus1 = num;
	var neg1 = num;

	while (original != 1) {
		
		if ((original % 3) === 0) // check if orig divisible by 3
		{
			original = original / 3;
			console.log("divided by 3: " + original);
			plus1 = original;
			neg1 = original;
		}
		if ((plus1 % 3) === 0) //check if plus1 is divis by 3
		{
			original = plus1 / 3; //change orig to plus1 result
			plus1 = original; //set new plus1 value
			console.log("added 1 :" + plus1);
		}
		if ((neg1 % 3) === 0) //check if neg1 is divis by 3
		{
			original = neg1 / 3; // change orig to neg1 result
			neg1 = original; //set new neg1 value 
			console.log("subtracted 1: " + neg1);
		}
		plus1++; //add 1
		neg1--; // remove 1
	}
}

function strings4() {

}
