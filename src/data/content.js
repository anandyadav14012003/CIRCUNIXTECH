// Central content file. Edit copy, links and contact details here.

export const company = {
  name: 'Circunix Tech',
  tagline: 'Turning Ideas Into Intelligent Digital Solutions.',
  description:
    'A modern technology partner helping startups, entrepreneurs, and established businesses transform their ideas into scalable digital products.',
  year: 2026,
}

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Our Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
]

export const services = [
  {
    id: 'website',
    icon: 'globe',
    title: 'Website Development',
    description:
      'Modern, responsive, and high-performing websites that establish your online presence and turn visitors into customers.',
    features: ['Business Websites', 'Corporate Websites', 'Landing Pages', 'Responsive Web Design'],
  },
  {
    id: 'webapp',
    icon: 'layers',
    title: 'Web Application Development',
    description:
      'Powerful web applications designed to simplify operations, improve productivity, and deliver exceptional user experiences.',
    features: [
      'Custom Web Applications',
      'Business Management Systems',
      'Admin Dashboards',
      'Database-Driven Applications',
    ],
  },
  {
    id: 'software',
    icon: 'code',
    title: 'Custom Software Solutions',
    description:
      'Software built around your unique business requirements, helping automate workflows and solve real-world challenges.',
    features: ['Custom Business Software', 'Workflow Automation', 'Management Systems', 'Software Integration'],
  },
  {
    id: 'iot',
    icon: 'chip',
    title: 'IoT Solutions',
    description: 'Connecting hardware and software to create intelligent, connected, and automated solutions.',
    features: ['Smart Devices', 'Hardware Integration', 'Sensor-Based Systems', 'IoT Monitoring Solutions'],
  },
]

export const aboutValues = [
  { icon: 'bulb', title: 'Innovation First', text: 'We explore smarter ways to solve problems.' },
  { icon: 'target', title: 'Built Around You', text: 'Every solution is designed around your requirements.' },
  { icon: 'scale', title: 'Designed to Scale', text: 'We focus on reliable and scalable technology.' },
]

export const whyUs = [
  { icon: 'puzzle', title: 'Tailored Solutions', text: 'No one-size-fits-all approach.' },
  { icon: 'stack', title: 'Modern Technologies', text: 'Building with current and reliable technologies.' },
  { icon: 'cursor', title: 'User-Focused Design', text: 'Experiences designed for usability and simplicity.' },
  { icon: 'shield', title: 'Reliable Development', text: 'Structured development with attention to quality.' },
]

export const process = [
  { step: '01', title: 'Discover', text: 'Understand your idea, goals, and business requirements.' },
  { step: '02', title: 'Plan & Design', text: 'Prepare the solution architecture, workflow, and user experience.' },
  { step: '03', title: 'Develop', text: 'Build, test, and refine your digital solution.' },
  { step: '04', title: 'Launch & Support', text: 'Deploy your solution and provide ongoing improvements when agreed.' },
]

export const serviceOptions = [
  'Website Development',
  'Web Application Development',
  'Custom Software Solutions',
  'IoT Solutions',
  'Other',
]

// Placeholders: replace with real details when available.
// Leave `href` empty to render the value as plain text.
export const contactInfo = {
  email: { value: 'hello@your-domain.com', href: '' },
  phone: { value: '+00 000 000 0000', href: '' },
  location: { value: 'Your city, country', href: '' },
}

// Replace each `href` with the real profile URL. '#' keeps the link inert for now.
export const socials = [
  { id: 'linkedin', label: 'LinkedIn', href: '#' },
  { id: 'x', label: 'X (Twitter)', href: '#' },
  { id: 'github', label: 'GitHub', href: '#' },
  { id: 'instagram', label: 'Instagram', href: '#' },
]
