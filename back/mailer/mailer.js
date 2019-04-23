const express = require('express');
const ejs = require('ejs');
const nodeMailer = require('nodemailer');
const fs = require('fs');
const path = require('path');

const app = express();

app.set('view engine', 'ejs');

// Email Generator
// props is an object with variables: name,mail,items,to,subject

let render;
let template;

// Form Data Handling
function mailer (type, props) {
  console.log('PROPS', props.content);
  switch (type) {
    case 'candidate':
      template = fs.readFileSync(path.join(__dirname, '../public/Templates/mailExport.ejs'), ('utf-8'));
      render = ejs.render(template, props.content);
      break;
    default:
  }

  // Connects to the channel trough which the mail will be sent.
  const transporter = nodeMailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: 'endavaproject@gmail.com',
      pass: 'endavajuan'
    }
  });

  // The email data will be taken from the body sent from the front and parsed.
  const mailOptions = {
    from: '"Interviews - Endava" <RRHH@endava.com>', // sender address (what the receiver sees)
    to: props.data.mail, // list of receivers
    subject: props.data.subject, // Subject line
    html: render
  };

  // Final Status Report
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.error(error);
    }
    console.log('Message %s sent: %s', info.messageId, info.response);
  });
}

module.exports = mailer;
