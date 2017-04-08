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

app.post("/user/add", (req, res) => {
	db.user.create(req.body)
		.then(function(user) {
			res.status(200).send("User added successfully");
		})
		.catch(function(err) {
			res.status(200).send("Error adding user");
		});
});

app.get("/user/:id", (req, res) => {
	db.user.findById(req.params.id)
		.then(function(result) {
			res.status(200).json(result);
		});
		// .catch(function(err) {
		// 	res.status(200).send("Error" + err);
		// });
});

app.put("/user/:id", (req, res) => {
	db.user.findById(req.params.id)
		.then(function(result) {
			return result.updateAttributes(req.body)
		}, err => {
			console.log("Error:" + err);
		})
		.then(result => {
			res.status(200).json(result);
		});
});

app.delete("/user/:id", (req, res) => {
	db.user.findById(req.params.id)
	.then(function(result) {
		return result.destroy(req.body)
	}, err => {
		console.log("Error:" + err);
	})
	.then(result => {
		res.status(200).json(result);
	});
});

db.sequelize.sync()
	.then(function() {
		app.listen(3000, function() {
			console.log("listening on port 3000!");
		})
	});


