module.exports = function(sequelize, DataType) {
	sequelize.define('user', {
		firstName: {
			type: DataType.STRING
		},
		lastName: {
			type: DataType.STRING
		}
	});
}