// const nodemailer = require("nodemailer")
// require("dotenv").config()


// module.exports = async (user, subject, text) => {
//     try {
//         console.log("inside email sending");
//         let transporter = nodemailer.createTransport({

//             host: process.env.HOST,
//             port: process.env.MAILPORT,
//             service: process.env.SERVICE,
//             secure: false,
//             auth: {
//                 user: 'eemankamil979@gmail.com',
//                 pass: 'hphhutnjqfhqqlng'
                
//             },
//             tls: {
//                 rejectUnauthorized: false
//             }
//         })

//         await transporter.sendMail({

//             from: process.env.USER,
//             to: user,
//             subject: subject,
//             text: text

//         })
//         console.log(" email sent successfully");
//     } catch (error) {
//         console.log('email not sent');
//         console.log(error)
//     }
// }

const nodemailer = require("nodemailer");
require("dotenv").config();

module.exports = async (user, subject, text) => {
    try {
        console.log("Inside email sending");
        
        // Log SMTP configuration
        console.log("SMTP Configuration:");
        console.log("Host:", process.env.HOST);
        console.log("Port:", process.env.MAILPORT);
        console.log("Service:", process.env.SERVICE);
        console.log("User:", process.env.USER);
        
        let transporter = nodemailer.createTransport({
            host: process.env.HOST,
            port: process.env.MAILPORT,
            service: process.env.SERVICE,
            secure: false,
            auth: {
                user: 'eemankamil979@gmail.com',
                pass: 'hphhutnjqfhqqlng'
            },
            tls: {
                rejectUnauthorized: false
            }
        });

        // Log email details
        console.log("Email Details:");
        console.log("From:", process.env.USER);
        console.log("To:", user);
        console.log("Subject:", subject);
        console.log("Text:", text);

        await transporter.sendMail({
            from: process.env.USER,
            to: user,
            subject: subject,
            text: text
        });

        console.log("Email sent successfully");
    } catch (error) {
        console.log("Email not sent. Error:", error);
    }
};