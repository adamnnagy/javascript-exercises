const findTheOldest = function (people) {
	const currentYear = new Date().getFullYear();
	const lastPerson = people.pop();
	const theOldest = people.reduce((acc, curr) => {
		const accAge = (acc.yearOfDeath || currentYear) - acc.yearOfBirth;
		const currAge = (curr.yearOfDeath || currentYear) - curr.yearOfBirth;
		if (accAge > currAge) {
			return acc;
		} else {
			return curr;
		}
	}, lastPerson);
    return theOldest
};

// Do not edit below this line
module.exports = findTheOldest;
