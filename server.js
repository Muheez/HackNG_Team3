var express = require("express"),
app         = express(),
db          = require("./connection.js"),
bodyParser  = require("body-parser"),
cors        = require("cors");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

db.sequelize
	.authenticate()
	.then(function(err) {
		console.log("connection has been successfully established")
	})
	.catch(function(err) {
		console.log("Unable to connect to the database", err);
	})

app.listen(3000, function() {
	console.log("listening on port 3000!");
})

