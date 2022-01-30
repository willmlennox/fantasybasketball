const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	// players: {
	// 	type: [mongoose.Schema.ObjectId],
	// 	required: false,
	// },
	username: {
		type: String,
		required: true,
	},
});

const UserModel = mongoose.model("users", UserSchema)
module.exports = UserModel;