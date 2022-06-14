function pigLatin(string) {
	if (!string) return "error";
	let finalResult = "";
	const pigLatinWord = (s) => {
		if (s[0].match(/^[aeiouAEIOU]/)) {
			return s + "ay";
		} else {
			return s.replace(/(^[bcdfghjklmnprstvwxys]+qu|qu|[bcdfghjklmnpqrstvwxys]+)(\w*)/, "$2$1ay");
		}
	};
	string.split(" ").forEach((word) => {
		finalResult += `${pigLatinWord(word)} `;
	});
	return finalResult.slice(0, finalResult.length - 1);
}

// Do not edit below this line
module.exports = pigLatin;
