var mongoose = require('mongoose'),
	User = mongoose.model("User"),
	ObjectID = mongoose.Types.ObjectID

exports.createUser = function(req, res, next) {
	var userModel = new User(req.body);
	userModel.save(function(err, user) {
		if(err) {
			res.status(500);
			res.json({
				type: false,
				data: "Error occured: " + err
			})
		}
		else {
			res.json({
				type: true,
				data: user
			})
		}
	})
}

exports.getUser = function(req, res, next) {
	User.findById(new ObjectID(req.params.id), function(err, user) {
		if(err) {
			res.status(500);
			res.json({
				type: false,
				data: "Error occured: " + err
			})
		}
		else {
			if(user) {
				res.json({
					type: true,
					data: user
				})
			}
			else {
				res.json({
					type: false,
					data: "User: " + req.params.id + " not found"
				})
			}
		}
	})
}

exports.updateUser = function(req, res, next) {
	var updatedUserModel = new User(req.body);
	User.findByIdAndUpdate(new ObjectId(req.params.id), updatedUserModel, function(err, user) {
		if(err) {
			res.status(500);
			res.json({
				type: false,
				data: "Error occured: " + err
			})
		}
		else {
			if(user) {
				res.json({
					type: true,
					data: user
				})
			}
			else {
				res.json({
					type: false,
					data: "User: " + req.params.id + " not found"
				})
			}
		}
	})
}

exports.deleteUser = function(req, res, next) {
	User.findByIdAndRemove(new Object(req.params.id), function(err, user) {
		if(err) {
			res.status(500);
			res.json({
				type: false,
				data: "Error occured: " + err
			})
		}
		else {
			res.json({
				type: true,
				data: "User: " + req.params.id + " deleted successfully"
			})
		}
	})
}