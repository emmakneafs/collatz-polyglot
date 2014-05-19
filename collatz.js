console.log("Emma's Collatz");
var collatz = function (x) {
	var length = 0
	console.log(x);
	while(x > 1){
		if (x % 2 == 0) {
			x = x / 2;
		}
		else{
			x = 3*x + 1;
		}
		console.log(x);
		length += 1
	};
	return length
};

var start = 59
var length = collatz(start);
console.log("collatz(59) has " + length + " items")
