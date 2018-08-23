var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'automataaug2018@gmail.com',
    pass: 'Auto@2018'
  }
});

var mailOptions = {
  from: 'automataaug2018@gmail.com',
  to: 'autodroid2018@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
