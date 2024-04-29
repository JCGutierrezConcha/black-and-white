import nodemailer from 'nodemailer'

const enviarMail = async (req, res) => {
    try {
        const transport = nodemailer.createTransport({
            host: "sandbox.smtp.mailtrap.io",
            port: 2525,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        });

        await transport.sendMail({
            from: '"Maddison Foo Koch 👻" <maddison53@ethereal.email>', // sender address
            to: "bar@example.com, baz@example.com", // list of receivers
            subject: "Hello ✔", // Subject line
            //text: "Hello world?", // plain text body
            html: "<b>Hello world?</b>", // html body
        });

        return res.json({ ok: true })
    }

    catch (error) {
        console.log(error)
        return res.status(500).json({ ok: false })
    }
}

export const emailController = {
    enviarMail
}