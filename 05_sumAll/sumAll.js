const sumAll = function (from, until) {
	if (from < 0 || until < 0) return "ERROR";
	if ((typeof from !== 'number') || (typeof until !== 'number')) return "ERROR";
	const n = Math.abs(until - from) + 1;
	const sum = (n * (from + until)) / 2;
	return sum;
};

// Do not edit below this line
module.exports = sumAll;
