const input = require(`readline-sync`);
let base = input.question("Enter the base for triangle: ");
let height = input.question("Enter the height for triangle: ");

function triArea(base, height) {
    let area = 1/2*base*height;
	return area;
}

let result = triArea(base,height);
console.log("area of triangle with base "+base+" and height "+height+" : "+result);