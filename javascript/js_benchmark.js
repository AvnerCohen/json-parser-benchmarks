var fs = require('fs');
var JSONStream = require('JSONStream');
var stream = JSONStream.parse(['rows', true, 'doc']);

var totalRows = 0;

stream.on("start", function(){
	totalRows = 0;
});

stream.on("data", function(){
	totalRows++;
});

streams.on("end", function(){
	console.log("Done Parsing ", totalRows, " Rows. Yahoo!");
});

var fileStream = fs.createReadStream("../file.json");

fileStream.pipe(stream);