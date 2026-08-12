export type Service = {
  slug: string;
  name: string;
  short: string;
  icon: string;
  image: string;
  description: string[];
  includes: string[];
  process: { title: string; text: string }[];
};

export const SITE = {
  name: "SecureClose Title Co.",
  legalName: "SecureClose Title Company, LLC",
  url: "https://secureclose-title-co.amsitservices.com",
  phone: "(555) 210-4488",
  phoneHref: "tel:+15552104488",
  email: "closings@secureclosetitle.co",
  address: "212 Commerce Street, Suite 400, Springfield",
  hours: "Mon–Fri, 8:30am – 5:00pm",
  socials: [
    { label: "Facebook", icon: "fa-brands fa-facebook-f", href: "https://facebook.com" },
    { label: "X (Twitter)", icon: "fa-brands fa-x-twitter", href: "https://x.com" },
    { label: "LinkedIn", icon: "fa-brands fa-linkedin-in", href: "https://linkedin.com" },
    { label: "Instagram", icon: "fa-brands fa-instagram", href: "https://instagram.com" },
  ],
};

export const SERVICES: Service[] = [
  {
    slug: "title-search-and-examination",
    name: "Title Search & Examination",
    short: "A complete review of public records to uncover liens, easements, and ownership issues before they derail your closing.",
    icon: "fa-solid fa-magnifying-glass-chart",
    image: "/images/service-title-search.jpg",
    description: [
      "Our examiners search county records, tax rolls, and court filings to verify a clean chain of title. We flag every lien, judgment, easement, or encroachment that could affect ownership — before you commit a single dollar.",
      "Each search is reviewed by a licensed examiner, and we deliver a clear, plain-English report with every exception documented, so you know exactly what you are buying and what it takes to make the title marketable.",
    ],
    includes: [
      "Full chain-of-title research",
      "Lien, judgment & tax record search",
      "Easement & encroachment review",
      "Ownership and vesting verification",
      "Plain-English exception report",
      "Guidance on curative steps",
    ],
    process: [
      { title: "Order & intake", text: "We gather property details, prior policies, and deed references, and set turnaround expectations." },
      { title: "Record search", text: "County, court, and tax records are searched across every jurisdiction touching the property." },
      { title: "Examination", text: "A licensed examiner reviews the chain of title and documents every exception in a clear report." },
      { title: "Report & cure", text: "You receive the report fast — and we help resolve any issues found before closing." },
    ],
  },
  {
    slug: "escrow-and-closing-services",
    name: "Escrow & Closing Services",
    short: "Neutral, secure handling of funds and documents from contract to recorded deed.",
    icon: "fa-solid fa-handshake",
    image: "/images/service-escrow.jpg",
    description: [
      "SecureClose acts as the neutral party who holds earnest money, coordinates payoff demands, and ensures every document is signed and notarized correctly. Your funds move only when every condition of the contract is met.",
      "We schedule and host closings at our office or at a location convenient for you — in person or via remote online notarization — and we stay on top of every deadline so the close happens on time.",
    ],
    includes: [
      "Earnest money & fund holding",
      "Payoff & proration coordination",
      "Closing scheduling & hosting",
      "Remote online notarization",
      "Conditional fund disbursement",
      "Post-closing file archive",
    ],
    process: [
      { title: "Open escrow", text: "We receive the contract, open the file, and collect the earnest money deposit." },
      { title: "Document prep", text: "Deeds, affidavits, and disclosures are drafted and balanced against the settlement statement." },
      { title: "Signing & funding", text: "Documents are signed and notarized; funds are verified and released only when conditions clear." },
      { title: "Recording & disbursement", text: "The deed is recorded and all parties are paid from escrow — with a full accounting for you." },
    ],
  },
  {
    slug: "title-insurance-policies",
    name: "Title Insurance Policies",
    short: "Owner's and lender's policies that protect your property rights long after closing.",
    icon: "fa-solid fa-shield-halved",
    image: "/images/service-title-insurance.jpg",
    description: [
      "A title search can't guarantee the future — title insurance does. We issue owner's and lender's policies backed by A-rated underwriters, protecting you from claims, forgeries, and hidden defects for as long as you own the property.",
      "We compare premiums across underwriters to find the best rate for your coverage level, and we explain exactly what your policy does and does not cover — in plain language.",
    ],
    includes: [
      "Owner's title insurance",
      "Lender's title insurance",
      "A-rated underwriting partners",
      "Rate comparison & best pricing",
      "Extended coverage options",
      "Claims assistance",
    ],
    process: [
      { title: "Coverage review", text: "We recommend the right policy type and endorsements for your transaction." },
      { title: "Underwriting", text: "The insurer reviews the title report and issues commitment terms." },
      { title: "Policy issuance", text: "Your final policy is prepared and delivered after recording." },
      { title: "Long-term protection", text: "We remain your advocate if a claim ever arises." },
    ],
  },
  {
    slug: "recording-and-document-handling",
    name: "Recording & Document Handling",
    short: "Fast, accurate recording of deeds, mortgages, and releases with every jurisdiction.",
    icon: "fa-solid fa-file-signature",
    image: "/images/service-recording.jpg",
    description: [
      "After closing, the paperwork must reach the right recorder's office — correctly formatted, stamped, and delivered. We handle deed preparation, notarization, and electronic recording across counties and states.",
      "We track every document through to the recorded deed and deliver certified copies to you, so your file is complete, audit-ready, and protected.",
    ],
    includes: [
      "Deed & mortgage preparation",
      "Notarization & witnessing",
      "E-recording to county offices",
      "Tracking to recorded status",
      "Certified copies on request",
      "Post-closing compliance",
    ],
    process: [
      { title: "Preparation", text: "Documents are drafted to each county's formatting and fee requirements." },
      { title: "Execution", text: "Signatures and notarizations are completed correctly, first time." },
      { title: "Submission", text: "Documents are filed electronically or delivered in person." },
      { title: "Verification", text: "We confirm recorded status and deliver certified copies." },
    ],
  },
  {
    slug: "1031-exchange-support",
    name: "1031 Exchange Support",
    short: "Qualified intermediary services that keep your exchange valid and your tax deferral intact.",
    icon: "fa-solid fa-right-left",
    image: "/images/service-1031.jpg",
    description: [
      "Timing and paperwork are everything in a 1031 exchange. We coordinate with qualified intermediaries to structure like-kind exchanges that meet IRS deadlines and documentation requirements.",
      "From identifying replacement property to simultaneous closings, we keep the exchange moving so you can defer capital gains taxes legally and confidently.",
    ],
    includes: [
      "Qualified intermediary coordination",
      "Identification deadline tracking",
      "Simultaneous & delayed exchanges",
      "Relinquished property closing",
      "Replacement property closing",
      "Documentation for your accountant",
    ],
    process: [
      { title: "Structure", text: "We map the exchange timeline around your contract dates and IRS windows." },
      { title: "Relinquished side", text: "Proceeds are held by the intermediary through closing." },
      { title: "Identification", text: "Replacement properties are identified within the 45-day window." },
      { title: "Replacement close", text: "Funds flow to the new purchase and the exchange is documented." },
    ],
  },
  {
    slug: "settlement-statements-and-huds",
    name: "Settlement Statements & HUDs",
    short: "Accurate, transparent closing numbers prepared to TRID and ALTA standards.",
    icon: "fa-solid fa-receipt",
    image: "/images/service-hud.jpg",
    description: [
      "Every dollar in your transaction is accounted for on a settlement statement that complies with TRID, ALTA, and state regulations. Our closer's calculations are double-checked before you ever see them.",
      "We prepare the Closing Disclosure, HUD-style summaries where required, and proration schedules — and we walk you through every line at signing so there are no surprises.",
    ],
    includes: [
      "Closing Disclosure (TRID) preparation",
      "HUD-1 / HUD-style summaries",
      "Proration & tax calculations",
      "Escrow account statements",
      "Line-by-line signing walkthrough",
      "Audit-ready file retention",
    ],
    process: [
      { title: "Numbers in", text: "We collect payoff amounts, tax figures, and title charges." },
      { title: "Draft & balance", text: "The statement is drafted and balanced to the penny." },
      { title: "Review", text: "A second closer audits every line before delivery." },
      { title: "Sign & fund", text: "You review the final numbers at signing and funds move on approval." },
    ],
  },
  {
    slug: "wire-fraud-protection",
    name: "Wire Fraud Protection",
    short: "Verified wire instructions and layered safeguards that stop fraud before funds move.",
    icon: "fa-solid fa-user-shield",
    image: "/images/service-wire.jpg",
    description: [
      "Wire fraud is the fastest-growing threat in real estate. We use verified-in-person wire instructions, out-of-band confirmation, and dual approval on every disbursement — and we never change instructions by email.",
      "Every SecureClose closing includes a fraud-prevention briefing for buyers and sellers, so everyone at the table knows the warning signs.",
    ],
    includes: [
      "Verified-in-person wire instructions",
      "Out-of-band phone confirmation",
      "Dual-approval disbursements",
      "Email compromise monitoring",
      "Fraud awareness briefing",
      "Cyber-insurance-backed process",
    ],
    process: [
      { title: "Verify", text: "Wire instructions are confirmed in person or by known phone contact — never email." },
      { title: "Confirm", text: "Bank details are re-verified out-of-band before any transfer." },
      { title: "Approve", text: "Every disbursement requires two independent approvals." },
      { title: "Monitor", text: "We watch for compromised emails and flag anomalies immediately." },
    ],
  },
];

export function getService(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug);
}

export const STATS = [
  { value: "25+", label: "Years of combined experience" },
  { value: "12,400+", label: "Closings completed" },
  { value: "99.98%", label: "On-time settlement rate" },
  { value: "$1.2B", label: "In transaction value" },
];

export const FEATURES = [
  { title: "Licensed & Insured", icon: "fa-solid fa-certificate", text: "Fully licensed title agents backed by A-rated underwriters and errors & omissions coverage." },
  { title: "Wire-Fraud Shield", icon: "fa-solid fa-user-shield", text: "Verified wire instructions and dual-approval disbursements on every single file." },
  { title: "On-Time Closings", icon: "fa-solid fa-stopwatch", text: "48-hour average title turnaround and a 99.98% on-time settlement record." },
  { title: "Transparent Fees", icon: "fa-solid fa-receipt", text: "Flat, quoted-in-advance pricing. No surprise charges at the table." },
  { title: "Local Expertise", icon: "fa-solid fa-map-location-dot", text: "County-by-county knowledge of recording rules, tax prorations, and customs." },
  { title: "Modern Tracking", icon: "fa-solid fa-laptop-code", text: "Real-time status updates and secure document access from contract to recorded deed." },
];

export const TESTIMONIALS = [
  { name: "Dana Whitfield", role: "Homeowner, Lakeview", initials: "DW", quote: "The SecureClose team found an old easement two other companies missed. Their examiner walked us through the fix and we still closed on time." },
  { name: "Marcus Chen", role: "Principal, Chen & Hale Realty", initials: "MC", quote: "We've closed 40+ transactions with SecureClose. Their wire fraud protocol alone is worth the fee — and their numbers are always right." },
  { name: "Priya Raghavan", role: "Real Estate Investor", initials: "PR", quote: "They handled a complicated three-county 1031 exchange without a single missed deadline. I've never seen closings run this smoothly." },
  { name: "Jordan Ellis", role: "First-Time Buyer", initials: "JE", quote: "As a first-time buyer I had a thousand questions. They answered every one and explained the Closing Disclosure line by line." },
  { name: "Teresa Alvarez", role: "Realtor", initials: "TA", quote: "Fast, precise, and genuinely friendly. Recording was done the same afternoon as our closing." },
];

export const PROJECTS = [
  {
    slug: "downtown-office-portfolio-refinance",
    title: "Downtown Office Portfolio Refinance",
    tag: "Commercial • 12 units",
    stat: "14 days to close",
    image: "/images/project-1.jpg",
    summary: "A 12-unit commercial portfolio refinanced across three counties with tangled legacy liens and two payoff disputes.",
    challenge: "Three separate recorders, a 2007 judgment that was never released, and a lender demanding a single-day funding window.",
    result: "We cleared the stale judgment, secured same-day recordings in all three counties, and funded the refinance in 14 days.",
  },
  {
    slug: "lakeview-family-home-purchase",
    title: "Lakeview Family Home Purchase",
    tag: "Residential • First-time buyers",
    stat: "1 complex easement resolved",
    image: "/images/project-2.jpg",
    summary: "First-time buyers purchasing a 1940s Lakeview home with a driveway easement that crossed two neighboring parcels.",
    challenge: "An unrecorded oral easement that surfaced during examination and threatened to cancel the sale.",
    result: "Our examiner reconstructed the chain, the sellers' attorney documented the easement, and the family closed debt-free of surprises.",
  },
  {
    slug: "maple-street-1031-exchange",
    title: "Maple Street 1031 Exchange",
    tag: "1031 Exchange • Like-kind",
    stat: "$210K tax deferred",
    image: "/images/project-3.jpg",
    summary: "A like-kind exchange selling a Maple Street duplex and acquiring a larger income property in a neighboring county.",
    challenge: "A simultaneous-close structure with a 45-day identification deadline that fell during a holiday week.",
    result: "Both closings completed on the same day, the intermediary timeline held, and the investor deferred $210K in capital gains tax.",
  },
];

export const FAQS = [
  { id: "faq-1", q: "What does a title search cover?", a: "A title search examines public records — deeds, tax rolls, court judgments, liens, easements, and encumbrances — to verify who legally owns the property and what claims or restrictions are attached to it. We deliver the findings in a clear exception report before closing." },
  { id: "faq-2", q: "Why do I need title insurance if the search is clean?", a: "A search can only reveal what is in the public record. Title insurance protects you against hidden risks — forged signatures, undisclosed heirs, recording errors — for as long as you own the property. It is a one-time premium for years of coverage." },
  { id: "faq-3", q: "How long does a typical closing take?", a: "Most residential closings run 30–45 days from contract to recorded deed. Our average title search turnaround is 48 hours, and we keep the settlement statement balanced so funding and recording happen the same day as signing." },
  { id: "faq-4", q: "What is an escrow account?", a: "Escrow is a neutral holding arrangement: we safeguard earnest money, loan funds, and signed documents between contract and closing, and disburse them only when every condition of the sale is satisfied. It protects both buyer and seller." },
  { id: "faq-5", q: "How do you protect against wire fraud?", a: "We provide verified-in-person wire instructions, confirm bank details out-of-band by phone, require dual approval on every disbursement, and never change instructions by email. Every client also receives a fraud-awareness briefing before funds move." },
  { id: "faq-6", q: "Do you handle 1031 exchanges?", a: "Yes. We coordinate with qualified intermediaries to structure like-kind exchanges, track the 45-day identification and 180-day closing deadlines, and handle both the relinquished and replacement property closings." },
];

export const VALUES = [
  { title: "Integrity first", icon: "fa-solid fa-scale-balanced", text: "We disclose every exception and every fee — even when it costs us the deal." },
  { title: "Radical clarity", icon: "fa-solid fa-file-lines", text: "Plain-English reports, line-by-line settlement walkthroughs, no jargon." },
  { title: "Speed without shortcuts", icon: "fa-solid fa-bolt", text: "48-hour searches and same-day recordings — without skipping a check." },
  { title: "Local knowledge", icon: "fa-solid fa-map", text: "We know the recorders, the forms, and the customs of every county we serve." },
];
