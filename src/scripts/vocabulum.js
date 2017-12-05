const fs = require('fs');

function Vocabulum() {
	this.lang = null;
	this.commander = new Commander();
	this.dict = new Dict();
	this.files = new Files();

	this.el = document.createElement('div');
	this.el.id = 'vocabulum';

	this.init = function() {
		var body = document.getElementsByTagName('body')[0];
		body.appendChild(this.el);

		this.new();

		this.commander.init();
		this.dict.init();
	}

	this.new = function() {
		this.lang = {
			"words": {}
		}

		this.dict.words();
	}

	return this;
}
