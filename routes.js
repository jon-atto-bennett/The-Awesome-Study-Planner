var fs = require('fs')

module.exports = {
  home: home,
  form: form,
  saveForm: saveForm
}

function home (req, res) {
  // get the data out of the planner.txt

  var plannerDataString = fs.readFileSync('./planner.txt').toString()
  var plannerData = JSON.parse(plannerDataString)
  console.log(typeof plannerData);
  // give the data to the template to be rendered
    res.render('home', {
      plannerData: plannerData

    })
}

function form (req, res) {
  res.render('form')
}

function saveForm (req, res){

  var entriesString = fs.readFileSync('./planner.txt').toString()
  var entries = JSON.parse(entriesString)

  entries.push(req.body)

  fs.writeFile('./planner.txt', JSON.stringify(entries), function(err){
    console.log(entries);
    res.redirect('/home')

  })

}
