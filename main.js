var stupidButton = {
	init: function() {
		this.attachEvents();
	},

	attachEvents: function() {
		$('#button').on('hover', this.flyAway);
		$('#moving').on('click', this.showWin);
	},

	flyAway: function(e) {
		mLeft = Math.random() * 300;
		mTop = Math.random() * 300;

		$('#button').css('margin-left', mLeft);
		$('#button').css('margin-top', mTop);
	},

	showWin: function(e) {
		alert('Nice! Here, have a cookie!');
	}
};

stupidButton.init();
