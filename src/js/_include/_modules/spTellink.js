//スマホのときだけ電話番号用リンク

let op = {
	TRIGGER: ".is-tel",
}

module.exports = () => {
	let	linkTarget = document.querySelectorAll(op.TRIGGER);
	if(op.UA == 'pc'){
		Array.prototype.slice.call(linkTarget).forEach(function(event) {
			event.outerHTML = event.innerHTML
		});
	}
}