function Dict() {
	this.word_inst = {};

	this.el = document.createElement('div');
	this.el.id = 'dict';

	this.words_el = document.createElement('table');
	this.words_el.id = 'words';

	this.header = document.createElement('tr');

	this.init = function() {
		//header

		var name = document.createElement('th');
		name.innerHTML = "word";
		this.header.appendChild(name);

		var meaning = document.createElement('th');
		meaning.innerHTML = "meanings";
		this.header.appendChild(meaning);

		var pos = document.createElement('th');
		this.header.appendChild(pos);

		var synonym = document.createElement('th');
		synonym.innerHTML = "synonyms";
		this.header.appendChild(synonym);

		this.el.appendChild(this.words_el);
		v.el.appendChild(this.el);

		this.words();
	}

	this.words = function() {
		this.words_el.innerHTML = "";
		this.words_el.appendChild(this.header);
		this.word_inst = {};
		console.log(v.lang.words)
		for (word in v.lang.words) {
			this.new_word(word);
		}
	}

	this.new_word = function(word) {
		var obj = v.lang.words[word];
		var instance = new Word(word, obj);
		instance.init();
		this.word_inst[word] = instance;
	}

	return this;
}
