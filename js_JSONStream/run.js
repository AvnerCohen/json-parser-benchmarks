#!/usr/local/bin/node
var fs = require('fs');
var JSONStream = require('JSONStream');
var stream = JSONStream.parse(["rows", true]);

var jsonFile = process.argv[2]; //File name sent in from the marshaller

if (jsonFile === "" || typeof jsonFile === "undefined"){
	console.log("No file sent for parsing");
	return false;
}

var totalRows = 0;
console.time("Parse");
stream.on("start", function(){
	totalRows = 0;

});

stream.on("data", function(){
	totalRows++;
});

stream.on("end", function(){
	//console.log(totalRows + " Total rows.");
	console.timeEnd("Parse");

});

var fileStream = fs.createReadStream(jsonFile);

fileStream.pipe(stream);