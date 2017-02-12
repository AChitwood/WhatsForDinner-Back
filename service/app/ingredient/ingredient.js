var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var IngredientSchema = new Schema({
	id: int,
	name: String
});
mongoose.model('Ingredient', IngredientSchema);