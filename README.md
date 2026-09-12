# Island Bartending Services Website

A responsive, single-page website prepared for GitHub Pages preview and future custom-domain launch.

## GitHub preview setup

1. Create a new public GitHub repository.
2. Upload **the contents of this folder** to the repository root. Do not upload the ZIP itself.
3. Commit the files with the message: `Add Island Bartending Services website preview`.
4. Open **Settings → Pages**.
5. Under **Build and deployment**, choose **Deploy from a branch**.
6. Select the `main` branch and `/ (root)`, then click **Save**.
7. GitHub will display the preview URL when deployment finishes.

All website paths are relative, so the site will work inside a GitHub project URL.

## Before the final launch

- Confirm and purchase the final domain. The current SEO files assume `islandbartendingservices.com`.
- Replace the temporary text wordmark when Matt's final logo is delivered.
- Connect a dedicated form endpoint if Matt wants submissions delivered without opening the visitor's email app. The current quote form safely prepares a pre-addressed email.
- Confirm the final service area and all service inclusions before expanding service copy.
- Replace the Open Graph image with a dedicated 1200 × 630 social-sharing graphic if desired.
- Ask Matt to identify the strongest Instagram posts for the site and provide the original photo or video files; social-media downloads are compressed and may include people whose permission must be confirmed.

## Updating content

- Main page wording and links: `index.html`
- Colors, typography and layout: `assets/css/styles.css`
- Menu, reveal animations and quote-email behavior: `assets/js/main.js`
- Images: `assets/images/`

When replacing an image, keep the same filename to avoid editing the HTML. Export photographs as WebP, ideally under 300 KB when visual quality allows.

## Custom domain launch

After the domain is purchased, confirm the final spelling and replace every instance of `https://islandbartendingservices.com/` in `index.html`, `robots.txt` and `sitemap.xml` if needed. Follow the hosting provider's domain-verification and DNS instructions. Do not add a `CNAME` file until the domain is owned and the selected host is confirmed.

## Contact form upgrade

The preview uses a `mailto:` workflow and does not store information. To connect Formspree later, create the form in an account controlled by Matt or Webby Wahine, replace the JavaScript mail workflow with the supplied endpoint, test delivery and spam protection, and update the privacy notice if data handling changes.

## Security and privacy

No analytics, advertising trackers, cookies, passwords or API keys are included. `_headers` provides security headers on hosts that support Cloudflare-style header files; GitHub Pages does not apply that file.
