/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  SITE CONFIG — edit business info in ONE place.
 *
 *  Everything on the site that shows the company name, contact details, or
 *  brokerage compliance info reads from this file. Change it here and it
 *  updates in the header, footer, contact page, and meta tags everywhere.
 *
 *  TODO markers flag values that are still pending from James.
 * ─────────────────────────────────────────────────────────────────────────────
 */

export const SITE = {
  /** Company / brand name */
  name: 'Honest Acres Group',

  /** Public website URL (no trailing slash) */
  url: 'https://honestacresgroup.com',

  /** Tagline / positioning */
  tagline: 'Honest land. Honest advice.',

  /** One-line description used in SEO meta tags */
  description:
    'Honest Acres Group helps buyers and sellers of farm, ranch, and recreational land in Texas — honest advice from a Texas land specialist who works the land he sells.',

  /** Owner / agent */
  agent: {
    name: 'James Hoffman',
    /** Texas real estate license number */
    license: '859747',
    email: 'james@honestacresgroup.com',

    /**
     * REALTOR® membership — CONFIRMED by James (2026-11-13).
     * National Association of REALTORS® NRDS member #: 798604089.
     * Trademark rules (NAR): use "REALTOR®" in all caps with the ®,
     * only in connection with James's name / membership (e.g.
     * "James, REALTOR®"), never as a generic job title ("a realtor",
     * "your realtor"), and never as part of the business name.
     */
    nrds: '798604089',
    isRealtor: true,

    /**
     * James's phone — provided 2026-11-13 as a TEMPORARY number.
     * Update here when he gives a permanent one; it updates site-wide.
     */
    phone: '(512) 796-2812',
    showPhonePlaceholder: false,
  },

  /**
   * Sponsoring brokerage — TREC compliance.
   * `footerLine` is displayed verbatim in the footer of every page.
   * Use exactly this text; do not edit without broker approval.
   */
  brokerage: {
    footerLine:
      'Brokered by Access Realty LLC — Cassidy Spilker, Broker, Lic. #0681230, 5755 Rufe Snow Drive, Ste 120, North Richland Hills, TX 76180',
    name: 'Access Realty',
    brokerName: 'Cassidy Spilker',
    brokerLicense: '0681230',
  },

  /**
   * Texas-required consumer links shown in the footer of every page.
   *
   * TREC Rules §531.18 (Consumer Protection Notice, CN 1-5) and §531.20
   * (IABS) require links in a readily noticeable place on the HOMEPAGE,
   * labeled either "Texas Real Estate Commission …" in at least 10pt font
   * or "TREC …" in at least 12pt font. The footer uses the long labels at
   * 16px (~12pt) — see `.trec-notices` in global.css and COMPLIANCE.md.
   *
   * CPN: links to the official TREC PDF (CN 1-5) — no completion needed.
   *
   * IABS — COMPLETED 2026-11-15: the link below points to the completed
   * IABS 1-2 hosted at `public/legal/iabs.pdf` — Access Realty (firm
   * license #9006219) / Cassidy Spilker (#0681230) / James Hoffman
   * (#859747) contact information, completed in ZipForms and mirroring
   * Access Realty's own published IABS. (Buyer/Tenant version; the
   * Seller/Landlord twin carries the identical contact block.)
   */
  legal: {
    consumerProtectionNoticeUrl:
      'https://www.trec.texas.gov/sites/default/files/pdf-forms/CN%201-5_0.pdf',
    iabsUrl: '/legal/iabs.pdf',
    /** Internal compliance / policy pages */
    fairHousingUrl: '/fair-housing/',
    privacyUrl: '/privacy/',
    termsUrl: '/terms/',
    accessibilityUrl: '/accessibility/',
  },

  /**
   * Fair Housing / Equal Housing Opportunity.
   * The footer renders a text-and-CSS house/equal-sign mark as a placeholder.
   * TODO: replace with the official Equal Housing Opportunity logo artwork
   * once the final logo/brand files are produced (see COMPLIANCE.md).
   */
  fairHousing: {
    slogan: 'Equal Housing Opportunity',
    statement:
      'Honest Acres Group and Access Realty are pledged to the letter and spirit of U.S. policy for the achievement of equal housing opportunity. We encourage and support an affirmative advertising and marketing program in which there are no barriers to obtaining housing because of race, color, religion, sex, handicap, familial status, or national origin.',
  },

  /** Social / channel URLs — fill in as accounts are created. */
  social: {
    // TODO: add URLs once the business accounts exist.
    instagram: '', // e.g. 'https://www.instagram.com/honestacresgroup'
    facebook: '', // e.g. 'https://www.facebook.com/honestacresgroup'
    youtube: '', // e.g. 'https://www.youtube.com/@honestacresgroup'
  },

  /** Short profile used on the About page (from James's approved Land.com bio). */
  shortProfile:
    "Texas land specialist. Honest Acres Group is an honest fiduciary with honest advice for buyers & sellers of farm, ranch & recreational land. When I'm not selling real estate or ranching, you'll find me on the fairway.",
} as const;
