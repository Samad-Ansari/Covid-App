const mongoose = require('mongoose')
const Schema = mongoose.Schema

const feed = new Schema ({
	id: String,
	title: String,
	author: String,
	newOne: Boolean,
	content: String,
	uploaded: {
		type: Date,
		default: Date.now
	},

});

module.exports = mongoose.model('feed', feed);