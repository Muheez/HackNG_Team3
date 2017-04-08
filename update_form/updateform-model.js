module.exports = function(sequelize, DataType) {
		return sequelize.define('employee', {
		surname: {
			type: DataType.STRING,
			//field: 'surname'
		},

		title: {
			type: DataType.STRING
		},

		firstname: {
			type: DataType.STRING
		},

		middlename: {
			type: DataType.STRING
		},

		dob: {
			type: DataType.DATE, allowNull: true,
			defaultValue: DataType.NOW
		},

		sex : {
			type: DataType.STRING
		}

	});
}