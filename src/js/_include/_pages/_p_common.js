const initFunc = require('../_modules/initFunc.js');
const smoothScrollSet = require('../_modules/smoothScroll.js');
const animationStepSet = require('../_modules/animationStepSet.js');

// init
class initSet {
	DOMReadBefore(op) {
		smoothScrollSet();
	}
	DOMReadAfter(op) {

		let btnAnimation = new animationStepSet('.animationSet');
		btnAnimation.set();
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
	initFunc(init, option);
}