# Nodemailer-Example
>Example code for the nodejs `nodemailer` api

### First
> Install nodejs

### Install nodemailer
> `npm install nodemailer`

### Add code
> ```js 
> var nodemailer = require('nodemailer');
>const emails = [/* Email List Goes Here */];
>
>emails.forEach(emails);
>
>function sendEmail(item){
>  var transporter = nodemailer.createTransport({
>    service: 'gmail',
>    auth: {
>      user: /* google username */,
>      pass: /* google password for said username */
>    }
>  });
>  
>  var mailOptions = {
>    from: /* Your Email */,
>    to: emails,
>    subject: 'Subject Goes Here',
>   text: 'Actual email goes here'
>  };
> 
> transporter.sendMail(mailOptions, function(error, info){
>    if (error) {
>      console.log(error);
>
>    } else {
>      console.log('Email Successfully sent...');
>    }
>  });
>}
>
>/* Some safety settings may need to be disabled on your account, do this at your own risk */
>```

### Find and replace
> Now you need to replace anything inside comments with the data necessary
> ###### For arrays write them inside the brackets: 
> ```python
> "emailone", "emailtwo", "emailthree"
> ```
###### Slightly modified code from w3schools.com
