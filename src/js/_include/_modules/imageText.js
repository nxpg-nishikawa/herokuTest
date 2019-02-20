//画像固定サイズ+画像+テキスト 横並び

module.exports = (trigger) => {
	let imageTarget = document.querySelectorAll(trigger);
	
	Array.prototype.slice.call(imageTarget).forEach(function(event) {
		if(event.querySelectorAll('img').length > 0) {
			event.firstElementChild.style.width = event.querySelectorAll('img')[0].naturalWidth + 'px';
		}
		// event.firstElementChild.style.width = event.firstElementChild.firstElementChild.clientWidth + 'px';
		// event.lastElementChild.style.width = 'calc(100% - ' + event.firstElementChild.clientWidth + 'px)';
	});
}