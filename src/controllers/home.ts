import {Request, Response} from 'express';
import nodemailer from 'nodemailer';
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.SMTP_EMAIL,
    pass: process.env.SMTP_PASS,
  },
});

export const GetHome = (req: Request, res: Response) => {
  res.render('index');
};

export const PostEmail = (req: Request, res: Response) => {
  const mailOptions = {
    from: process.env.SMTP_EMAIL,
    to: 'bevansj01@gmail.com',
    subject: 'Website Enquiry',
    text: req.body['content'] + '\nSent By: ' + req.body['return'],
  };

  transporter.sendMail(mailOptions, (err: any, info: any) => {
    if (err) {
      console.log('Error:');
      console.log(err);
      return res.render('index', {error: err.message});
    }
    console.log(info);
  });
  return res.render('index');
};

export const GetCV = (req: Request, res: Response) => {
  const CVPath = `${__dirname}/../public/uploads/CV.docx`;
  // const CVPath =
  //  '/home/bean/Documents/dev/web/portfolio/dist/public/uploads/CV.docx';
  return res.download(CVPath);
  //console.log(CVPath);
  //res.redirect('/');
};
