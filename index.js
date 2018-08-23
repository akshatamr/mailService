'use strict';
const nodemailer = require('nodemailer');

nodemailer.createTestAccount((err, account) => {
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
       host: 'smtp.ethereal.email',
       port: 587,
       secure: false, // true for 465, false for other ports
       auth: {
            user: 'automataaug2018@gmail.com', // generated ethereal user
            pass: 'Auto@2018' // generated ethereal password
        }
    });
    
   // setup email data with unicode symbols
    let mailOptions = {
        from: 'automataaug2018@gmail.com', // sender address
        to: 'autodroid2018@gmail.com', // list of receivers
        subject: 'Hello from eGreen', // Subject line
        text: 'Hello people from eGreen', // plain text body
        html: '<b>Hello people</b>' // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        // Preview only available when sending through an Ethereal account
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    });
});
