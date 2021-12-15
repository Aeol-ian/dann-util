const MONEY = ['', 'k', 'M', 'G', 'T', 'P', 'E'];

module.exports = class Main {

	static async delay(ms) {
		return new Promise(resolve => setTimeout(resolve, isNaN(ms) ? 0 : ms));
	}

	static random(min, max) {
		if (isNaN(min)) error("Enter a valid number.");
		if (max && !isNaN(max)) {
			return Math.floor(Math.random() * (max - min + 1) + min);
		} else {
			return Math.floor(Math.random() * min + min);
		}
	}

	static unique(array){
		if (!array || !Array.isArray(array)) error("Enter a valid array.");
		return [... new Set(array)];
	}

	static shuffle(array) {
		if (!array || !Array.isArray(array)) error("Enter a valid array.");
		
	    const arr = array.slice(0);
	    for (let i = arr.length - 1; i >= 0; i--) {
	      const j = Math.floor(Math.random() * (i + 1));
	      const temp = arr[i];
	      arr[i] = arr[j];
	      arr[j] = temp;
	    }
	    return arr;
  	}

	static crFormat(number) {
		if (isNaN(number)) error("Enter a valid number.");
	    const ranking = Math.log10(number) / 3 | 0;
	    if (!ranking) return number.toString();
	    const last = MONEY[ranking];
	    const scale = Math.pow(10, ranking * 3);
	    const scaled = number / scale;
	    return `${scaled.toFixed(2)}${last}`;
	}

	static formatNumber(number, locale = "en-us") {
	  	if (isNaN(number)) error("Enter a valid number.");
	  	return Number.parseFloat(number).toLocaleString(locale);
  	}

  	static shorten(text, maxLen = 2000) {
  		if (!text || typeof(text) !== "string") error("Enter a valid string.");
  		if (maxLen && isNaN(maxLen)) maxLen = 2000;
    	return text.length > maxLen ? `${text.substr(0, maxLen - 3)}...` : text;
  	}

  	static stringify(object, space = 2) {
  		if (!object || typeof(object) !== "object") error("Enter a valid object data.");
  		if (space && (isNaN(space) || space < 1)) error("Enter a valid space value.");

  		return JSON.stringify(object, null, space);
  	}


}


function error(text) {
		throw new Error(`DannError: ${text}`);
}
