function Word(name, properties) {
	this.name = name;
	this.properties = properties;

	this.el = document.createElement('tr');
	this.el.id = idfy(this.name);
	this.el.classList = "word";

	this.init = function() {
		var name_el = document.createElement('td');
		name_el.classList = "name";
		name_el.innerHTML = this.name;
		this.el.appendChild(name_el);

		var meaning_el = document.createElement('td');
		meaning_el.classList = "meaning";
		meaning_el.innerHTML = this.meanings();
		this.el.appendChild(meaning_el);

		var pos_el = document.createElement('td');
		pos_el.innerHTML = this.properties.part_of_speech;
		this.el.appendChild(pos_el);

		var synonym_el = document.createElement('td');
		synonym_el.classList = "synonym";
		this.synonyms(synonym_el);
		this.el.appendChild(synonym_el);

		v.dict.words_el.appendChild(this.el);
	}

	this.meanings = function() {
		var res = "";
		for (var i = 0; i < this.properties.meanings.length - 1; i++) {
			res += this.properties.meanings[i] + ", ";
		}
		res += this.properties.meanings[this.properties.meanings.length - 1];
		return res;
	}

	this.synonyms = function(el) {
		for (var i = 0; i < this.properties.synonyms.length; i++) {
			var word = this.properties.synonyms[i];
			var link = document.createElement('a');
			link.class = 'synonym';
			link.href = '#' + idfy(word);
			link.innerHTML = word;
			el.appendChild(link);
		}
	}

	function idfy(name) {
		return name.replace(/\W/g,'-');
	}

	return this;
}
