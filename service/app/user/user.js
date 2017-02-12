var mongoose = require("mongoose");
var Schema = mongoose.Schema,
	ObjectId = Schema.ObjectId;

var UserSchema = new Schema({
	name: String,
	email: String,
	password: String,
	profilePicture: String
});
mongoose.model('User', UserSchema);