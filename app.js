// CommonJS, every file is module (by default) - node js use commonJS under the hood
// Module - Encapsulated Code (only share minimum)

//When a module is imported no matter what it will get executed


// path.resolve() to use absolute path

// fs module - read and write file

// sync and async fs - for async either use promise or async-await

//http module : setup a web server

//npm - global command comes with node installation
// npm --version : to check the npm version

//local dependency - use in a particular project - npm i <package name>
// global dependency - use in any project - npm install -g <package name>

//npx is widely used now a days



const http = require('http')

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Welcome to our homepage')
    }
    if (req.url === '/about') {
        res.end('Here is our short history')
    }
    res.end(`
    <h1>Oops!</h1>
<p> No page found</p>
<a href = "/">Back to home</a>`)
})

server.listen(5000)