function Files() {
	this.source = null;

	this.save = function() {
		console.log(this.source)
		if (!this.source) {this.export(); return; }
		fs.writeFileSync(this.source, JSON.stringify(v.lang, null, "\t"));
	}

	this.open = function() {
		var filepath = dialog.showOpenDialog({properties: ['openFile']});

		if(!filepath){ console.log("Nothing to load"); return; }

		try {
			var string = fs.readFileSync(filepath[0], 'utf-8');
		} catch (e) {
			console.log('Error while loading file');
		}

		this.source = filepath[0];
		v.lang = JSON.parse(string);
		v.dict.words();
	}

	this.export = function() {
		if(typeof dialog == "undefined"){ this.simple_export(); return; }

      	var str = JSON.stringify(v.lang, null, '\t');

	    dialog.showSaveDialog((fileName) => {
	    	if (fileName === undefined){ return; }
	      	fs.writeFile(fileName, str, (err) => {
	        	if(err){ alert("An error ocurred creating the file "+ err.message); return; }
	        	v.files.source = fileName;
	      	});
	    });
    }
}
