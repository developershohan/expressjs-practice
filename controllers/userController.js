import nodemailer from "nodemailer"

export const registerUser = async (req, res) => {
    // create mail transport
    const transport = nodemailer.createTransport({
        host: process.env.MAIL_HOST,
        port: process.env.MAIL_PORT,
        auth: {
            user : process.env.MAIL_ADRESS,
        pass: process.env.MAIL_PASS,

        }
    })
     await   transport.sendMail({
        from: `JakaNaka Group <${process.env.MAIL_ADRESS}>`,
        subject: "JakaNaka Test",
        to: req.body.email,
       text: `hello ${req.body.name},
  
       You are ${req.body.age} Years old

       `
        }),


       
       
        res.status(200).json(req.body)
}