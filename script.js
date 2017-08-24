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
		for (var i = 0; i < heroHolder; i++) {
			// interate through heroes and write out attributes
			myArray[z].textContent = requestData.members[i].name;
			myArray[z].textContent = myArray[z].textContent + " " + requestData.members[i].age + " ";
			myArray[z].textContent = myArray[z].textContent + " " + requestData.members[i].secretIdentity;

			//get powers and add to bottom of attributes
			var powerHolder = requestData.members[i].powers.length;
			for (var x = 0; x < powerHolder; x++) {
				myArray[z].textContent = myArray[z].textContent + " | " + requestData.members[i].powers[x] + " | ";
			}
			document.getElementsByTagName('body')[0].appendChild(myArray[z]); //write to webpage
			z++; //increment myArray index to cycle the next hero
		}
	}


}

function kings() {
	//var x = "Cnut";
	// set json url and maek a request object
	var requestURL2 = 'https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/kings.json';
	var request2 = new XMLHttpRequest();
	//send a get request to fill object with json file data
	request2.open('GET', requestURL2);
	request2.responseType = 'json';
	request2.send();
	// run this function when you get a response
	request2.onload = function () {
		var requestData2 = request2.response; //get the data in here

		var h11 = document.createElement('h1'); //create element
		h11.setAttribute('style', 'white-space: pre;');
		var kingNumber = requestData2.length; //get length of king array


		//console.log(kingNumber);
		var x = document.getElementById("kingBox").value;
		console.log(x);
	//	console.log(requestData2[0].hse.includes(stringHolder));
		var stringBuilder= "";

		for (var i = 0; i<kingNumber; i++) { //iterate through all kings
            if (requestData2[i].nm.includes(x)) { //compare x with name
				//h11.textContent =JSON.stringify(requestData2[i], null, 2);
				stringBuilder = stringBuilder + " " + JSON.stringify(requestData2[i], null, 2) + "\r\n" ; 
				//console.log(stringBuilder);
			}

			if (requestData2[i].cty.includes(x)) { //compare x with name
				//h11.textContent = stringBuilder;
				stringBuilder = stringBuilder + " " + JSON.stringify(requestData2[i], null, 2) + "\r\n" ; 
				//document.getElementsByTagName('body')[0].appendChild(h11); 
			}
			//if (x === requestData2[i].hse)
			if (requestData2[i].hse.includes(x)) { //compare x with name
				//h11.textContent =JSON.stringify(requestData2[i], null, 2);
				stringBuilder = stringBuilder + " " + JSON.stringify(requestData2[i], null, 2) + "\r\n" ; 
			}

			if (requestData2[i].yrs.includes(x)) { //compare x with name
				//h11.textContent =JSON.stringify(requestData2[i], null, 2);
				stringBuilder = stringBuilder + " " + JSON.stringify(requestData2[i], null, 2) + "\r\n" ; 
			}
			h11.textContent = stringBuilder;
			//console.log(h11);
			console.log(stringBuilder)
			document.getElementsByTagName('body')[0].appendChild(h11); //string builder issue
        }
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
var person = {name: "John", age: 50, occupation: "builder"};
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
	// console.log(document.getElementById("form1").childNodes.find((a)=> a.name === "fname"));
	var firstName = document.getElementsByName("fname")[0].value;
	var lastName = document.getElementsByName("lname")[0].value;
	var occupation = document.getElementsByName("occu")[0].value;

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
	var para1 = document.getElementById("p1"); //get p element
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

function string4(s1) {
    var x = s1;
    var counter = 0;
    for (i = 0; i < x.length - 2; i++) {
        if (x.charAt(i) === x.charAt(i + 1) && x.charAt(i) === x.charAt(i + 2)) {
            counter++;
        }
    }
    console.log(counter);
}
