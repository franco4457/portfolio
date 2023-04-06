export const sendContactForm = async (data) => await fetch('api/contact', {
  method: 'POST',
  body: JSON.stringify(data),
  headers: {
    'content-type': 'application/json',
    accept: 'application/json'
  }
}).then(res => {
  if (!res.ok) throw new Error('Failed to send contact form')
  return res.json()
})
