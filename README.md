# Circunix Tech Website

Premium dark-theme landing page built with **React 18**, **Vite** and **Tailwind CSS v4**.

## Run it

```bash
npm install
npm run dev       # local dev server
npm run build     # production build in /dist
npm run preview   # serve the production build
```

Requires Node 18+.

## Project structure

```
src/
  App.jsx                 Page composition
  index.css               Tailwind theme tokens, grid, glass, reveal animations
  data/content.js         ALL copy, nav links, services, contact placeholders, socials
  hooks/useReveal.js      Scroll-reveal (IntersectionObserver)
  services/submitInquiry.js   Contact form backend hook
  components/             Navbar, Hero, HeroVisual, Services, About, WhyUs,
                          Process, CTA, Contact, Footer + shared Button, Logo,
                          Icons, Reveal, SectionHeading
```

## Contact form delivery

- **Email:** on submit (after validation) the client's own email app opens with a message to
  `inquiryDelivery.email` (set in `src/data/content.js`), pre-filled with their name, email, phone,
  service and project description. The client presses Send. No server or account is needed.
- **WhatsApp:** the confirmation screen also has an "Also send on WhatsApp" button that opens a chat with
  `inquiryDelivery.whatsappNumber` and the same text ready to send.
- Both rely on the client pressing Send, so nothing is delivered automatically. For automatic delivery you
  would need a backend or a form service.
- Contact details and social links live in `src/data/content.js` (social hrefs are still `#`).

## Motion effects

- Cursor glow, hero parallax/tilt, card tilt + spotlight and magnetic buttons run only with a real mouse
  (`src/hooks/finePointer.js`). Touch devices and visitors with reduced-motion turned on do not get them.
- The Process line fills as you scroll (`src/components/Process.jsx`).
- To remove one: cursor glow = delete `<CursorGlow />` in `App.jsx`; magnetic = pass `magnetic={false}` to a Button;
  card tilt = swap `TiltCard` for a plain element.

## Notes

- Fonts (Sora + Inter) load from Google Fonts with `display=swap`.
- Animations respect `prefers-reduced-motion`.
- No testimonials, statistics, portfolio items or credentials are included, by design.
