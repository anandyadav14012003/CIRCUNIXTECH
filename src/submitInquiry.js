import { inquiryDelivery } from '../data/content.js'

// Inquiry delivery without a backend.
// On submit, the client's own email app opens with the inquiry pre-written to our address,
// and the client presses Send. A WhatsApp link with the same text is offered as well.

function inquiryLines(values) {
  return [
    `Name: ${values.name}`,
    `Email: ${values.email}`,
    `Phone: ${values.phone || 'Not provided'}`,
    `Service: ${values.service}`,
    '',
    'Project description:',
    values.message,
  ]
}

export function buildMailtoUrl(values) {
  const subject = `New inquiry from ${values.name}: ${values.service}`
  const body = ['Hello Circunix Tech,', '', ...inquiryLines(values)].join('\r\n')
  return `mailto:${inquiryDelivery.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}

export function buildWhatsAppUrl(values) {
  const text = ['New inquiry from the Circunix Tech website', '', ...inquiryLines(values)].join('\n')
  return `https://wa.me/${inquiryDelivery.whatsappNumber}?text=${encodeURIComponent(text)}`
}
