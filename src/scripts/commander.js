function Commander() {
	this.el = document.createElement('div');
    this.el.id = "commander";
    this.input_el = document.createElement('input');
    this.input_el.value = "";

	this.init = function() {
		var dol = document.createElement('span');
		dol.innerHTML = '$';
		this.el.appendChild(dol);
		this.el.appendChild(this.input_el);
	    v.el.appendChild(this.el);
	    this.input_el.focus();

		this.input_el.addEventListener('keydown', function(e) {
			if (e.keyCode == 13) { // enter
				e.preventDefault();
				var com = v.commander.input_el.value.trim();

				v.commander.command(com);
			}
		});
	}

	this.command = function(com) {
		var words = com.split(' ');
		words = filter(words);

		switch (words[0]) {
			case 'WORD':
				// new word
				if (words[3] == '=') {
					var pos = words[1];
					var foreign = words[2];

					var meaning = "";
					for (var i = 4; i < words.length; i++) {
						meaning += words[i] + " ";
					}
					meaning = meaning.trim();
					v.lang.words[foreign] = {
						part_of_speech: pos,
						meanings: [
							meaning
						],
						synonyms: []
					}

					v.lang.words = sort_json(v.lang.words);
					save();
					v.dict.words();
					this.input_el.value = "";
				}

				break;
			case 'FIND':
				// find a word
				break;
			case 'DELETE':
				// delete word
				break;
			case 'SYNONYM':
			case 'SYN':
				// add synonym
				break;
			case 'SAVE':
				save();
				this.input_el.value = "";
				break;
		}
	}

	function filter(arr) {
		var res = [];
		arr.forEach(function(e) {
			if (e.length > 0 && e != ' ') res.push(e);
		});
		return res;
	}

	return this;
}
