module.exports = function(sequelize, DataType) {
	return sequelize.define('user', {
		firstName: {
			type: DataType.STRING
		},
		lastName: {
			type: DataType.STRING
		}
	});
}