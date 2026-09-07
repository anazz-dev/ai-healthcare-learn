# Clinical AI Academy

A Next.js website with a clinical AI knowledge check and an open learning path. Production is prepared for the existing Netlify build pipeline. The separate Cloudflare Worker configuration is retained as an optional alternative.

## Redesign

- The homepage opens directly on the ten-question knowledge check.
- Answers stay in page memory. Results appear immediately, without collecting names or email addresses.
- Answer-to-topic mappings suggest up to three modules to revisit. There is no total score or competence category.
- The eight existing modules appear in their original order, grouped into four stages. All modules and sections are freely accessible.
- Module questions are optional practice with explanations. They have no pass threshold and do not restrict navigation.
- Certificate generation, payment checkout, email submission, contact, and consultation routes have been removed. Old page URLs redirect to the learning path or homepage through the normal Next.js deployment.
- LinkedIn links and invitations to contact the author have been removed, including the toolkit request links in the CARS article.
- Existing module text and practice questions are retained; Module 1's introduction now describes a learning path. This redesign is not a scientific or regulatory review of the educational content.

## Local development

Use Node.js 22 or newer and npm. The checked-in `package-lock.json` is the dependency lockfile.

```sh
npm ci
npm run dev
```

## Verification

```sh
npm test
npm run build
```

The build checks TypeScript. Tests cover the question-to-module mappings, recommendation updates, all eight modules, and preservation of complete module content when it is divided into sections.

## Netlify deployment

`netlify.toml` sets the build command to `npm run build` and the publish directory to `.next`, using Node.js 22 and npm 11.9.0. Netlify provides its Next.js adapter automatically; the normal build includes TypeScript checks and sitemap generation.

Push the reviewed changes to the GitHub repository connected to the Netlify site, then check the resulting Netlify deploy. The linked production branch, automatic publishing settings, and deployment outcome must be checked in Netlify. The repository configuration does not alter domain or DNS settings.

The `CLINICAL_AI_STATIC_EXPORT` environment variable is reserved for the private review export and should be unset or `0` in the Netlify production environment. The `out/` directory is for the static review; Netlify production uses `.next`.

Official references: [Netlify Next.js build settings](https://docs.netlify.com/build/frameworks/overview/#nextjs), [Netlify Next.js adapter](https://docs.netlify.com/build/frameworks/framework-setup-guides/nextjs/overview/).

## Optional Cloudflare Worker deployment

```sh
npm run build:worker
```

This alternative builds the Next.js site and produces `.open-next/worker.js` plus `.open-next/assets`. To deploy a separate Worker with an authorised Cloudflare account:

```sh
npm run deploy
```

These Worker commands are separate from the Netlify build pipeline.

## Review export

```sh
npm run build:review
```

This produces a static review in `out/`, with all blog and module routes prerendered. `.openai/hosting.json` identifies the private review Site. The static export is separate from the Netlify production build. `public/_redirects` records equivalent retired-page redirects for static hosts supporting that file.

## Content

- `public/content/module1_content.html` through `module8_content.html`: module text.
- `src/lib/learning-path.ts`: module titles, descriptions, and stages.
- `src/lib/knowledge-check.ts`: screening questions and topic mappings.
- `src/lib/quizData.ts`: optional practice questions.
- `src/content/blog/`: existing articles.

The active website no longer uses the legacy Mailchimp, certificate, or payment integrations. Historical integration notes and database migrations are retained as repository history material and are not part of the active learning flow.
