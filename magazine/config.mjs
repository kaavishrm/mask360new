// Publication config. Everything the build and the newsroom need to know about the title lives here.
export const site = {
  name: 'Mask360',
  tagline: 'Three. Six. Tea.',
  description: 'Mask360 spills the tea on the business of brands in India: campaigns, events, hospitality, fashion, agency moves and the culture brands touch. The industry group chat, narrated, with receipts, in a carousel.',
  // Public URL of the magazine. Set SITE_URL in the environment to override (Netlify and Vercel set their own).
  url: process.env.SITE_URL || 'https://mask360.agency/magazine',
  short: 'mask360.agency/magazine',
  handle: '@mask360',
  instagram: 'https://www.instagram.com/mask360',
  linkedin: 'https://www.linkedin.com/company/mask360',
  email: 'tea@mask360.agency',
  adsEmail: 'tea@mask360.agency',
  publisher: 'Mask360, Mumbai and Dubai',
  legal: 'Mask360 is a trading name of Mask Management, Mumbai.',
  agency: 'https://mask360.agency',
  newsletter: {
    name: 'Sunday Steep',
    // FormSubmit delivers the email to the inbox below until a newsletter provider is connected (HOUSE/08, decision 2).
    action: 'https://formsubmit.co/tea@mask360.agency',
    blurb: 'The week in tea, every Sunday at nine.',
  },
  timezone: 'Asia/Kolkata',
  city: 'Mumbai',
  // Analytics: paste a Plausible domain or GA4 id to switch tracking on. Empty means no tracker is loaded.
  plausible: '',
  ga4: '',
  // Spine stripe order and the nav
  sections: ['campaigns', 'events', 'hospitality', 'fashion', 'people', 'culture'],
};

export const promo = {
  // The home page band (the reference's "Ads space"). house = Mask360 Studio house ad, or a paid takeover.
  kind: 'house',
  eyebrow: 'This space is for sale',
  headline: 'Mask360',
  lines: ['Brand Drops, Edit placements, Guest List coverage.', 'The industry reads this before lunch.'],
  cta: 'See the rate card',
  href: '/advertise/',
  tag: 'Rate card 26',
};

export const watch = {
  title: 'Watch',
  blurb: 'Brand films and event cuts, when a brand pays for the slot.',
  items: [], // { title, blurb, length: '36 sec', href, cover }
};
