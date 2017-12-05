function save() {
	fs.writeFileSync('./lang.json', JSON.stringify(v.lang, null, "\t"));
}

function load() {
	try {
		var string = fs.readFileSync('./lang.json', 'utf-8');
	} catch(e) {
		return null;
	}
	return JSON.parse(string);
}
