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
					var pos = words[1].trim().toUpperCase();
					var foreign = words[2].trim();

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
					v.dict.words();
					this.input_el.value = "";
				}

				break;
			case 'FIND':
				// find a word
				if (words[1]) {
					var word = words[1].trim();

					for (var foreign in v.lang.words) {
						if (foreign == word || v.lang.words[foreign].meanings.indexOf(word) > -1) {
							var id = '#' + idfy(foreign);

							// hide other words
							for (var k in v.dict.word_inst) {
								v.dict.word_inst[k].el.style.display = 'none';
							}

							v.dict.word_inst[foreign].el.style.display = 'table-row';

							break;
						}
					}
				} else {
					// hide other words
					for (var k in v.dict.word_inst) {
						v.dict.word_inst[k].el.style.display = 'table-row';
					}
				}
				break;
			case 'DELETE':
				// delete word
				var word = words[1].trim();

				if (v.lang.words[word]) {
					delete v.lang.words[word];

					for (var all in v.lang.words) {
						for (var i = 0; i < v.lang.words[all].synonyms.length; i++) {
							var index = v.lang.words[all].synonyms.indexOf(word);
							v.lang.words[all].synonyms.splice(index, 1);
						}
					}

					v.dict.words();
					this.input_el.value = "";
				}
				break;
			case 'SYNONYM':
			case 'SYN':
				// add synonym
				if (words[2] == '+') {
					var base = words[1].trim();
					var synonym = words[3].trim();

					if (v.lang.words[base] && v.lang.words[synonym]) {
						if (v.lang.words[base].synonyms.indexOf(synonym) == -1) {
							v.lang.words[base].synonyms.push(synonym);

							/*for (var i = 0; i < v.lang.words[base].synonyms.length; i++) {
								var o = v.lang.words[base].synonyms[i];
								if (v.lang.words[o].synonyms.indexOf(synonym) == -1) {
									v.lang.words[o].synonyms.push(synonym);
								}
							}*/
						}
						if (v.lang.words[synonym].synonyms.indexOf(base) == -1) {
							v.lang.words[synonym].synonyms.push(base);

							/*for (var i = 0; i < v.lang.words[synonym].synonyms.length; i++) {
								var o = v.lang.words[synonym].synonyms[i];
								if (v.lang.words[o].synonyms.indexOf(base) == -1) {
									v.lang.words[o].synonyms.push(base);
								}
							}*/
						}

						v.dict.words();
						this.input_el.value = "";
					}
				}
				break;
			case 'SAVE':
				v.files.save();
				this.input_el.value = "";
			case 'OPEN':
				v.files.open();
				this.input_el.value = "";
		}
	}

	function filter(arr) {
		var res = [];
		arr.forEach(function(e) {
			if (e.length > 0 && e != ' ') res.push(e);
		});
		return res;
	}

	function idfy(name) {
		return name.replace(/\W/g,'-');
	}

	return this;
}
