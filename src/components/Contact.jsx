import { useRef, useState } from 'react'
import Icon, { BrandIcon } from './Icons.jsx'
import Reveal from './Reveal.jsx'
import SectionHeading from './SectionHeading.jsx'
import { contactInfo, serviceOptions, socials } from '../data/content.js'
import { buildGmailUrl, buildMailtoUrl, buildWhatsAppUrl } from '../services/submitInquiry.js'

const initialValues = { name: '', email: '', phone: '', service: '', message: '' }

function validate(v) {
  const errors = {}
  if (v.name.trim().length < 2) errors.name = 'Please enter your full name.'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.email.trim())) errors.email = 'Please enter a valid email address.'
  // Phone is optional, but if given it must look like a phone number.
  if (v.phone.trim() && !/^\+?[0-9\s().-]{7,20}$/.test(v.phone.trim())) {
    errors.phone = 'Please enter a valid phone number.'
  }
  if (!v.service) errors.service = 'Please select a service.'
  if (v.message.trim().length < 20) errors.message = 'Please describe your project in at least 20 characters.'
  return errors
}

const fieldBase =
  'w-full rounded-xl border bg-ink-900/70 px-4 py-3.5 text-sm text-white placeholder:text-slate-500 transition-colors focus:border-brand-indigo focus:outline-none focus:ring-2 focus:ring-brand-indigo/40'

function Field({ id, label, error, required, children }) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-medium text-slate-200">
        {label}
        {required && <span className="ml-0.5 text-brand-blue" aria-hidden="true"> *</span>}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} role="alert" className="mt-1.5 flex items-center gap-1.5 text-xs text-rose-300">
          <Icon name="alert" size={14} />
          {error}
        </p>
      )}
    </div>
  )
}

export default function Contact() {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | submitting | success | error
  const [whatsAppUrl, setWhatsAppUrl] = useState('')
  const [mailUrl, setMailUrl] = useState('')
  const [gmailUrl, setGmailUrl] = useState('')
  const formRef = useRef(null)

  const update = (e) => {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }))
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const found = validate(values)
    setErrors(found)
    if (Object.keys(found).length) {
      // Move focus to the first invalid field for keyboard and screen-reader users
      const first = Object.keys(found)[0]
      formRef.current?.querySelector(`[name="${first}"]`)?.focus()
      return
    }
    const mailto = buildMailtoUrl(values)
    setMailUrl(mailto)
    setGmailUrl(buildGmailUrl(values))
    setWhatsAppUrl(buildWhatsAppUrl(values))
    setStatus('success')
    setValues(initialValues)
    // Opens the client's email app with the inquiry ready; the client presses Send.
    window.location.href = mailto
  }

  const aria = (name) => ({
    'aria-invalid': errors[name] ? 'true' : undefined,
    'aria-describedby': errors[name] ? `${name}-error` : undefined,
  })
  const border = (name) => (errors[name] ? 'border-rose-400/70' : 'border-line')

  const infoRows = [
    { icon: 'mail', label: 'Email', items: [contactInfo.email] },
    { icon: 'phone', label: 'Phone', items: contactInfo.phones },
    { icon: 'pin', label: 'Location', items: [{ value: contactInfo.location }] },
  ]

  return (
    <section id="contact" className="relative overflow-hidden py-24 sm:py-28" aria-labelledby="contact-title">
      <div className="pointer-events-none absolute left-1/2 top-24 -z-10 h-80 w-[36rem] -translate-x-1/2 rounded-full bg-brand-indigo/10 blur-[120px]" aria-hidden="true" />
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          id="contact-title"
          eyebrow="Contact"
          title="Let's Start a Conversation."
          description="Tell us about your idea. We'll help you explore the right technology solution."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-[1.35fr_0.65fr]">
          <Reveal className="glass rounded-3xl p-6 sm:p-9">
            {status === 'success' ? (
              <div role="status" className="flex min-h-[26rem] flex-col items-center justify-center text-center">
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-brand-blue to-brand-violet text-white shadow-[0_10px_40px_-8px_rgba(99,102,241,0.9)]">
                  <Icon name="check" size={30} strokeWidth={2.4} />
                </span>
                <h3 className="mt-6 text-2xl font-semibold text-white">Your email is ready to send.</h3>
                <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted">
                  Your inquiry is written out and ready. Open it in Gmail or your email app and press Send to deliver it to us. Nothing is sent until you do.
                </p>
                <a
                  href={gmailUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-brand-blue via-brand-indigo to-brand-violet px-5 py-3 text-sm font-semibold text-white"
                >
                  Open in Gmail
                  <Icon name="arrow" size={16} />
                </a>
                <a
                  href={mailUrl}
                  className="mt-3 inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/[0.1]"
                >
                  Open in email app
                  <Icon name="arrow" size={16} />
                </a>
                <a
                  href={whatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/[0.1]"
                >
                  Also send on WhatsApp
                  <Icon name="arrow" size={16} />
                </a>
                <button
                  type="button"
                  onClick={() => setStatus('idle')}
                  className="mt-7 text-sm font-semibold text-sky-300 transition-colors hover:text-white"
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form ref={formRef} onSubmit={onSubmit} noValidate className="grid gap-5 sm:grid-cols-2">
                <div className="sm:col-span-1">
                  <Field id="name" label="Full Name" required error={errors.name}>
                    <input id="name" name="name" type="text" autoComplete="name" placeholder="Your full name"
                      value={values.name} onChange={update} className={`${fieldBase} ${border('name')}`} {...aria('name')} />
                  </Field>
                </div>
                <div className="sm:col-span-1">
                  <Field id="email" label="Email Address" required error={errors.email}>
                    <input id="email" name="email" type="email" autoComplete="email" placeholder="you@company.com"
                      value={values.email} onChange={update} className={`${fieldBase} ${border('email')}`} {...aria('email')} />
                  </Field>
                </div>
                <div className="sm:col-span-1">
                  <Field id="phone" label="Phone Number" error={errors.phone}>
                    <input id="phone" name="phone" type="tel" autoComplete="tel" placeholder="Your phone number"
                      value={values.phone} onChange={update} className={`${fieldBase} ${border('phone')}`} {...aria('phone')} />
                  </Field>
                </div>
                <div className="sm:col-span-1">
                  <Field id="service" label="Service Required" required error={errors.service}>
                    <select id="service" name="service" value={values.service} onChange={update}
                      className={`${fieldBase} ${border('service')} ${values.service ? '' : 'text-slate-500'}`} {...aria('service')}>
                      <option value="" disabled>Select a service</option>
                      {serviceOptions.map((o) => (
                        <option key={o} value={o} className="bg-ink-900 text-white">{o}</option>
                      ))}
                    </select>
                  </Field>
                </div>
                <div className="sm:col-span-2">
                  <Field id="message" label="Project Description" required error={errors.message}>
                    <textarea id="message" name="message" rows={5} placeholder="Tell us about your project, goals and timeline."
                      value={values.message} onChange={update} className={`${fieldBase} ${border('message')} resize-y`} {...aria('message')} />
                  </Field>
                </div>

                <div className="sm:col-span-2">
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-brand-blue via-brand-indigo to-brand-violet px-6 py-4 text-sm font-semibold text-white shadow-[0_8px_30px_-8px_rgba(99,102,241,0.7)] transition-all duration-300 hover:shadow-[0_10px_40px_-6px_rgba(139,92,246,0.85)] disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto sm:px-10"
                  >
                    Submit Inquiry
                    <Icon name="arrow" size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </div>
              </form>
            )}
          </Reveal>

          <Reveal delay={120} className="flex flex-col gap-6">
            <div className="rounded-3xl border border-line bg-ink-800/50 p-7">
              <h3 className="text-lg font-semibold text-white">Contact Information</h3>
              <ul className="mt-6 space-y-5">
                {infoRows.map((row) => (
                  <li key={row.label} className="flex items-start gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-sky-300">
                      <Icon name={row.icon} size={19} />
                    </span>
                    <div className="min-w-0">
                      <p className="text-xs font-medium uppercase tracking-wider text-slate-500">{row.label}</p>
                      {row.items.map((item) =>
                        item.href ? (
                          <a key={item.value} href={item.href} className="block break-words text-sm text-slate-100 hover:text-white">{item.value}</a>
                        ) : (
                          <p key={item.value} className="break-words text-sm text-slate-100">{item.value}</p>
                        ),
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border border-line bg-ink-800/50 p-7">
              <h3 className="text-lg font-semibold text-white">Follow Us</h3>
              <ul className="mt-5 flex gap-3">
                {socials.map((s) => (
                  <li key={s.id}>
                    <a href={s.href} aria-label={s.label}
                      className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 text-slate-300 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-indigo/60 hover:text-white">
                      <BrandIcon name={s.id} />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
