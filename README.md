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

## Things to fill in

1. **Contact details**: edit `contactInfo` in `src/data/content.js`. They are placeholders
   (`hello@your-domain.com`, etc.). Add an `href` such as `mailto:...` or `tel:...` to make them clickable.
2. **Social links**: replace the `#` hrefs in `socials` in the same file.
3. **Contact form backend**: create a `.env` file with
   `VITE_INQUIRY_ENDPOINT=https://your-api.example.com/inquiries`.
   The form then POSTs JSON `{ name, email, phone, service, message, submittedAt }` to it.
   Without it, submissions are simulated locally and nothing is sent.
4. **SEO**: update the canonical URL / Open Graph image in `index.html` once the domain is known.

## Notes

- Fonts (Sora + Inter) load from Google Fonts with `display=swap`.
- Animations respect `prefers-reduced-motion`.
- No testimonials, statistics, portfolio items or credentials are included, by design.
