// Backend integration point for the contact form.
//
// Set VITE_INQUIRY_ENDPOINT in a .env file (e.g. VITE_INQUIRY_ENDPOINT=https://api.example.com/inquiries)
// and the form will POST JSON there. Until it is set, submissions are only simulated
// locally so the UI flow can be tested. Nothing is sent anywhere.

const ENDPOINT = import.meta.env.VITE_INQUIRY_ENDPOINT

export default async function submitInquiry(payload) {
  if (!ENDPOINT) {
    await new Promise((resolve) => setTimeout(resolve, 900))
    return { ok: true, simulated: true }
  }

  const res = await fetch(ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })
  if (!res.ok) throw new Error(`Request failed with status ${res.status}`)
  return { ok: true, simulated: false }
}
