function isMorning(time){
	if (0 <= time && time < 12) {
		return true
	} else {
		return false
	}


};

module.exports = isMorning;
