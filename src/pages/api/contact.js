import { mailOptions, transporter, generateEmailMessage } from '@/config/nodemailer'

export default async function handler (req, res) {
  if (req.method === 'POST') {
    const data = req.body
    if (!data.name || !data.email || !data.message || !data.subject) {
      return res.status(400).json({ message: 'Bad request' })
    }
    try {
      await transporter.sendMail({
        ...mailOptions,
        subject: data.subject,
        ...generateEmailMessage(data)
      })
      return res.status(200).json({ success: true })
    } catch (error) {
      return res.status(400).json({ message: error.message })
    }
  }
  return res.status(400).json({ message: 'Bad request' })
}
