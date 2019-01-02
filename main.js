var stupidButton = {
	init: function() {
		this.attachEvents();
	},

	attachEvents: function() {
		$('#button').on('hover', this.flyAway);
		$('#moving').on('click', this.showWin);
	},

	flyAway: function(e) {
		mLeft = Math.random() * 400;
		mTop = Math.random() * 400;

		$('#button').css('margin-left', mLeft);
		$('#button').css('margin-top', mTop);
	},

	showWin: function(e) {
		alert('"oH wOw i CLiCCe TeH bUtToN." Amazing. You know what you just did? You cheated. You cheated at a stupid game that took me 5 minutes to create. Hope you feel proud of yourself. ');
	}
};

stupidButton.init();
