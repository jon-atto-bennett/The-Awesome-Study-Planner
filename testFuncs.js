// var fs = require('fs')
// module.exports = {
//   addItem: addItem
// }
//
// var dataFile = './test.txt' //array
//
// function addItem(item, callback) {
//   var oldArrayString = (fs.readFileSync(dataFile, 'utf8') || "[]")
//   var oldArray = JSON.parse(oldArrayString)
//   oldArray.push(item)
//   fs.writeFile(dataFile, JSON.stringify(oldArray), function(err) {
//     callback(err)
//   })
// }
