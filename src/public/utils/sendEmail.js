const sgMail = require('@sendgrid/mail')
const validator = require('validator')
const yourEmail = 'directorservices@terraglen.ie'

sgMail.setApiKey(process.env.SENDGRID_API_KEY)


const sendMail = async (name, email, phone, subject, message) => {
    try {
        const msg = {
            to: yourEmail,
            from: email,
            subject,
            text: message,
        }

        await sgMail.send(msg)

    } catch (ResponseError) {
        if(!validator.isEmail(email)){
            throw new Error('Email is invalid')
        }
        else{
            throw new Error('Internal server error. Please contact ' + yourEmail + ' directly')
        }
        
    }
}


module.exports = sendMail