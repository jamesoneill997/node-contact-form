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

//Load document
app.get('/', (req, res) => {
    res.render('index')
})


//submit data through form
app.post('/', async (req,res)=>{
    const {name, email, phone, subject, message} = req.body
    console.log(req.body)
    try {
        await sendEmail(name, email, phone, subject, message)
        res.render('index',{
            success: 'Success!'
        })

    } catch (error) {
        if(error.message ==='Email is invalid'){
        res.render('index',{
            response: error,
            name,
            phone,
            subject,
            message
        })
    }
    else{
        res.render('index',{
            response: error,
            email,
            name,
            phone,
            subject,
            message
        })
    }


    }
        
})


app.listen(port, ()=>{
    console.log('Server running on port',port)
})