import { Resend } from 'resend';

const resend = new Resend('re_RBEXVEGd_FX3ViyseckCHuuMjERMitBrx');

await resend.emails.send({
  from: 'Acme <onboarding@resend.dev>',
  to: ['meyer.sanchez3000@gmail.com'],
  subject: 'This is a subject',
  text: 'This is a content!',
  headers: {
    'X-Entity-Ref-ID': '123456789',
  },
  tags: [
    {
      name: 'category',
      value: 'confirm_email',
    },
  ],
})
  .then(() => console.log("Email sent successfully"));




