var express = require('express');
var formModel = require("./updateform-model");
var db = require("../connection.js");
var route = express.Router();
	
	route.route('/')
	.get(function(req, res, next) {
		db.formModel.findAll({})
		.then(function(user){
			res.status(200).send(user);
		}).catch(function(err) {
			console.log(err.message);
		});
	})
	.post(function(req, res, next) {
		db.formModel.create(req.body)
		.then(function(user) {
			res.status(200).send(user);
		}).catch(function(err) {
			console.log(err.message);
		});
	})

	//Routes that takes parameters
	route.route('/:id')
		.get(function(req, res, next) {
			db.formModel.findById(req.params.id)
			.then(function(result) {
				res.status(200).json(result);
			}).catch(function(err) {
				console.log(err.message);
			})
		})

		.put(function(req, res, next) {
			db.formModel.findById(req.params.id)
			.then(function(result) {
				return result.updateAttributes(req.body)
			}, err => {
				console.log(err.message)
			})
			.then(result => {
				res.status(200).json(result);
			});
		})

		.delete(function(req, res, next) {
			db.formModel.findById(req.params.id)
			.then(function(result) {
				return result.destroy(req.body)
			}, err => {
				console.log(err.message);
			})
			.then(result => {
				res.status(200).json(result);
			})
		})



	module.exports = route;
