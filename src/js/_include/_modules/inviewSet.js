let op = {
	TRIGGER: ".is-inview",
	ONE: ".is-inview-one"
}

module.exports = {
	inviewOne: () => {
		if($(op.ONE).length) {
			$(op.ONE).one('inview', function (event, visible, topOrBottomOrBoth) {
				if (visible == true) {
					$(this).addClass('is-animated');
				}
			});
		}
	},
	inview: () => {
		if($(op.TRIGGER).length) {
			
			$(op.TRIGGER).on('inview', function (event, visible, topOrBottomOrBoth) {
				if (visible == true) {
					console.log('aaaaaaaaaaaaaaaa');
					$(this).addClass('is-animated');
				} else {
					$(this).removeClass('is-animated');
				}
			});
		}
    }
}

