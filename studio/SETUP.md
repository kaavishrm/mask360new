# One-time setup for the owner

Total time: about twenty minutes, once. After this the studio runs on its own.

## Day one (makes product 1 live)

1. **Buy the domain.** hisaabtools.in at any registrar (GoDaddy, Hostinger, BigRock, Namecheap). Around ₹700 to ₹1,000 a year. If it is gone, taxkit.in, calcbharat.in or sahajtools.in; tell a session which one you bought and it will update the site config.
2. **Create the Vercel project.** vercel.com, Add New, Project, import `kaavishrm/mask360new`. Set Root Directory to `studio/products/toolsite`. Framework preset: Other. Deploy. Then Settings, Domains, add the domain and set the two DNS records Vercel shows at your registrar. Done; every push to `main` that touches the tool site deploys itself.
3. **Merge the studio pull request**, or tell a session "push to main: yes" so the operator can do it from now on.
4. **Email forwarding.** At the registrar (or Cloudflare if you move DNS there), forward hello@hisaabtools.in to any inbox. You will almost never get mail; AdSense needs it to exist.

## Week one (starts the income line)

5. **Google Search Console.** search.google.com/search-console, add property for the domain, verify with the DNS record it gives you. Submit `https://hisaabtools.in/sitemap.xml`. Paste the verification record into a session or add the operator's service account later; either lets the operator see what people search for.
6. **Google AdSense.** adsense.google.com, sign up with the domain. Google reviews the site (usually one to three weeks; it needs real content, which it has). When approved, paste the publisher ID that looks like `ca-pub-1234567890123456` into a session. Add your PAN and bank for payouts. Ads then appear in the slots already built into every page.

## Later, only when a product earns

7. **Paddle.** paddle.com, create a seller account with your bank details. Paddle collects payments worldwide, handles tax, and pays your Indian bank in USD monthly. Share the API key through the credential form, never in chat.
8. **Chrome Web Store.** chrome.google.com/webstore/devconsole, pay the one-time registration. Needed only when product 2 is ready.

## Pausing or stopping

The operator runs as a scheduled task named "Studio operator" in your Claude Code scheduled tasks. Disable it there to pause; enable to resume. Deleting the task deletes nothing else.

## What you will see

Nothing, unless you look. Reports accumulate in `studio/reports/`. Money, when it comes, arrives from Google and Paddle into your bank.
