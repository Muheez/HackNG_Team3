module.exports = function(sequelize, DataType) {
		sequelize.define('employee', {
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
			type: DataType.DATE, allowNull: false
		},

		sex : {
			type: DataType.STRING
		},

		doe: {
			type: DataType.DATE
		},

		employee_num: {
			type: DataType.INTEGER
		},

		/*Exit_date: {
			type: DataType.DATE, allowNull: false*/

			Exit_date_by_age: {
				type: DataType.DATE, allowNull: true
			},

			Exit_date_by_service_length: {
				type: DataType.DATE, allowNull: true
			},
		//},

		state_origin: {
			type: DataType.STRING
		},

		lga: {
			type: DataType.STRING
		},

		home_town: {
			type: DataType.STRING
		},

		/*marital_status: {
			type: DataType.STRING, allowNull: false*/

			married: {
				type: DataType.STRING, allowNull: true
			},

			single: {
				type: DataType.STRING, allowNull: true
			},
		//},

		/*telephone: {
			type: DataType.INTEGER, allowNull: false*/

			phone1 : {
				type: DataType.INTEGER, allowNull: true
			},

			phone2: {
				type: DataType.INTEGER, allowNull: true
			},
		//},

		email: {
			type: DataType.STRING
		},

		residential_addy: {
			type: DataType.STRING
		},

		perm_addy: {
			type: DataType.STRING
		},

		postal_addy: {
			type: DataType.STRING
		},

		spousename: {
			type: DataType.STRING, allowNull: true
		},

		spouse_dob: {
			type: DataType.DATE
		},

		spouse_job: {
			type: DataType.STRING
		},

		/*next_of_kin:{
			type: DataType.STRING
*/
			next_of_kin1: {
				//type: DataType.STRING
				name: {
					type: DataType.STRING
				},
				relationship: {
					type: DataType.STRING
				}
			},

			next_of_kin2: {
				//type: DataType.STRING
				name: {
					type: DataType.STRING
				},
				relationship: {
					type: DataType.STRING
				}
			},

			next_of_kin3: {
				//type: DataType.STRING
				name: {
					type: DataType.STRING
				},
				relationship: {
					type: DataType.STRING
				}
			},


		//},

		/*children: {
			type: DataType.STRING, allowNull: true*/

			child1: {
				//type: DataType.STRING, allowNull: true
				name: {
					type: DataType.STRING
				},
				sex: {
					type: DataType.STRING
				},
				dob: {
					type: DataType.DATE
				}
			},
			child2: {
				//type: DataType.STRING, allowNull: true
				name: {
					type: DataType.STRING
				},
				sex: {
					type: DataType.STRING
				},
				dob: {
					type: DataType.DATE
				}
			},
			child3: {
				//type: DataType.STRING, allowNull: true
				name: {
					type: DataType.STRING
				},
				sex: {
					type: DataType.STRING
				},
				dob: {
					type: DataType.DATE
				}
			},
			child4: {
				//type: DataType.STRING, allowNull: true
				name: {
					type: DataType.STRING
				},
				sex: {
					type: DataType.STRING
				},
				dob: {
					type: DataType.DATE
				}
			},
		//},

		qualification_at_employed_date: {
			//type: DataType.STRING
			qualification_name: {
				type: DataType.STRING
			},
			year: {
				type: DataType.DATEONLY
			}
		},

		other_academic_qualy: {
			//type: DataType.STRING
			qualification_name: {
				type: DataType.STRING
			},
			year: {
				type: DataType.DATEONLY
			}
		},

		professional_qualy: {
			//type: DataType.STRING
			qualification_name: {
				type: DataType.STRING
			},
			year: {
				type: DataType.DATEONLY
			}
		},

		present_designation: {
			//type: DataType.STRING
			designation: {
				type: DataType.STRING
			},

			effective_date: {
				type: DataType.DATEONLY
			}
		},

		date_to_present_location: {
			type: DataType.DATEONLY
		},

		salary_code: {
			type: DataType.STRING
		},

		annual_salary: {
			type: DataType.DOUBLE
		},

		bank_details: {
			//type: DataType.STRING
			bank_name: {
				type: DataType.STRING
			},
			acct_num: {
				type: DataType.INTEGER
			}
		}

	});
}