const fs = require('fs')
//with encoadig 'utf-8' 
//return text
let txt =fs.readFileSync('./input.txt','utf-8')
//without encoding type
//return buffer
let buf =fs.readFileSync('./input.txt',)
console.log(txt)