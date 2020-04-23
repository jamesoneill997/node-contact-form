const sgMail = require('@sendgrid/mail')
const yourEmail = 'james.oneill57@mail.dcu.ie'

sgMail.setApiKey(process.env.SENDGRID_API_KEY)


const sendMail = async (name, email, phone, subject, message) => {
    const msg = {
        to: yourEmail,
        from: email,
        subject,
        text: message,
    }

    await sgMail.send(msg)
}


module.exports = sendMail