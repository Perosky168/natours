// const { SESClient, SendEmailCommand } = require("@aws-sdk/client-ses");

// // Create SES client
// const ses = new SESClient({
//   region: process.env.AWS_REGION,
//   credentials: {
//     accessKeyId: process.env.AWS_ACCESS_KEY_ID,
//     secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
//   },
// });

// // Set email parameters
// const params = {
//   Destination: {
//     ToAddresses: ["ogunbanjopeter8@gmail.com"],
//   },
//   Message: {
//     Body: {
//       Html: {
//         Data: "<html><body><h1>Hello World!</h1></body></html>",
//       },
//     },
//     Subject: {
//       Data: "Test email",
//     },
//   },
//   Source: "ogunbanjopetet10@gmail.com",
// };

// // Send email using SES
// async function sendEmail() {
//   try {
//     const data = await ses.send(new SendEmailCommand(params));
//     console.log("Email sent: ", data.MessageId);
//   } catch (err) {
//     console.error(err, err.stack);
//   }
// }

// export const emailSender = new Email();

// sendEmail();


const { SESClient, SendEmailCommand } = require("@aws-sdk/client-ses");

class Email {
  constructor(
    accessKeyId = process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY,
    region = process.env.AWS_REGION
  ) {
    this.client = new SESClient({
      region: region,
      credentials: {
        accessKeyId: accessKeyId,
        secretAccessKey: secretAccessKey,
      },
    });
  }

  async sendEmail(params) {
    const { to, subject, message } = params;
    const emailParams = {
      Destination: {
        ToAddresses: to,
      },
      Message: {
        Body: {
          Html: {
            Data: message,
          },
        },
        Subject: {
          Data: subject,
        },
      },
      Source: process.env.EMAIL_FROM,
    };

    try {
      const data = await this.client.send(new SendEmailCommand(emailParams));
      console.log("Email sent: ", data.MessageId);
    } catch (err) {
      console.error(err);
    }
  }
}

const emailSender = new Email();

module.exports = emailSender;
