const mongoose = require('mongoose')
const Schema = mongoose.Schema

const contact = new Schema ({
	id: String,
	name: String,
	email: String,
	phone: Number,
	message: String,
	uploaded: {
		type: Date,
		default: Date.now
	},

});

module.exports = mongoose.model('contact', contact);