import { inquiryDelivery } from '../data/content.js'

// Delivery of contact-form inquiries.
//
// EMAIL: posted to FormSubmit (https://formsubmit.co), a no-backend form-to-email service.
//   One-time setup: after the site is live, submit the form once. FormSubmit emails an
//   activation link to the address below. Click it, and every later inquiry arrives by email.
//   To use your own backend instead, set VITE_INQUIRY_ENDPOINT in .env.
//
// WHATSAPP: see buildWhatsAppUrl(). It opens WhatsApp with the inquiry typed out.

const CUSTOM_ENDPOINT = import.meta.env.VITE_INQUIRY_ENDPOINT
const ENDPOINT = CUSTOM_ENDPOINT || `https://formsubmit.co/ajax/${inquiryDelivery.email}`

export default async function submitInquiry(values) {
  const res = await fetch(ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({
      name: values.name,
      email: values.email,
      phone: values.phone || 'Not provided',
      service: values.service,
      message: values.message,
      _subject: `New inquiry from ${values.name}: ${values.service}`,
      _replyto: values.email,
      _template: 'table',
      _captcha: 'false',
    }),
  })
  if (!res.ok) throw new Error(`Request failed with status ${res.status}`)
  const data = await res.json().catch(() => ({}))
  if (data.success === 'false' || data.success === false) throw new Error(data.message || 'Delivery failed')
  return { ok: true }
}

export function buildWhatsAppUrl(values) {
  const text = [
    'New inquiry from the Circunix Tech website',
    '',
    `Name: ${values.name}`,
    `Email: ${values.email}`,
    `Phone: ${values.phone || 'Not provided'}`,
    `Service: ${values.service}`,
    '',
    `Project: ${values.message}`,
  ].join('\n')
  return `https://wa.me/${inquiryDelivery.whatsappNumber}?text=${encodeURIComponent(text)}`
}
