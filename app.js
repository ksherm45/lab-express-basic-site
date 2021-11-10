const express = require('express')
const app = express()
 
app.use(express.static(__dirname + './public'))

app.get('/landing', function (req, res) {
  

  console.log(__dirname +'/views/landing.html')
  res.sendFile(__dirname +'/views/landing.html')
  

})

app.get('/home', function (req, res) {
    
     res.sendFile(__dirname +'/views/home.html')
  })

  app.get('/about', function (req, res) {
   
   res.sendFile(__dirname +'/views/about.html')
  })
 
 
app.listen(3000)