# Templates — copy these when adding content

Nothing in this folder is published on the website. These are copy-paste
starting points.

---

## Blog post template

Create a new file in `src/content/blog/` named like
`my-post-title.md` (lowercase, hyphens, no spaces):

```markdown
---
title: "My Post Title"
description: "One or two sentences summarizing the post — used on the blog index and in Google results."
publishDate: 2026-11-20
tags: ["Cross Timbers", "Buying Land"]
draft: false
---

Write the post here in Markdown. Headings start with ##, links look like
[contact page](/contact/), and **bold** works as you'd expect.

Set `draft: true` to keep a post off the live site while you finish it.
```

---

## Listing template

Create a new file in `src/content/listings/` named like
`123-county-road-ranch.md`:

```markdown
---
title: "Pennington Ranch — 200 Acres with Live Water"
county: "Comanche"
price: 1250000
acres: 200
status: "available"
description: "One or two sentences for the listings page and search results."
image: "/images/listings/pennington-ranch.jpg"
draft: false
---

Full property description here: water, soils, fences, improvements,
wildlife, ag valuation, access, and anything a buyer needs to know.

Put photos in `public/images/listings/` and reference them by path.
Omit `price` to show "Call for price". Status can be
`available`, `under-contract`, or `sold`.
```
