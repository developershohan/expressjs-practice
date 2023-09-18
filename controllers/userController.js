import nodemailer from "nodemailer"

export const registerUser = async (req,res)=>{

    const transport = nodemailer.createTransport({
        host: process.env.MAIL_HOST,
        port: process.env.MAIL_PORT,
        auth:{
            user: process.env.MAIL_ADDRESS,
            pass: process.env.MAIL_PASS,

        },
    });

await transport.sendMail({
    from:`shohan LTD <${process.env.MAIL_ADDRESS}>`,
    subject: "test email",
    to: req.body.email,
    text: `Hello ${req.body.name},
    <br>
    welcome, you are ${req.body.age} years old

    `
})

    res.status(200).json(req.body)
}