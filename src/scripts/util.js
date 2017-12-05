function sort_json(obj) {
	var ordered = {};
	Object.keys(obj).sort(function(x, y) {
		x = x.replace(/\W/g, '');
		y = y.replace(/\W/g, '');
		return x.localeCompare(y);
	}).forEach(function(key) {
		ordered[key] = obj[key];
	});
	return ordered;
}
