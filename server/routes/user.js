const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const mongoose = require('mongoose')
const User = require('../models/user')

function verifyToken(req, res, next) {
	if(!req.headers.authorization) {
		return res.status(401).send('Unauthorized request')
	}
	let token = req.headers.authorization.split(' ')[1]
	if(token === 'null') {
		return res.status(401).send('Unauthorized request')
	}
	let payload = jwt.verify(token, 'secretKey')
	if(!payload) {
		return res.send(401).send('Unauthorized request')
	}
	req.userId = payload.subject
	next()
}


router.post('/register',(req, res) => {
	User.findOne({email: req.body.email}, (error, user) => {
		if(user) {
			res.status(409).send("User already exist")
		}
		else {
			const password = req.body.password;
			const saltRounds = 10;
			bcrypt.hash(password, saltRounds, function(err, hash) {
				req.body.password = hash;
				let userData = req.body;
				let user = new User(userData)
				user.save((error, registeredUser) => {
					if(error) {
						console.log(error)
					}
					else {
						let payload = { subject : registeredUser._id}
						let token = jwt.sign(payload, 'secretKey')
						res.status(200).send({token})
					}
				})
			})
		}
	})
	
})

router.post('/login', (req, res) => {
	let userData = req.body;
	var password = userData.password;
	User.findOne({email: userData.email}, (error, user) => {
		if(error) {
			console.log(error)
		} else {
			if(!user) {
				res.status(400).send('Invalid email')
			} else {
				bcrypt.compare(password, user.password, function(err, result) {
					if(result == true) {
						let payload = { subject : user._id}
						let token = jwt.sign(payload, 'secretKey')
						res.send({token})
					}
					else {
						res.status(401).send('Invalid Password')
					}
				})

					
			}
		}
	})
})



module.exports = router









