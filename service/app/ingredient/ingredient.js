var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var IngredientSchema = new Schema({
	name: String
});
mongoose.model('Ingredient', IngredientSchema);