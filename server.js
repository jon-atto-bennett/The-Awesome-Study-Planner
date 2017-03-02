var path = require('path')
var express = require('express')
var bodyParser = require('body-parser')
var routes = require('./routes')
var hbs = require('express-handlebars')

var app = express()


module.exports = app

app.use(bodyParser.urlencoded())

// Middleware
app.engine('hbs', hbs({
  extname: 'hbs',
  defaultLayout: 'main'
}))
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, '/views'))

// Routes
app.get('/home', routes.home)
app.get('/form', routes.form)
app.post('/form', routes.saveForm)
