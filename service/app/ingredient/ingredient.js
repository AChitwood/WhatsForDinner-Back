var mongoose = require("mongoose");
var Schema = mongoose.Schema,
	ObjectId = Schema.ObjectId;

var IngredientSchema = new Schema({
	name: String
});
mongoose.model('Ingredient', IngredientSchema);