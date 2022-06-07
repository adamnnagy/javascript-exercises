const add = function (a, b) {
	return a + b;
};

const subtract = function (a, b) {
	return a - b;
};

const sum = function (numbers) {
	return Number(numbers.reduce((acc, curr) => acc + curr, 0));
};

const multiply = function (numbers) {
	return Number(numbers.reduce((acc, curr) => acc * curr, 1));
};

const power = function (x, n) {
	if (x < 0) return "ERROR";
	if (n === 0) return 1;
	else return x * power(x, n - 1);
};

const factorial = function (x) {
	if (x < 0) return "ERROR";
	if (x === 0) return 1;
	else return x * factorial(x - 1);
};

// Do not edit below this line
module.exports = {
	add,
	subtract,
	sum,
	multiply,
	power,
	factorial,
};
