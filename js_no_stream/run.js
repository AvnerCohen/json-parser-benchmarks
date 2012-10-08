#!/usr/local/bin/node
var fs = require('fs');
var jsonFile = process.argv[2]; //File name sent in from the marshaller

console.time("Parse");

var parsedJSON = require("." + jsonFile);
var rows = parsedJSON["rows"];

var total_rows = 0;
for (var i=0; i< rows.length; i++){
	total_rows++;
}

console.timeEnd("Parse");