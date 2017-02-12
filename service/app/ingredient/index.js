var mongoose = require('mongoose'),
	Ingredient = mongoose.model("Ingredient"),
	ObjectID = mongoose.Types.ObjectID

exports.createIngredient = function(req, res, next) {
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

exports.getIngredient = function(req, res, next) {
	// Ingredient.findById(new ObjectID(req.params.id), function(err, ingredient) {
	// 	if(err) {
	// 		res.status(500);
	// 		res.json({
	// 			type: false,
	// 			data: "Error occured: " + err
	// 		})
	// 	}
	// 	else {
	// 		if(ingredient) {
	// 			res.json({
	// 				type: true,
	// 				data: ingredient
	// 			})
	// 		}
	// 		else {
	// 			res.json({
	// 				type: false,
	// 				data: "Ingredient: " + req.params.id + " not found"
	// 			})
	// 		}
	// 	}
	// })
	res.json({
		type: true,
		data: {
			name: "Test"
		}
	})
}
