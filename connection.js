var Sequelize = require("sequelize");

var sequelize = new Sequelize(undefined, undefined, undefined, {
	host: "localhost",
	dialect: "sqlite",
	pool: {
		max: 5,
		min: 0,
		idle: 10000
	},
	storage: __dirname + "/db/database.sqlite"
});

var db = {}

db.sequelize = sequelize;
db.user      = sequelize.import("./user");

module.exports = db;