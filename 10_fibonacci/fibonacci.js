const fibonacci = function (n) {
    const nthFibonacci = Number(n);
	if (nthFibonacci < 1) return "OOPS";
	if (nthFibonacci === 1 || nthFibonacci === 2) return 1;

	let curr = 1;
	let next = 1;
	let prev = 1;
	for (let i = 0; i < nthFibonacci - 2; i++) {
		next = prev + curr;
		prev = curr;
		curr = next;
	}
	return next;
};

// Do not edit below this line
module.exports = fibonacci;
