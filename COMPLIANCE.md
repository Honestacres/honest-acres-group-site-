# COMPLIANCE.md — Honest Acres Group Website Compliance Notes

Last reviewed: **November 13, 2026**. This file documents what was checked,
what was implemented in code, and what still needs broker/James
confirmation before public launch. It is internal documentation, not
legal advice. TREC does not pre-approve advertising; the sponsoring
broker (Cassidy Spilker, Access Realty) is responsible for reviewing
this site and must sign off before launch.

---

## 1. TREC — Consumer Protection Notice (CN 1-5)

**Requirement.** TREC Rule §531.18: the Commission adopts the Consumer
Protection Notice, TREC No. **CN 1-5**. Each license holder must (a)
display it in a readily noticeable location in each place of business,
and (b) provide a **link to it in a readily noticeable place on the
homepage of each business website**, labeled either
"Texas Real Estate Commission Consumer Protection Notice" (≥10pt) or
"TREC Consumer Protection Notice" (≥12pt).

**Sources**
- TREC Rules, §531.18: https://www.trec.texas.gov/node/634
- Official PDF (CN 1-5): https://www.trec.texas.gov/sites/default/files/pdf-forms/CN%201-5_0.pdf

**Implemented.** Footer (renders on every page, including the homepage)
links the exact long label at 16px (~12pt) to the official TREC PDF.
Configured in `src/config/site.ts` → `legal.consumerProtectionNoticeUrl`;
rendered in `src/components/Footer.astro` (`.trec-notices`).

## 2. TREC — Information About Brokerage Services (IABS)

**Requirement.** TREC Rule §531.20 and TRELA §1101.558: a **completed**
IABS Notice must be provided at the first substantive communication
about a specific property, **and** a link to the completed IABS must
appear in a readily noticeable place on the homepage, labeled
"Texas Real Estate Commission Information About Brokerage Services"
(≥10pt) or "TREC Information About Brokerage Services" (≥12pt). The
link may not be buried in a footnote/signature in email contexts.

**Version note (important).** The current form is **IABS 1-2**, dated
11-03-2025. It supersedes IABS 1-1 and incorporates Senate Bill 1968
(non-representation status, written-agreement requirements, removal of
subagency), effective for use beginning January 1, 2026. §531.20 as
published on TREC's rules page adopts "TREC No. IABS 1-2" by reference.

**Sources**
- TREC IABS page: https://www.trec.texas.gov/information-about-brokerage-services-form
- TREC Rules, §531.20: https://www.trec.texas.gov/node/634
- Official (blank) IABS 1-2 PDF: https://www.trec.texas.gov/sites/default/files/pdf-forms/IABS%201-2.pdf

**Implemented — with a launch blocker.** Footer links the exact long
label at 16px to the official IABS PDF — **but the URL currently points
to the blank form**. TREC requires the **completed** form (Broker
Contact Information section filled in for Access Realty / Cassidy
Spilker / James, verbatim form text per §531.20). Before launch:
broker supplies the completed IABS 1-2, save it as `public/legal/iabs.pdf`,
and set `legal.iabsUrl` to `/legal/iabs.pdf` in `src/config/site.ts`.

## 3. TREC — Advertising, broker identification, team names

**Requirements (Rules §535.154 and §535.155).**
- Every advertisement (a website is an advertisement) must include, in a
  readily noticeable location: (1) the name of the license holder or
  team placing the ad, and (2) **the broker's name in at least half the
  size of the largest contact information** for any sales agent,
  associated broker, or team name in the ad.
- A **team name** must end in "team" or "group" ("Honest Acres **Group**"
  complies on its face), must not include terms implying the team offers
  brokerage services independently from its sponsoring broker (e.g.
  "brokerage", "company", "associates"), and **the broker must register
  the team name with TREC before it is used in advertising**.
- Ads must not mislead: they may not identify a sales agent as a broker,
  use titles implying the agent runs the brokerage, contain the name of
  a sales agent other than the name on the license (or a registered
  alternate name), or imply unlicensed persons are licensed.
- **Assumed business names (DBAs)** used by the broker must be registered
  with TREC, with written evidence of legal authority to use the name
  (Secretary of State / county clerk filing), before use in advertising.
- Broker is responsible for sponsored agents' advertising compliance
  (§§535.2, 535.154, 535.155; TRELA §1101.652(b)(23)).

**Sources**
- TREC Rules, §§535.154–535.155 and FAQ guidance: https://www.trec.texas.gov/node/634
- TREC IABS/forms FAQ page (advertising Q&As): https://www.trec.texas.gov/forms/information-about-brokerage-services

**Implemented.**
- Header: "Brokered by Access Realty" appears directly under the team
  name on every page at 0.8rem vs the 1.25rem brand name (64% — exceeds
  the half-size rule). See `Header.astro` / `.brand-broker` in
  `global.css`.
- Footer on every page: exact broker line — "Brokered by Access Realty —
  Cassidy Spilker, Broker, Lic. #0681230, 5755 Rufe Snow Drive, Ste 120,
  North Richland Hills, TX 76180" — plus James's name and Texas Lic.
  #859747.
- Copy fix: the listings page previously called Honest Acres Group "a
  new brokerage." That implied an independent brokerage and has been
  corrected to "a new real estate group, brokered by Access Realty."
- No page identifies James as a broker, owner-of-brokerage, president,
  etc. James is identified as an agent/team member only.

**Still needs broker confirmation (see checklist §9):** that "Honest
Acres Group" has been **registered with TREC as a team name** by Access
Realty; whether "Access Realty" is the broker's licensed name or a
registered assumed business name; and that the agent name shown on the
site ("James") matches the name on James's license or a registered
alternate name — §535.155 requires the licensed name. The site currently
shows only the first name "James" in several places; if the licensed
name is longer, `src/config/site.ts` must be updated before launch.

## 4. Fair Housing (federal + Texas)

**Requirements.** Fair Housing Act §804(c) (42 U.S.C. §3604(c)): it is
unlawful to publish any advertisement for the sale or rental of a
dwelling that indicates a preference, limitation, or discrimination
based on race, color, religion, sex, handicap/disability, familial
status, or national origin. Texas Fair Housing Act (Property Code
ch. 301) mirrors this; TREC §531.19 separately bars discriminatory
inquiries/disclosures by license holders. HUD's long-standing
advertising guidance (former 24 CFR Part 109; HUD FHEO marketing
materials) supports use of the **Equal Housing Opportunity** logo/
slogan/statement in housing advertising and describes property-focused,
not people-focused, language.

**Sources**
- HUD Fair Housing / FHEO: https://www.hud.gov/program_offices/fair_housing_equal_opp
- HUD marketing/poster page (referenced in HUD agreements): https://www.hud.gov/program_offices/fair_housing_equal_opp/marketing
- TREC Rules §531.19: https://www.trec.texas.gov/node/634

**Implemented.**
- Footer on every page: Equal Housing Opportunity block with a
  house/equal-sign mark (inline SVG placeholder — **replace with the
  official EHO logo artwork** when brand files are produced) and the
  standard pledge language, linking to the new `/fair-housing/` page.
- New page `/fair-housing/`: pledge (text in `site.ts` →
  `fairHousing.statement`), federal + Texas protected classes, our
  "describe the property, not the people" marketing standard, and how to
  file a complaint (HUD / Texas Workforce Commission Civil Rights
  Division) or contact the broker.
- **Language audit** of all pages, the blog post, and templates:
  - ✅ No use of "REALTOR®" anywhere except as described in §7 below.
    No MLS name, logo, or membership claim anywhere.
  - ✅ **Fixed:** North Hill Country page — "Community: … courthouse
    squares, feed stores, and Friday-night football" (school/family-tinted
    amenity) → "Towns: … courthouse squares, feed stores, and locally
    owned cafés and shops."
  - ✅ **Fixed:** listings page "new brokerage" (see §3).
  - ✅ Reviewed and kept as property-focused: Fairways & Fences copy
    ("what that course, town, and county offer the people thinking about
    buying land and living there" — describes amenities, names no
    preferred buyer type). **No** "retirement," "second
    home," "empty nester," "perfect for families," "safe/quiet
    neighborhood," or similar phrasing exists anywhere in the current
    copy — future blog/listing writers must keep it that way (see
    `docs/content-templates.md` guidance and this section).
  - ✅ Reviewed and kept: blog line "selling land your family has held
    for generations" — it describes a seller's own land history, not a
    preference about buyers, and does not target a dwelling advertisement
    at any class.

## 5. Accessibility

**Implemented (basics, WCAG 2.1 AA target).** Semantic landmarks and
heading order; "Skip to main content" link; visible `:focus-visible`
outlines (gold on dark backgrounds, rust on light); alt text on listing
images (title-based); labeled form fields; brand palette checked for
readable contrast in body contexts; new page `/accessibility/` with our
commitment, measures in place, known limitations (YouTube captions,
TREC-hosted PDFs), and an email route for assistance/alternate formats.

## 6. Privacy & Terms (new pages)

- `/privacy/` — original plain-language policy for a lead-gen brokerage
  site: what is collected (email/form inquiries, host logs), how it is
  used, **we do not sell personal information**, hosting provider
  (Vercel) noted, no ad trackers currently, cookies note, contact route.
  **TDPSA note:** the Texas Data Privacy and Security Act (Tex. Bus. &
  Com. Code ch. 541, https://statutes.capitol.texas.gov/Docs/BC/htm/BC.541.htm)
  has no revenue/consumer-count threshold, but §541.002(a)(3) excludes
  small businesses as defined by the U.S. Small Business Administration
  **except** §541.107, which still bars selling sensitive data without
  prior consent. Honest Acres Group is a new, small team; it does not
  sell personal data at all. The policy voluntarily offers
  access/correction/deletion requests regardless of applicability. If
  the business grows beyond the SBA small-business definition, revisit
  full TDPSA controller duties (privacy notice content, consumer rights
  workflows, data protection assessments).
- `/terms/` — original terms: no brokerage relationship is created by
  using the site or sending a message (representation only by written
  agreement with the broker, per the IABS); property information deemed
  reliable but not guaranteed; educational content is not legal/tax
  advice; IP and REALTOR® mark ownership note; third-party links;
  acceptable use; Texas governing law.
- Contact form remains **disabled** pending a provider; the privacy
  policy must be updated when a form/analytics provider is connected.

## 7. REALTOR® trademark — RESOLVED / membership confirmed

**Status: CONFIRMED.** James provided his National Association of
REALTORS® **NRDS member number: 798604089** (2026-11-13). Recorded in
`src/config/site.ts` → `agent.nrds`, `agent.isRealtor: true`.

**Usage implemented (per NAR trademark rules).** "REALTOR®" appears only
in all caps with the ® symbol, only in connection with James's own name
and membership — footer and About/Contact bylines render
"James, REALTOR®" — and on the Fair Housing page as a Code of Ethics
(incl. Article 10) membership statement. It is **never** used as a
generic job title ("a realtor," "your realtor"), never lowercase, and
never as part of the "Honest Acres Group" business/team name. Do not
add the REALTOR® logo block ("R" logo) without using NAR's official
artwork and membership-context rules.

## 8. Listings / MLS / IDX disclaimer

**Implemented.** Listings index and listing detail template now carry:
"Information … is deemed reliable but is not guaranteed accurate, and
buyers should independently verify all details — including acreage,
boundaries, water, mineral rights, and tax status — through surveys,
inspections, and other appropriate professionals before purchase."
Current listings are **manual** (no IDX feed). A code comment and this
section record the TODO: **before any IDX feed goes live**, add the
disclaimer, attribution, and update-frequency wording required by the
applicable MLS and confirm it with the broker. **James's MLS membership
is not confirmed in the site config — no MLS name or logo may be shown
until it is.**

## 9. Broker / James confirmation checklist — BEFORE public launch

Blocking items are marked ⛔.

- [ ] ⛔ **Completed IABS 1-2** — broker supplies the completed form
      (Access Realty / Cassidy Spilker / James contact info, verbatim
      text); host at `public/legal/iabs.pdf`; update `site.ts`.
- [ ] ⛔ **Team name registration** — Cassidy/Access Realty confirms
      "Honest Acres Group" is registered with TREC as a team name
      (§535.154) before it is used in advertising.
- [ ] ⛔ **Licensed agent name** — confirm the exact name on James's
      Texas license (#859747); the site currently displays "James"
      only. Update `site.ts` if the licensed name must appear in full.
- [ ] ⛔ **Broker review of the whole site** — TREC holds the broker
      responsible for agent advertising; broker approval should be
      documented before DNS goes live.
- [ ] **Broker name form** — confirm "Access Realty" is the licensed
      broker name or a TREC-registered assumed business name (DBA), and
      that the brokerage address (5755 Rufe Snow Drive, Ste 120, North
      Richland Hills, TX 76180) is the address to display.
- [ ] **Assumed-name filings** — if any name used on the site is a DBA,
      confirm TREC registration + Secretary of State/county clerk filing
      evidence (§535.154(d)).
- [ ] **IABS delivery practice** — confirm how the completed IABS is
      delivered at first substantive communication in day-to-day work
      (website link alone does not satisfy delivery).
- [ ] **MLS membership / IDX** — confirm which MLS (if any) James/
      Access Realty belongs to; add that MLS's required IDX disclaimer
      before any feed is connected. No MLS claims until then.
- [ ] **EHO logo artwork** — replace the placeholder SVG house/equal
      mark in the footer with the official Equal Housing Opportunity
      logo file.
- [ ] **James's phone number** — still unknown; footer/contact show a
      marked TODO placeholder. Add in `site.ts` (also needed to complete
      the IABS contact section).
- [ ] **Contact form provider** — choose one (e.g. Formspree/Basin or a
      Vercel Function), enable the form, and update `/privacy/`.
- [x] **REALTOR® membership** — CONFIRMED via NRDS #798604089
      (2026-11-13); usage follows NAR trademark rules (§7). Not pending.
- [ ] **Final logo** — favicon is an "HA" placeholder; final logo must
      also be checked against §535.155 half-size rule wherever the team
      name/logo appears without the footer (social avatars, video).

## 10. Footer inventory (every page)

Rendered by `src/components/Footer.astro` from `src/config/site.ts`:
team name + tagline; James, REALTOR®, Texas Lic. #859747, email (phone
placeholder); TREC Consumer Protection Notice link (official CN 1-5
PDF, required label, 16px); TREC Information About Brokerage Services
link (required label, 16px — interim blank-form URL, see §2); links to
Fair Housing, Privacy Policy, Terms of Use, Accessibility; Equal
Housing Opportunity mark + pledge line; broker line verbatim —
"Brokered by Access Realty — Cassidy Spilker, Broker, Lic. #0681230,
5755 Rufe Snow Drive, Ste 120, North Richland Hills, TX 76180";
copyright "© {year} Honest Acres Group. All rights reserved."
