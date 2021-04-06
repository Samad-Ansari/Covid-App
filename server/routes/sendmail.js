const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Contact = require('../models/contact')

const nodemailer = require('nodemailer');


router.post('/send', (req, res, next) => {
  var newContact = new Contact({
    name: req.body.name,
    email: req.body.email,
    phone : req.body.phone,
    message: req.body.message
   });


  const output = `
    <p>You have a new contact request</p>
    <h3>Contact Details</h3>
    <ul>  
      <li>Name: ${newContact.name}</li>
      <li>Email: ${newContact.email}</li>
      <li>Phone: ${newContact.phone}</li>

    </ul>
    <h3>Message</h3>
    <p>${newContact.message}</p>
  `;

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
        user: 'samad06june@gmail.com', // generated ethereal user
        pass: 'Samad*123#'  // generated ethereal password
    },
    tls:{
      rejectUnauthorized:false
    }
  });

  // setup email data with unicode symbols
  let mailOptions = {
      from: '"Covid-Care Contact :  " <samad06june@gmail.com>', // sender address
      to: 'samadbat2000@gmail.com', // list of receivers
      subject: 'Node Contact Request', // Subject line
      text: 'Hello world?', // plain text body
      html: output // html body
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
          return console.log(error);
      }
      console.log('Message sent: %s', info.messageId);   
  });
  newContact.save((err, contact) => {
    if(err){
      res.status(500).json({errmsg: err})
    } else {
      res.status(200).json({msg: contact});
    }
  })
})

router.get('/', function(req, res) {
  res.send('Hello Contact')
})


router.get('/read', (req, res, next) => {
  Contact.find({}, (err, contacts) => {
    if(err){
      res.status(500).json({errmsg: err})
    } else {
      res.status(200).json({msg : contacts});
    }
  })
})


router.delete('/delete/:id', (req, res, next) => {
  Contact.findOneAndRemove({_id: req.params.id}, (err, contact) => {
      if(err){
          res.status(500).json({errmsg: err})
        } else {
          res.status(200).json({msg : contact});
        }
  })
})




module.exports = router

