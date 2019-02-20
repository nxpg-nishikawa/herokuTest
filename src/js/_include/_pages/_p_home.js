const initFunc = require('../_modules/initFunc.js');

// init
class initSet {
	DOMReadAfter(op) {
	}
	imageReadAfter(op) {
	}
	windowResize(op) {
	}
	windowScroll(op) {
	}
}

module.exports = (option) => {
	let init = new initSet();
	initFunc(init, option, 'is-home');
}