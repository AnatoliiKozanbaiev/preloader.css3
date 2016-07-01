var preloaderCSS3 = function(message){
	message = ('string' === typeof message && message.length > 0) ? '<h1 class="css3">'+message+'</h1>' : '';
	var container = document.createElement('div');
	container.className = "css3 container";
	container.innerHTML = '<div class="css3 wrapper">\
						<div class="css3 part left"></div>\
						'+message+'\
						<div class="css3 round1 round2"></div>\
						<div class="css3 part right"></div>\
					</div>';
	document.body.appendChild(container);

	document.addEventListener("DOMContentLoaded", function(event) {
		setTimeout(function(){
			var round1 = document.querySelector('.css3.round1');
			round1.className += ' hidden';
			var h1 = document.querySelector('h1.css3');
			h1.className += ' hidden';
		}, 2000);
		setTimeout(function(){
			var left = document.querySelector('.css3.part.left');
			left.className += ' out';
			var right = document.querySelector('.css3.part.right');
			right.className += ' out';
		}, 3000);
		setTimeout(function(){
			var preloader = document.querySelector('.css3.container');
			preloader.className += ' fadeOut';
		}, 3500);
	});
}
