"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const nodemailer_1 = __importDefault(require("nodemailer"));
const transporter = nodemailer_1.default.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.SMTP_EMAIL,
        pass: process.env.SMTP_PASS,
    },
});
exports.GetHome = (req, res) => {
    res.render('index');
};
exports.PostEmail = (req, res) => {
    const mailOptions = {
        from: process.env.SMTP_EMAIL,
        to: 'bevansj01@gmail.com',
        subject: 'Website Enquiry',
        text: req.body['content'] + '\nSent By: ' + req.body['return'],
    };
    transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
            console.log('Error:');
            console.log(err);
            return res.render('index', { error: err.message });
        }
        console.log(info);
    });
    return res.render('index');
};
exports.GetCV = (req, res) => {
    const CVPath = `${__dirname}/../public/uploads/CV.docx`;
    // const CVPath =
    //  '/home/bean/Documents/dev/web/portfolio/dist/public/uploads/CV.docx';
    return res.download(CVPath);
    //console.log(CVPath);
    //res.redirect('/');
};
