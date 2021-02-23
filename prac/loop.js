var cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];
var text = "";
var i;
for (i = 0; i < cars.length; i++) {	
	text += cars[i];
}
console.log(text);

cars.map((car)=> {
console.log(car);
})

console.log(text);