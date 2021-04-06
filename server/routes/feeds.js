const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Feed = require('../models/feeds')



router.post('/create', (req, res, next) => {
  var newFeed = new Feed({
    title: req.body.title,
    author: req.body.author,
    newOne : req.body.newOne,
    content: req.body.content
   });
  newFeed.save((err, feed) => {
    if(err){
      res.status(500).json({errmsg: err})
    } else {
      res.status(200).json({msg: feed});
    }
  })
})



router.get('/read', (req, res, next) => {
  Feed.find({}, (err, feeds) => {
    if(err){
      res.status(500).json({errmsg: err})
    } else {
      res.status(200).json({msg : feeds});
    }
  })
})


router.put('/update', (req, res, next) => {
  Feed.findById(req.body._id, (err, feeds) => {
    if(err){
      res.status(500).json({ errmsg: err})
    }
    else {
      feeds.title = req.body.title;
      feeds.author = req.body.author;
      feeds.contact = req.body.content
      feeds.newOne = req.body.newOne;
      feeds.save((err, feed)=> {
        if(err){
          res.status(500).json({errmsg: err})
        } else {
          res.status(200).json({msg : feeds});
        }
      });
    }
  })
})


router.get('/:id', (req, res) => {
 Feed.findById(req.params.id, (err, feeds) => {
    if(err){
      res.status(500).json({ errmsg: err})
    }
    else {
      res.status(200).json(feeds);
    }
  })
})


router.delete('/delete/:id', (req, res, next) => {
  Feed.findOneAndRemove({_id: req.params.id}, (err, feed) => {
      if(err){
          res.status(500).json({errmsg: err})
        } else {
          res.status(200).json({msg : feed});
        }
  })
})

module.exports = router;