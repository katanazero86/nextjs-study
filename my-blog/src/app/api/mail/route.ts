import { NextResponse } from 'next/server';
import {mailOptions, transporter} from "@/config/nodemailer";
import {mailFormSchema} from "@/validation-schma/mail-form";


export async function GET(request: Request) {
    return new Response('Hello, Mail!')
}

export async function POST(request: Request) {

    const data = await request.json();

    try {
        await mailFormSchema.validate(data);
    } catch (error: any) {
        console.error(error);
        return NextResponse.json({code: 500, message: error.message}, {
            status: 500,
            statusText: 'ValidationError'
        });
    }

    try {

        const options = {
            ...mailOptions
        };

        options.from = data.from;
        options.subject = data.subject;
        // options.text = data.text;
        options.html = `
        <p>보낸사람: ${data.from}</p>
        <h2>${data.subject}</h2>
        <pre>${data.text}</pre>
        `;

        const info = await transporter.sendMail(options);
        console.log(info);
    } catch (error: any) {
        console.error(error);
        return NextResponse.json({code: 500, message: error.message}, {
            status: 500,
            statusText: 'EmailSendError'
        });
    }

    return NextResponse.json({code: 200, message: 'success'}, {
        status: 200,
        statusText: 'success'
    });
}