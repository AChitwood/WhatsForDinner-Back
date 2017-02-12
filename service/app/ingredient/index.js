var mongoose = require('mongoose'),
	Ingredient = mongoose.model("Ingredient"),
	ObjectID = mongoose.Types.ObjectID

exports.create = function(req, res, next) {
	var ingredientModel = new Ingredient(req.body);
	ingredientModel.save(function(err, ingredient) {
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
				data: ingredient
			})
		}
	})
}

exports.get = function(req, res, next) {
	Ingredient.findById(new ObjectId(req.params.id), function(err, ingredient) {
		if(err) {
			res.status(500);
			res.json({
				type: false,
				data: "Error occured: " + err
			})
		}
		else {
			if(ingredient) {
				res.json({
					type: true,
					data: ingredient
				})
			}
			else {
				res.json({
					type: false,
					data: "Ingredient: " + req.params.id + " not found"
				})
			}
		}
	})
}

exports.update = function(req, res, next) {
	var updatedIngredientModel = new Ingredient(req.body);
	Ingredient.findByIdAndUpdate(new ObjectId(req.params.id), updatedIngredientModel, function(err, ingredient) {
		if(err) {
			res.status(500);
			res.json({
				type: false,
				data: "Error occured: " + err
			})
		}
		else {
			if(ingredient) {
				res.json({
					type: true,
					data: ingredient
				})
			}
			else {
				res.json({
					type: false,
					data: "Ingredient: " + req.params.id + " not found"
				})
			}
		}
	})
}

exports.delete = function(req, res, next) {
	Ingredient.findByIdAndRemove(new Object(req.params.id), function(err, ingredient) {
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
				data: "Ingredient: " + req.params.id + " deleted successfully"
			})
		}
	});
	
}
