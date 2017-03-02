var fs = require('fs')

module.exports = {
  home: home,
  form: form,
  saveForm: saveForm
}

function home (req, res) {
  res.render('home')
}

function form (req, res) {
  res.render('form')
}

function saveForm (req, res){

  var nameString = fs.readFileSync('./planner.txt').toString()
  var names = JSON.parse(nameString)

  names.push(req.body)
  
  fs.writeFile('./planner.txt', JSON.stringify(names), function(err){
    console.log(names);
        res.redirect('/home')

  })

}
