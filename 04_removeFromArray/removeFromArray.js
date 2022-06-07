const removeFromArray = function (arr, ...toRemove) {
	const result = arr.sort();
	toRemove.forEach((el) => {
		const indexToRemove = result.indexOf(el);
		if (indexToRemove !== -1) result.splice(indexToRemove, 1);
	});
	return result;
};


// Do not edit below this line
module.exports = removeFromArray;
