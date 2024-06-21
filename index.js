// const a = 1;
// console.log(a, __dirname, __filename);
// setInterval(()=>{
//     console.log("hello")
// },1000);
// let data = require('./utils')

const sayHi = require('./functions')
// // const test = require('./functions')
// sayHi('name') 

// sayHi("name")

const os = require('os')

// console.log(os.type())

const path = require('path')
// console.log(path)

const filePath = path.join('/content/', 'sub', 'test.txt')

// console.log("filepath", path.basename(filePath))



const fs = require('fs')

// fs.writeFileSync('./text.txt', 'This is a file', {flag:'a'})
// const a = fs.readFileSync('./text.txt', 'utf8')
// console.log(a)

// fs.readFile('./text.txt', 'utf8', (err, result) => {
//     if (err) {
//         console.log(err)
//     } else {
//         console.log("abc", result)
//     }
// })

const http = require('http')
const server = http.createServer((req,res)=>{
//    if( req.url == '/'){
//     res.end('This is home page')
//    }else if( req.url == '/about'){
//     res.end('This is about page')
//    }else{
//     res.end('page not found')
//    }
    res.write(`<div style="color:red;">this is a server<div>`)
    res.end()
})
server.listen(5000)


//npm init
//npm init -y


// git init
//git remote add origin httfghjkl
// git branch -M main
// git push -u origin main










