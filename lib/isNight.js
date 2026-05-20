function isNight(time){
	if (16 <= time && time <= 24) {
		return true
	} else {
		return false
	}


};

module.exports = isNight;
