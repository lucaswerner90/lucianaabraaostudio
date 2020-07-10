import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';
import shopTemplate from './shopTemplate';

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const { body } = req;
    const product: IProduct = body.product;
    const transporter = nodemailer.createTransport({
        host: "mail.lucianaabraostudio.com",
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
            user: process.env.SHOP_EMAIL_USER,
            pass: process.env.SHOP_EMAIL_PASSWORD
        },
    });
    try {
        const info = await transporter.sendMail({
            from: `Luciana Abraao Shop <${process.env.SHOP_EMAIL_USER}>`, // sender address
            to: body.email, // list of receivers
            bcc: 'hello@lucianaabraostudio.com',
            subject: "Product Info Requested", // Subject line
            text: body.description, // plain text body
            html: shopTemplate(product.thumbnail, product.id, product.title, body.name, body.email, body.description)
        });
        res.status(200).send(info.messageId);
    } catch (error) {
        console.error(error)
        res.status(500).send({ error });
    }

}