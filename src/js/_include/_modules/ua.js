//ua 判定
module.exports = class ua {
	constructor() {
		this.ua = navigator.userAgent;
		this.type = 'pc';
	}
	dvType() {
		if (this.ua.indexOf('iPhone') > 0 || this.ua.indexOf('Android') > 0 && this.ua.indexOf('Mobile') > 0) {
			// スマートフォン用コード
			this.type = 'sp'
		} else if (this.ua.indexOf('iPad') > 0 || this.ua.indexOf('Android') > 0) {
			// タブレット用コード
			this.type = 'tb'
		}
		return this.type;
	}
}
