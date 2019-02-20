module.exports = (tg, op, flag) => {
	let timeoutId = 1, pageFlag;
	let currentWidth = window.innerWidth;

	if(flag === void 0) {
		tg.DOMReadBefore(op);
	}

	document.addEventListener("DOMContentLoaded", () => {
		pageFlag = document.getElementById(op.PAGE_FLAG).className
		if(pageFlag == flag || flag === void 0) {
			tg.DOMReadAfter(op);

			window.addEventListener('load', () => {
				tg.imageReadAfter(op);
			},false);

			window.addEventListener("resize", () => {

				if (timeoutId) return;

				timeoutId = setTimeout( () => {
					timeoutId = 0;

					// ios resize制御
					if(currentWidth <= op.SP_WIDTH) {
						if (currentWidth == window.innerWidth) return;
						currentWidth = window.innerWidth;
						tg.windowResize(op);
					} else {
						tg.windowResize(op);
					}
					
				}, 500 ) ;

			});

			window.addEventListener("scroll", () => {
				if (timeoutId) return ;
				timeoutId = setTimeout( () => {
					timeoutId = 0 ;
					tg.windowScroll(op);
				}, 300 ) ;
			});


			// scroll、resize制御
			timeoutId = setTimeout( () => {
				timeoutId = 0;
			}, 100 ) ;
		}
	},false);
}
