const fs = require('node:fs');
fs.readFile('file.txt', 'utf8', (err , data) => {
    console.log(err,data)
})
const a = fs.readFileSync('file.txt')
console.log(a.toString())

fs.writeFile('file2.txt', 'Its a data file ',()=>{
    console.log('file created')
})

const b = fs.writeFileSync('file2.txt', 'Its a data2 file ')
console.log(b)
console.log("Finished !!!!!!!!!!");