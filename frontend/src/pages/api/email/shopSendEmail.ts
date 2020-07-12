import nodemailer from 'nodemailer';
import shopTemplate from './shopTemplate';


export default async function (body: { product: IProduct; email: string; description: string; name: string; }) {
    const product: IProduct = body.product;
    const transporter = nodemailer.createTransport(
        `smtps://${process.env.SHOP_EMAIL_USER}:${process.env.SHOP_EMAIL_PASSWORD}@mail.lucianaabraostudio.com`
    );
    const html = shopTemplate(
        product.thumbnail,
        product.id,
        product.title,
        body.name,
        body.email,
        body.description
    );
    const info = await transporter.sendMail({
        html,
        from: `Luciana Abraao Shop <${process.env.SHOP_EMAIL_USER}>`, // sender address
        to: [body.email], // list of receivers
        bcc: 'hello@lucianaabraostudio.com',
        subject: "Product Info Requested", // Subject line
        text: body.description, // plain text body
    });
    return info;
};