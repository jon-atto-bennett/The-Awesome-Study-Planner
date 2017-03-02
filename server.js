var path = require('path')
var express = require('express')
var bodyParser = require('body-parser')
var routes = require('./routes')
var hbs = require('express-handlebars')

var app = express()
module.exports = app

app.use(bodyParser.urlencoded())


//routes
