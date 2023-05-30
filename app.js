const fs = require("fs")
const StringDecoder = require("string_decoder").StringDecoder
let dir = fs.readdirSync("./views")
var buf = fs.readFileSync("./views/index.html")

fs.writeFile("./input.txt","Sahin Siraj",(err)=>{
    if(err) console.log(err)
})
