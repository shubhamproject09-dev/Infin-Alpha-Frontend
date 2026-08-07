import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        const body = await req.json();

        const { name, email, phone, message } = body;

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
            tls: {
                rejectUnauthorized: false,
            },
        });

        await transporter.verify();
        console.log("SMTP Connected Successfully");

        // 1. Auto Reply to User
        await transporter.sendMail({
            from: `"INFIN ALPHA LLP" <${process.env.SMTP_USER}>`,
            to: email,
            subject: "Thank you for contacting INFIN ALPHA LLP",

            html: `
        <div style="font-family:Arial,sans-serif;padding:20px">
            <h2>Thank You, ${name}!</h2>

            <p>We have successfully received your enquiry.</p>

            <p>
                Our team will review your message and get back to you
                as soon as possible.
            </p>

            <hr/>

            <h3>Your Submitted Details</h3>

            <p><b>Name:</b> ${name}</p>
            <p><b>Email:</b> ${email}</p>
            <p><b>Phone:</b> ${phone}</p>
            <p><b>Message:</b></p>

            <p>${message}</p>

            <br/>

            <p>
                Regards,<br/>
                <b>INFIN ALPHA LLP</b>
            </p>
           
            <hr style="margin:30px 0;border:none;border-top:1px solid #e5e5e5;">

<div style="background:#f8f9fa;padding:20px;border-radius:10px">

    <h2 style="margin:0;color:#009A9E">
        INFIN ALPHA LLP
    </h2>

    <p style="margin:12px 0;color:#555">
        Thank you for contacting us. Our team will get back to you shortly.
    </p>

    <table cellpadding="5" cellspacing="0">
        <tr>
            <td><b>📍 Address</b></td>
            <td>
                A-3, 1st Floor South Tower,<br>
                Girdhar Apartments,<br>
                28 Firozeshah Road,<br>
                New Delhi - 110001
            </td>
        </tr>

        <tr>
            <td><b>📧 Email</b></td>
            <td>info@infinalpha.com</td>
        </tr>

        <tr>
            <td><b>🌐 Website</b></td>
            <td>https://infinalpha.com</td>
        </tr>

        <tr>
            <td><b>📞 Phone</b></td>
            <td>+91 XXXXXXXXXX</td>
        </tr>
    </table>

    <p style="margin-top:20px;font-size:12px;color:#888">
        This is an automated email from INFIN ALPHA LLP.
        Please do not reply to this email.
    </p>

</div>
        </div>
    `,
        });


        // 2. Send enquiry to Admin
        await transporter.sendMail({
            from: `"Website Contact Form" <${process.env.SMTP_USER}>`,
            to: process.env.MAIL_TO,
            replyTo: email,
            subject: "New Contact Form Enquiry",

            html: `
        <h2>New Contact Enquiry</h2>

        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Message:</b></p>

        <p>${message}</p>
    `,
        });

        return NextResponse.json(
            {
                success: true,
                message: "Mail Sent Successfully",

                data: {
                    name,
                    email,
                    phone,
                    message,
                    date: new Date().toISOString(),
                },
            },
            { status: 200 }
        );

    } catch (err) {

        return NextResponse.json({
            success: false,
            message: err.message,
        }, { status: 500 });

    }
}