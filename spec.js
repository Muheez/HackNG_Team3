var app = require('./server'),
	chai = require('chai'),
	http = require('chai-http'),
	request = require('supertest'),
	expect = chai.expect,
	should = chai.should();


	chai.use(http);

	describe('populate forms', function() {

		var emp = {

		}

		it("should fail if there is no employee data", function(done) {
			request(app)
			.get("/users")
			.expect(501)
			.expect("Content-type", "application/json")
			.end(function(err, res) {
				res.status.should.equal(501)
				done();
			});
		});
	});