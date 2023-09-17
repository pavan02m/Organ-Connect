const express = require("express")
const nodemailer = require("nodemailer")
const Mailgen = require("Mailgen")
const app = express();

const sendmail = async (req) => {

    let config = {
        service: 'gmail',
        auth: {
            user: "mohit232523sharma@gmail.com",
            pass: "zjmtpxdljxbawscd"
        }
    }

    let transporter = nodemailer.createTransport(config);

    let MailGenerator = new Mailgen({
        theme: "default",
        product: {
            name: "Organ Connect",
            link: 'https://mailgen.js/'
        }
    })
    let message;
    if (req[0] === "Receipient") {
        let response = {
            body: {
                name: req[1],
                intro: "Hey !! We found a matching Donor for you.Login to the website to check further",
            }
        }

        let mail = MailGenerator.generate(response)

        message = {
            from: "mohit232523sharma@gmail.com",
            to: req[2],
            subject: "We found a recepient for u",
            html: mail
        }
    } else if (req[0] === "Medical") {
        let response = {
            body: {
                name: req[1],
                intro: "Hey !! you cannot donate the organ.",
            }
        }

        let mail = MailGenerator.generate(response)

        message = {
            from: "mohit232523sharma@gmail.com",
            to: req[2],
            subject: "We found a recepient for u",
            html: mail
        }
    }
    await transporter.sendMail(message).then(() => {
        console.log("senttttt")
    }).catch(error => {
        console.log(error)
    })
}

module.exports = { sendmail }