
module.exports = class animationStepSet {
	constructor(target) {
		this.target = target;
	}
	set() {
		let $target = $(this.target),
			A_STEP = $target.data('step') + 1,
			C_NAME = 'is-animation';

		let RET_BEF, RET_AFT;

		const animationSet = ($tg) => {
			let fl = true;
			return new Promise(res => {
				$tg.on('transitionend', () => {
					res();
					
					for(var i = 1; i < A_STEP; i++) {
						RET_BEF = ('000' + i).slice(-3);
						RET_AFT = ('000' + (i+1)).slice(-3);

						if($tg.hasClass(C_NAME + RET_BEF) & fl) {
							if(i < A_STEP - 1) $tg.addClass(C_NAME + RET_AFT);
							$tg.removeClass(C_NAME + RET_BEF);
							fl = false;
							// console.log(C_NAME + RET_BEF);
						}
					}
				});
			});
		}

		const actionSet = () => {
			let timeoutId;
			let ac = $target.data('action');
			$target.on(ac,function(){
				if (timeoutId) return;
				timeoutId = setTimeout( () => {
					timeoutId = 0;
					$target.toggleClass(C_NAME + '001');
					main();
				}, (ac == 'resize' || ac == 'scroll') ? 500 : 0 ) ;
			})
		}
		
		actionSet();
		async function main() {
			for(var i = 1; i < A_STEP; i++) {
				animation = await animationSet($target);
			}
		}
	}
}