const express = require('express')
const mongoClient = require('mongodb').MongoClient
const bodyparser = require('body-parser')
const cookieparser = require('cookie-parser')
const orm = require('./orm')

const router = require('./src/router/MainRouter')
const app = express()
const port = 4242

app.set('view engine', 'pug')

orm.connect(() => {
	app.listen(port, () => {
		console.log("Server running on " + port)
	})
})

app.use(cookieparser());
app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json());

app.use(router)