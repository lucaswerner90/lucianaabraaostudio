import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

async function createTestAccount() {
    const testAccount = await nodemailer.createTestAccount();
    return testAccount;
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const { body } = req;
    const account = await createTestAccount();
    const transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: account.user, // generated ethereal user
            pass: account.pass, // generated ethereal password
        },
    });

    const info = await transporter.sendMail({
        from: '"Luciana Abrao Studio" <hello@lucianaabraostudio.com>', // sender address
        to: "wernerlucas12@gmail.com", // list of receivers
        subject: "Product Info Requested", // Subject line
        text: "Hello world?", // plain text body
        html: `<b>${body.productId}</b>`, // html body
    });

    if(process.env.NODE_ENV !== 'production') {
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    }

    res.send(info.messageId);
}