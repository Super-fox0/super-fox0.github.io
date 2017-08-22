function functions1(p1) {
    return p1*p1;              
}

function functions2(p1, p2,p3) {
    return p1+p2+p3;              
}

// Functions test
console.log(functions1(3));
console.log(functions2(1,2,3));
var person = {name:"John", age:50, occupation:"builder"};
console.log(person.name,person.age,person.occupation);
person.name = "joe";
person.age = 21;
person.occupation = "bricklayer";
console.log(person.name,person.age,person.occupation);

function functions3() {
    person.age++;
    console.log(person.name,person.age,person.occupation);
}

function functions4() {
	var firstName = document.getElementById("form1").elements['fname'].value;
	var lastName = document.getElementById("form1").elements['lname'].value;
	var occupation = document.getElementById("form1").elements['occu'].value;

	var personx = {n:firstName, l:lastName, o:occupation};
    console.log(personx.n, personx.l, personx.o);
}

function makeParagraph(){
	var para = document.createElement("P") //make p tag
	var text = document.createTextNode("text for paragraph"); //text holder
	para.setAttribute("id", "p1"); // set p id
	para.appendChild(text); // set p text
	document.body.appendChild(para); // add to body
}

function changeText(){
	var textBox = document.getElementById("textArea"); //get text box
	var textholder = document.createTextNode(textBox.value); // get text from text box
	var para = document.getElementById("p1"); //get paragraph
	para.innerHTML = "";
	para.appendChild(textholder); //write to paragraph
	document.body.appendChild(para); //print paragraph
	document.get
}

function removePara(){
	var para1 = document.getElementById("p1") //get p element
	para1.parentNode.removeChild(para1); // remove p element
}
