var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var RecipeSchema = new Schema({
	name: String,
	isPrivate: boolean
});
mongoose.model('Recipe', RecipeSchema);