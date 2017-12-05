const fs = require('fs');

function Vocabulum() {
	this.lang = null;
	this.commander = new Commander();
	this.dict = new Dict();

	this.el = document.createElement('div');
	this.el.id = 'vocabulum';

	this.init = function() {
		var body = document.getElementsByTagName('body')[0];
		body.appendChild(this.el);

		this.lang = load();

		this.commander.init();
		this.dict.init();
	}

	return this;
}
