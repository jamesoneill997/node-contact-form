const hbs = require('hbs')
const express = require('express')
const path = require('path')

const port = process.env.PORT || 3000
const publicPath = path.join(__dirname, './public')
const viewsPath = path.join(__dirname, './views')

const app = express()

app.use(express.urlencoded())
app.use(express.static(publicPath))
app.set('view engine','hbs')


app.get('/', (req, res) => {
    res.render('index', {
        type: 'GET'
    })
})

app.post('/',(req,res)=>{
    const {name, email, phone, subject, message} = req.body
    console.log(req.body)
    res.send('Received')
})


app.listen(port, ()=>{
    console.log('Server running on port',port)
})