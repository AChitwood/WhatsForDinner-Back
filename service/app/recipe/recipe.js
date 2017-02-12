var mongoose = require("mongoose");
var Schema = mongoose.Schema,
	ObjectId = Schema.ObjectId;

var RecipeSchema = new Schema({
	name: String,
	isPrivate: Boolean
});
mongoose.model('Recipe', RecipeSchema);