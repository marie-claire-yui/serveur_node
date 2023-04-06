const express = require('express')
const app = express()
const port = 3000
const morgan = require('morgan')

app.use(express.static('public'))
app.use(morgan('dev'))


// app.use((req,res, next) => {
//     console.log('Requête effectuée: ' + Date().toString());
//     next()
// })

app.get('/home', function (req, res) { // equivalent du else if
//   res.send('Hello World')
res.status(200).sendFile('./HTML/index.html',{root:__dirname})
})

app.get('/profil', function (req, res) {
    res.status(200).sendFile('./HTML/profil.html',{root:__dirname})
    })

app.get('/contact', function (req, res) {
    res.status(200).sendFile('./HTML/contact.html',{root:__dirname})
    })

app.get('/product', function (req, res) {
    res.status(200).sendFile('./HTML/product.html',{root:__dirname})
    })

app.get('/', function (req, res) { 
res.status(301).redirect('/home')
})


app.use((req,res)=>{ // equivalent du else , ceci s'appelle un middleware
    res.status(404).sendFile('./HTML/404.html',{root:__dirname})
})

// essaie tous les get, si ne rentre pas dans les get rentre dans le use

app.listen(port, () => { 
    console.log("Server listening on port "+port);
})
