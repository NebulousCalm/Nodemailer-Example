var nodemailer = require('nodemailer');
const emails = [/* Email List Goes Here */];

emails.forEach(emails);

function sendEmail(item){
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: /* google username */,
      pass: /* google password for said username */
    }
  });
  
  var mailOptions = {
    from: myEmail,
    to: item,
    subject: 'Subject Goes Here',
    text: 'Actual email goes here'
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email Successfully sent...');
    }
  });
}

/* Some safety settings may need to be disabled on your account, do this at your own risk */