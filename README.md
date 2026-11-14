# Honest Acres Group — Website

The public website for **Honest Acres Group**, a Texas farm, ranch &
recreational land real estate group. Built with [Astro](https://astro.build),
hosted on **Vercel**, source in **GitHub**, domain registered at
**Namecheap** (`honestacresgroup.com`).

- **Honest land. Honest advice.**
- Owner/agent: James, Texas Lic. #859747 — james@honestacresgroup.com
- Brokered by Access Realty — Cassidy Spilker, Broker, Lic. #0681230

All business info (phone, email, broker line, legal links, social URLs) lives
in **one file**: `src/config/site.ts`. Edit it there; never hard-code it in a page.

---

## Run it locally

You need Node.js 18+ (Node 20+ recommended).

```bash
npm install     # first time only — downloads Astro
npm run dev     # local site at http://localhost:4321
npm run build   # production build into dist/  (what Vercel runs)
npm run preview # preview the production build locally
```

## Project layout

```
src/
  config/site.ts        ← ALL business info in one place (edit here first)
  content/
    blog/               ← blog posts (Markdown files)
    listings/           ← property listings (Markdown files)
  content.config.ts     ← frontmatter schemas for blog & listings
  pages/                ← one file per page/route
  layouts/              ← BaseLayout (SEO meta, header/footer wrapper)
  components/           ← Header, Footer (footer carries TREC brokerage line)
public/
  favicon.svg           ← TODO: replace with final logo art
  legal/                ← TODO: put TREC/IABS PDFs here
  robots.txt
docs/content-templates.md ← copy-paste templates for posts & listings
```

## Create the GitHub repo and push

1. On github.com, click **New repository**. Name it e.g.
   `honest-acres-group-site`. Public or Private both work with Vercel.
   Do **not** add a README/gitignore in the GitHub UI (this repo has its own).
2. In this folder, run:

```bash
git init
git add .
git commit -m "Initial Honest Acres Group website"
git branch -M main
git remote add origin https://github.com/Honestacres/honest-acres-group-site.git
git push -u origin main
```

(GitHub account: **Honestacres** — James Hoffman's account, confirmed 2026-11-13.)

**No-terminal alternative (GitHub web upload):** create the empty repo on
github.com (signed in as Honestacres), click **uploading an existing file**,
and drag in the *contents* of the unzipped site folder (not the folder
itself, and not `node_modules/` or `dist/` — those are excluded from the
ZIP Sabrina provides). Commit the upload to `main`.

## Import into Vercel

1. Go to vercel.com and **sign in with GitHub**.
2. **Add New → Project**, pick the `honest-acres-group-site` repo, **Import**.
3. Framework preset: **Astro** (Vercel normally detects it automatically).
   Build command `npm run build`, output directory `dist` — the defaults.
4. Click **Deploy**. You'll get a live `*.vercel.app` URL in a minute or two.
5. Every later `git push` to `main` redeploys automatically.

## Connect the custom domain (honestacresgroup.com)

1. In the Vercel project: **Settings → Domains → Add** —
   add `honestacresgroup.com` and `www.honestacresgroup.com`.
   Vercel will show the exact DNS records it wants (typically an **A record**
   for the root domain and a **CNAME** for `www` — always copy the values
   Vercel shows you, don't guess).
2. At **Namecheap**: open the domain → **Advanced DNS** and add exactly
   those records. Remove any conflicting A/CNAME records for `@` and `www`.
3. **Do not touch the MX / email records** — the domain's email
   (james@honestacresgroup.com) depends on them.
4. Back in Vercel, wait for the domain to show **Valid Configuration** and
   for HTTPS to provision (usually minutes, can take a few hours).
   Vercel handles redirects between www and the root domain.

## Add a blog post

1. Copy the blog template from `docs/content-templates.md`.
2. Save it as `src/content/blog/<post-slug>.md` with the frontmatter filled in.
3. Commit & push — the post goes live automatically:

```bash
git add src/content/blog/<post-slug>.md
git commit -m "Blog: <post title>"
git push
```

New posts appear on the home page, the blog index, and the sitemap
automatically. Set `draft: true` in frontmatter to keep one hidden.

## Add a listing

Same pattern, using the listing template in `docs/content-templates.md`:
save a Markdown file in `src/content/listings/`, put photos in
`public/images/listings/`, commit, push. It gets its own page at
`/listings/<file-name>/` and a card on the listings index.

## TODO before public launch

- [ ] **Phone number** — add James's number in `src/config/site.ts`
      (`agent.phone`, set `showPhonePlaceholder: false`). The site currently
      shows a clearly-marked TODO placeholder, never an invented number.
- [ ] **TREC links** — the Consumer Protection Notice link is LIVE (official
      TREC CN 1-5 PDF). The IABS link currently points to TREC's official
      blank IABS 1-2 PDF as an interim measure — before launch, replace it
      with the **completed** IABS form signed off by the broker (PDF goes in
      `public/legal/`, update `site.ts` → `legal.iabsUrl`). See
      `COMPLIANCE.md` for the full compliance checklist.
- [ ] **Contact form** — the form on `/contact/` is a disabled placeholder
      that sends nowhere. Connect a provider (e.g. Formspree/Basin) or a
      Vercel Function that emails James, then enable the fields.
- [ ] **Social URLs** — Instagram/Facebook/YouTube in `site.ts` → `social`.
- [ ] **Logo / favicon** — replace `public/favicon.svg` with final logo art.
- [ ] **Photos** — headshot and ranch photos for About/Home.
- [ ] **County guides** — individual county pages (index list is live as a
      placeholder).
