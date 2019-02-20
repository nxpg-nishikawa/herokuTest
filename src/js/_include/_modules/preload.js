module.exports = (op) => {
	let queue = new createjs.LoadQueue(true);
	let manifest = [];

	

	startFunc();
	function startFunc() {
		
		$('body').find('img').each(function(index, el) {
			manifest.push($(this).attr('src'));
		});
		loadSet();
	}

	function statusFunc(progress) {
		console.log(progress*100);
		
	}
	function compleateFunc() {
		console.log("compleate");
	}

	function loadSet() {
		queue.loadManifest(manifest);
		queue.setMaxConnections(1);
		
		queue.addEventListener('progress', function(e){
			statusFunc(e.progress)
		});

		queue.addEventListener('complete', function(e){
			compleateFunc();
		});
		
	}
}