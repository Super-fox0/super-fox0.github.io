"use strict";


//console.log(document.getElementById("tyreCheck").value);
//console.log(document.getElementById("tyreCheck").checked);

//variable declaration
let carArray = [];


function makeCar(){
	let car = {make: document.getElementById("make").value, reg:document.getElementById("reg").value, cost:0};
	
	if(document.getElementById("tyreCheck").checked){
		car.cost = Number(car.cost) + Number(document.getElementById("tyreCheck").value);
	}
	if(document.getElementById("windscreen").checked){
		car.cost = Number(car.cost) + Number(document.getElementById("windscreen").value);
	}
	if(document.getElementById("respray").checked){
		car.cost = Number(car.cost) + Number(document.getElementById("respray").value);
	}
	console.log(car.make, car.reg, car.cost);
	carArray.push(car);
}

function removeCar(){
	carArray.splice(-1, 1);
	console.log("Car Removed");
}

function printCarArray(){
	for(let i =0; i< carArray.length; i++){
		console.log(carArray[i].make, carArray[i].reg, carArray[i].cost);
	}
	

}
