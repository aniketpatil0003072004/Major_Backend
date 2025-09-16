const nodemailer = require("nodemailer")

const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SEND_GRID_KEY)

const sendMail = async (message, to) => {



const msg = {
  to: to, 
  from: 'aniketpatil032004@gmail.com', 
  subject: 'Entry Token Proctor AI',
  text: message,
  html: `<strong>${message}</strong>`,
}

sgMail
  .send(msg)
  .then(() => {
    console.log('Email sent')
  })
  .catch((error) => {
    console.error(error)
  })


}

module.exports = sendMail;

