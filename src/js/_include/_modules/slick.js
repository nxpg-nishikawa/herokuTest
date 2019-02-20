
module.exports = class slick {
	constructor($target, op) {
		this.target = $target;
		this.option = op.OPTION;
	}
	slide() {

		let $slideTarget = this.target.find('.slide-area'),
			$prevArrow = this.target.find('.arrow .arrow-prev'),
			$nextArrow = this.target.find('.arrow .arrow-next'),
			$pager = this.target.find('.pager');

		for(var i = 0; i < $slideTarget.find('.slide').length; i++) {
			$pager.append("</p>")
		}

		$pager.on('click', 'p', function(event) {
			$slideTarget.slick('slickGoTo', $(this).index());
		});

		$slideTarget.slick(this.option);

		$prevArrow.on('click', function(event) {
			$slideTarget.slick('slickPrev');
		});
		$nextArrow.on('click', function(event) {
			$slideTarget.slick('slickNext');
		});

		$slideTarget.on('afterChange', function(slick, currentSlide){

		});
	}
}