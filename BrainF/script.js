var table = [];
var selec = 0;
var output = '';
var cap = 999;
var cycles = 0;
function runBF(pref = '!DERIVED!') {
  cap = parseInt(document.getElementById('cap').value);
	var count = 0;
	var i = '';
	document.getElementById('output').innerHTML = '<font style="font-size: 150%;">Output</font>';
	var code = '';
	//alert(pref=='!DERIVED!');
	if (pref == '!DERIVED!') {
		table = [];
    cycles = 0;
		for (let a = 1; a < 100; a++) {
			table.push(0);
		};
		selec = Math.round((table.length) / 2) - 1;
		output = '<font style="font-size: 150%;">Output</font>';
		code = document.getElementById('code').value;
	} else {
		code = pref
	};
	var bracket = 0;
	var build = '';
	while ((count < code.length)&&(cap>cycles)) {
    cycles += 1;
		i = code[count];
		if (i == '+') {
			table[selec] = table[selec] + 1;
		} else if (i == '-') {
			table[selec] = table[selec] - 1;
		} else if (i == '>') {
			selec = selec + 1;
		} else if (i == '<') {
			selec = selec - 1;
		} else if (i == '!') {
			output = output + "<br>" + String(table[selec])
			document.getElementById('output').innerHTML = output;
		} else if (i == '?') {
			table[selec] = parseInt(prompt("?"));
		} else if (i == '/') {
			break;
		} else if (i == '@') {
			console.log(String(table))
		} else if (i == '[') {
			bracket += 1;
			build = '';
			while (bracket > 0) {
				count += 1;
				i = code[count];
				if (i == '[' || i == '[') {
					bracket += 1;
				} else if (i == ']') {
					bracket = bracket - 1;
				};
				if (bracket > 0) {
					build = build + i;
				};
			};
			var noBreakLoop = true;
			while (noBreakLoop) {
				if (table[selec] == 0) {
					noBreakLoop = false
				} else {
					runBF(build,'');
				};
			};
		} else if (i == '(') {
			bracket += 1;
			build = '';
			while (bracket > 0) {
				count += 1;
				i = code[count];
				if (i == '(') {
					bracket += 1;
				} else if (i == ')') {
					bracket = bracket - 1;
				};
				if (bracket > 0) {
					build = build + i;
				};
			};
			table[selec] = parseInt(build);
		};
		count = count + 1;
	};
};