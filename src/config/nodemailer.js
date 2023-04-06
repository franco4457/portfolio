import nodemailer from 'nodemailer'

const email = process.env.EMAIL
const pass = process.env.EMAIL_PASS

export const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: email,
    pass
  }
})

export const mailOptions = {
  to: email,
  from: email
}

const CONTENT_MESSAGE_FIELDS = {
  name: 'Name',
  email: 'Email',
  subject: 'Subject',
  message: 'Message'
}

export const generateEmailMessage = (data) => {
  const text = Object.entries(data).reduce(
    (str, [key, val]) =>
      (str += `${CONTENT_MESSAGE_FIELDS[key]}: \n ${val} \n \n`),
    ''
  )
  const html = Object.entries(data).reduce(
    (str, [key, val]) =>
      (str += `<h1>${CONTENT_MESSAGE_FIELDS[key]}<h1>\n  <p>${val}<p>`),
    ''
  )
  return {
    text,
    html
  }
}
