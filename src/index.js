const hbs = require('hbs')
const express = require('express')
const path = require('path')
const sendEmail = require('./public/utils/sendEmail')

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

app.post('/', async (req,res)=>{
    const {name, email, phone, subject, message} = req.body
    try {
        await sendEmail(email, phone, subject, message)
        res.render('success')

    } catch (error) {
        res.send('Bad request')
    }
        
})


app.listen(port, ()=>{
    console.log('Server running on port',port)
})