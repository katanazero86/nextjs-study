import nodemailer from 'nodemailer';

const EMAIL = 'katanazero86@gmail.com';
const EMAIL_PASS = 'isvmqmeprmoyenkj';

export const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587, // SMTP 포트는 옛 방식이 25, TLS 가 적용된 587, 465 는 현재 사용 중단이라고 함.
    secure: false,
    auth: {
        user: EMAIL,
        pass: EMAIL_PASS
    }
});

export const mailOptions = Object.seal({
    from: '', // 보내는 사람
    to: EMAIL, // 받는 사람
    subject: '', // 제목
    html: '', // html
    text: '', // text
    attachments: []
});