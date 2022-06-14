const caesar = function (text, shift) {
	const processedShift = (26 + (shift % 26)) % 26;

	let result = "";
	for (let i = 0; i < text.length; i++) {
		const char = text[i];
		let offset = 0;
		if (char.match(/[A-Z]/)) {
			offset = 65;
		} else if (char.match(/[a-z]/)) {
			offset = 97;
		} else {
			result += char;
			continue;
		}

		result += String.fromCharCode(
			((text.charCodeAt(i) - offset + processedShift) % 26) + offset
		);
	}
	return result;
};

console.log(caesar("asDf", -27));

// Do not edit below this line
module.exports = caesar;
