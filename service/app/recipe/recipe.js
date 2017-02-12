var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var RecipeSchema = new Schema({
	id: int,
	name: String,
	isPrivate: boolean
});
mongoose.model('Recipe', RecipeSchema);