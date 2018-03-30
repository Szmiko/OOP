var iPhone6S = new Phone ("Aplle", 2250, "silver", 2017);
var samsungS6 = new Phone ("Samsung", 1800, "black", 2015);
var onePlus = new Phone ("Nokia", 1200, "white", 2016);

function Phone(brand, price, color, year) {
	this.brand = brand;
	this.price = price;
	this.color = color;
	this.year = year;
}

Phone.prototype.printInfo = function() {
	console.log('The phone brand is ' + this.brand + ", color is " + this.color + " and the price is " + this.price + " dollars." + "This model is produced since " + this.year +".");
}

iPhone6S.printInfo();
samsungS6.printInfo();
onePlus.printInfo();