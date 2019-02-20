//高さそろえる

module.exports = (trigger) => {
	if($(trigger).length) {
		$(trigger).matchHeight();
	}
}