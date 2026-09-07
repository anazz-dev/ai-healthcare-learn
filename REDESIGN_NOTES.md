# Screening and open learning path redesign

## User-facing changes

The main flow is knowledge check → topic suggestions → open learning path. The homepage contains the check itself. The learning page presents eight numbered modules as a continuous path grouped into four stages.

The site no longer issues credentials, assigns competence or readiness labels, collects email addresses for results, charges for certificates, or invites readers to contact the author. Reading, videos, and the existing external newsletter remain secondary resources.

## Preserved content

All eight modules, their titles and descriptions, the ten original screening questions, and all module practice questions are preserved. A “Not sure yet” option has been added to screening. Module 1's introductory course language has been changed to learning-path language. CARS contact and toolkit-request calls to action have been removed from the article.

## Technical changes

- Prerender module content so it is available immediately, without a separate browser fetch.
- Keep screening answers in component memory and derive suggestions from the topics of individual questions.
- Remove pass-dependent navigation, completion storage, certificate/payment pages, the checkout API, and the Mailchimp submission API.
- Retain previous/next module links and add a section selector and optional practice mode.
- Redirect retired page URLs in the normal Next.js build; remove them from the sitemap.
- Correct the sitemap domain to `https://clinicalai.academy`.
- Use local system fonts so the build does not need to download a font.
- Align the package-manager declaration with the existing npm lockfile; repair its one stale `csstype` entry.
- Update the existing OpenNext configuration to the API provided by its installed version and correct the Worker build command.
- Check TypeScript during builds instead of suppressing type errors.

## Review limits

This is a presentation and learning-flow redesign. The inherited screening wording and medical/regulatory teaching content have not been independently revalidated. Automated build and logic checks do not replace hands-on review of the published design on a phone and desktop.

## Completed verification

- Five learning-flow tests passed.
- Next.js production build passed with TypeScript checking enabled.
- The optional Cloudflare OpenNext Worker build passed during the initial redesign, before the subsequent Next.js security update. Final deployment verification targets Netlify.
- Static review export passed; core routes and their JavaScript/CSS assets were checked.
- Rendered pages were checked for all eight module links, unrestricted next-module navigation, absence of email inputs and contact/LinkedIn links, retired-page redirects, and removal of the email/payment APIs.
- No interactive browser testing was performed in this session.

The local workspace lacks operating-system resident-memory diagnostics. Build commands used an environment-only fallback for those diagnostics and a writable temporary directory; neither workaround is included in the site source or deployed code.

## Production hosting clarification

The user confirmed a Pages/Netlify workflow. Live response headers identify Netlify's Next.js handling with Cloudflare in front; the checked-in Wrangler configuration should not be treated as proof of the active hosting setup. `netlify.toml` now specifies the existing Next.js build (`npm run build`, publish `.next`). The Worker and static review outputs remain separate alternatives. Account-level repository linking, production branch, and live deployment status still require the relevant connection.

Next.js is pinned to 15.5.24 with its lockfile updated. The inherited 15.5.4 release predates the React2Shell fixes, and [Netlify blocks vulnerable releases](https://www.netlify.com/blog/ongoing-response-to-react2shell/). The selected patch follows [Netlify's August 2026 recommendation](https://www.netlify.com/changelog/2026-08-25-nextjs-security-vulnerabilities/).
