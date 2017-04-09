var app = require('./server'),
	chai = require('chai'),
	http = require('chai-http'),
	request = require('supertest'),
	expect = chai.expect,
	should = chai.should();


	chai.use(http);

	describe('populate forms', function() {

		var emp = {
			'surname': 'Balogun',
			'firstname': 'Babatunde',
			'sex': 'Male'

		}

		/*it("should fail if there is no employee data", function(done) {
			request(app)
			.get("/user")
			.expect(501)
			.expect("Content-type", "application/json")
			.end(function(err, res) {
				res.status.should.equal(200)
				done();
			});
		});*/


		it("should add employee to the db", function(done) {
			chai.request(app)
			.post('/user/add')
			.send(emp)
			.end(function(err, res) {
				res.status.should.equal(200)
				should.not.exist(err)
				res.body.should.be.an('object')
				done();
			})
		})
	});