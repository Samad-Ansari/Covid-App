const express = require('express')
const app = express();
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const PORT = process.env.Port || 3000
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
const feedRouter = require('./routes/feeds')
const sendmailRouter = require('./routes/sendmail')
const userRouter = require('./routes/user')

const URI = 'mongodb+srv://Samad:SamadAnsari@cluster0.u1dtj.mongodb.net/eventsdb?retryWrites=true&w=majority';
mongoose.connect(URI,  {
	  useNewUrlParser: true,
	  useUnifiedTopology: true, useFindAndModify: false  }, 
	  err => {
	  	if(err) {
	  		console.error('Error ' + err);
	  	} else {
			console.log('Mongodb connected');
	  	}
});


app.use(cors())
app.use(bodyParser.json())
app.use(express.urlencoded({ extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')))
app.use('/feeds', feedRouter)
app.use('/contact', sendmailRouter)
app.use('/user', userRouter)
app.get('/', function(req, res) {
	res.send('Hello')
})

app.listen(PORT, function(){
	console.log('Server running on localhost: 3000')
})
