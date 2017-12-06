const fs = require('fs');

function Vocabulum() {
	this.lang = null;
	this.commander = new Commander();
	this.dict = new Dict();
	this.files = new Files();

	this.el = document.createElement('div');
	this.el.id = 'vocabulum';

	this.langs_el = document.createElement('span'); this.langs_el.id = 'langs';

	this.init = function() {
		var body = document.getElementsByTagName('body')[0];
		body.appendChild(this.el);
		this.new();

		this.el.appendChild(this.langs_el);
		this.commander.init();
		this.dict.init();
	}

	this.render = function() {
		if (v.lang.from && v.lang.to)
			v.langs_el.innerHTML = v.lang.from + ' - ' + v.lang.to;
		v.dict.words();
	}

	this.new = function() {
		this.lang = {
			"from": "",
			"to": "",
			"words": {}
		}

		this.dict.words();
	}

	return this;
}
