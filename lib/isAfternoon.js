function isAfternoon (time) {
	if (12 <= time && time < 16) {
		return true
	} else {
		return false
	}

};

module.exports = isAfternoon;
