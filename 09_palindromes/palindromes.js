const palindromes = function (sentence) {
	const original = sentence.replace(/\W/g, "").toLowerCase();
	const reversed = original.split("").reverse().join("");
	return reversed === original;
};

// Do not edit below this line
module.exports = palindromes;
