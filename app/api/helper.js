import { SESClient, SendEmailCommand } from '@aws-sdk/client-ses';

const sesClient = new SESClient({
  region: 'ap-south-1', // e.g., 'us-east-1'
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

export const sendEmail = async (name, email, message) => {
    console.log("Parsed data inside send email------------",name, email, message)
    const toAddresses=["kabilh89@gmail.com"]
    if(subject==undefined){
      var subject= "New message from portfolio"
    }
    const body = `
    <html>
    <head>
      <style>
        body {
          font-family: Arial, sans-serif;
          color: #333;
          line-height: 1.5;
        }
        .container {
          width: 100%;
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
          background-color: #f9f9f9;
          border: 1px solid #ddd;
        }
        .header {
          background-color: #007bff;
          color: white;
          padding: 10px;
          text-align: center;
        }
        .content {
          margin-top: 20px;
        }
        .footer {
          margin-top: 20px;
          font-size: 12px;
          color: #777;
          text-align: center;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>Contact Form Submission</h1>
        </div>
        <div class="content">
          <p>Hello,</p>
          <p>You have received a new contact form submission from your portfolio application.</p>
          <p><strong>Name:</strong>${name}</p>
          <p><strong>Email:</strong>${email}</p>
          <p><strong>Message:</strong>${message}</p>
        </div>
        <div class="footer">
          <p>This is an automated message from your portfolio application.</p>
        </div>
      </div>
    </body>
    </html>
  `;

  const params = {
    Source: 'kabilh89@gmail.com',
    Destination: {
      ToAddresses: toAddresses,
    },
    Message: {
      Subject: {
        Data: subject,
      },
      Body: {
        Html: {
          Data: body,
        },
      },
    },
  };

  try {
    const command = new SendEmailCommand(params);
    const response = await sesClient.send(command);
    console.log('Email sent successfully:', response);
    return response;
  } catch (error) {
    console.error('Error sending email:', error);
    return error
  }
};