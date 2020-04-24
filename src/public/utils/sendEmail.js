const sgMail = require('@sendgrid/mail')
const validator = require('validator')
const yourEmail = 'james.oneill57@mail.dcu.ie'

sgMail.setApiKey(process.env.SENDGRID_API_KEY)


const sendMail = async (name, email, phone, subject, message) => {
    if(validator.isEmail(email)){
        const msg = {
            to: yourEmail,
            from: email,
            subject,
            text: message,
        }
    
    await sgMail.send(msg)
    }

    else{
        throw new Error('Email is invalid')
    }
}


module.exports = sendMail