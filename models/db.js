const fs = require('fs')

const db = JSON.parse(fs.readFileSync(__dirname + '/data.json'))

setInterval(() => {
  fs.writeFile('./data.json', JSON.stringify(db), err => {
    if (err) console.error(err)
  })
}, 60000)

module.exports = db
