class Circe {
    constructor(radius) {
        this.radius = radius;
    }
    get circleRadius() {
        return `radius is ${this.radius} mm`;
    }
    set circleRadius(radius) {
        this.radius = radius; 
    }
    get circleD() {
        return `diameter is ${this.radius * 2} mm`;
    }
    get circleArea() {
    		return `area of the circle with diam ${this.radius * 2} mm is ${this.radius ** 2 * 3.14} sq. mm`;
    }	
    get circuit() {
    	return `if diam ${this.radius * 2}, circuit is ${(this.radius * 2 * 3.14).toFixed(2)} mm`
    }
}
// step 1 - get radius 
const circle = new Circe(200);
console.log(circle.circleRadius);
// step 2 - change radius 
circle.radius = 1000;
console.log(circle.circleRadius);
// step 3 - calculate diameter
console.log(circle.circleD);
// step 4 - circle area
circle.radius = 15;
console.log(circle.circleArea);
// step 5 - circuit
console.log(circle.circuit)