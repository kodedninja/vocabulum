document.onkeydown = function(e) {
	if (e.key == 'n' && (e.ctrlKey || e.metaKey)) {
		e.preventDefault();
	    dialog.showMessageBox({type: 'question', buttons: ['Yes', 'No'], title: 'Confirm', message: 'Unsaved data will be lost. Are you sure you want to continue?' }, function (response) { if (response === 0) { v.new(); } })
		return;
	}

	if(e.key == "o" && (e.ctrlKey || e.metaKey)){
    	e.preventDefault();
    	v.files.open();
    	return;
    }

    if(e.key == "s" && (e.ctrlKey || e.metaKey)){
    	e.preventDefault();
    	v.files.save();
    	return;
    }

	if(e.key == "S" && (e.ctrlKey || e.metaKey)){
    	e.preventDefault();
    	v.files.export();
    	return;
    }
}
