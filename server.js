var express = require("express"),
app         = express(),
db          = require("./connection.js"),
bodyParser  = require("body-parser"),
cors        = require("cors");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(3000, function() {
	console.log("listening on port 3000!");
})

