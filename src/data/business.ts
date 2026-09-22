// ============================================================================
// CENTRAL BUSINESS CONFIGURATION
// Every contact detail, nav link, and service label used across the site
// pulls from this file. Replace the placeholder values below with real
// business information — nothing here has been invented.
// ============================================================================

export const business = {
  name: "SVPHome ARS",
  tagline: "Appliance Repair & Service",

  // --- Contact ---------------------------------------------------------
  // Human-readable phone, shown in the UI.
  phoneDisplay: "+91 8186016658",
  // Phone for tel: links, in full E.164 format with a leading "+" and country
  // code — required for the link to dial correctly on every device/carrier.
  // (A bare "9188..." without the "+" can fail to connect or misdial.)
  phoneHref: "+918186016658",

  // Digits-only WhatsApp number (with country code, no plus sign) for wa.me links.
  whatsappNumber: "918186016658",
  whatsappMessage: "Hi SVPHome ARS, I'd like help with an appliance repair.",
  // Pre-filled message used specifically by the floating WhatsApp button.
  whatsappFloatingMessage:
    "Hello SVPHome ARS, I need appliance repair/service. My appliance is [APPLIANCE TYPE] and the issue is [PROBLEM]. Please let me know the available service time.",

  email: "chparashuram45@gmail.com",

  // --- Location ----------------------------------------------------------
  city: "Hyderabad",
  address:
    "Plot No: 1-98/73, Annapurna Curries Point, Ayyapa Society, Sri Sai Nagar Colony, Madhapur, Hyderabad, Telangana, 500081",

  // --- Hours ---------------------------------------------------------------
  hours: "7 AM – 10 PM",

  // --- Service charge ticker -----------------------------------------------
  serviceChargeNotice: "Service Charge ₹350 only",

  // --- Booking form backend -------------------------------------------------
  // Formspree form ID that the booking form submits to (see src/lib/booking.ts
  // for how this is used, and README.md for how to get this value). Leave as
  // the bracketed placeholder until you've created a real Formspree form —
  // the booking form honestly falls back to "call or WhatsApp us" until then.
  formspreeFormId: "xbgllnpb",
} as const;

// Helper to build a tel: href from the configured phone number.
export const telHref = () => `tel:${business.phoneHref.replace(/[^\d+]/g, "")}`;

// Helper to build a wa.me href with a pre-filled message. Pass a custom
// message (e.g. for a specific service inquiry) or omit it to use the
// default greeting above.
export const whatsappHref = (message: string = business.whatsappMessage) =>
  `https://wa.me/${business.whatsappNumber.replace(/[^\d]/g, "")}?text=${encodeURIComponent(message)}`;

// True if a business.ts field is still an unfilled "[PLACEHOLDER]" value.
// Used so structured data / SEO output never publishes bracket placeholders
// as if they were real business information.
export const isPlaceholder = (value: string) => {
  const trimmed = value.trim();
  return trimmed.startsWith("[") && trimmed.endsWith("]");
};

// --- Services --------------------------------------------------------------
// Used by navigation, services sections, and SEO copy in later sections.
export const services = [
  { id: "washing-machine", label: "Washing Machine Repair & Service" },
  { id: "refrigerator", label: "Refrigerator Repair & Service" },
  { id: "air-conditioner", label: "Air Conditioner Repair & Service" },
  { id: "microwave", label: "Microwave Oven Repair" },
  { id: "tv-electronics", label: "TV & Electronics Repair" },
  { id: "other-appliances", label: "Other Household Appliance Repair & Service" },
] as const;

// --- Primary navigation ------------------------------------------------
// Shared by desktop and mobile navigation so both stay in sync.
export const navLinks = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Appliances", href: "/#services" },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "FAQ", href: "/#faq" },
  { label: "Contact", href: "/#contact" },
] as const;

// --- Trust indicators --------------------------------------------------
// Only claims SVPHome ARS can actually stand behind — no invented stats.
export const trustIndicators = [
  {
    title: "Skilled technicians",
    description: "Trained to work on major appliance brands and models.",
  },
  {
    title: "Doorstep service",
    description: "We come to your home so appliances don't need to travel.",
  },
  {
    title: "Transparent communication",
    description: "You're told what's wrong and what it costs before we start.",
  },
  {
    title: "Quality parts",
    description: "Replacement parts sourced for reliable, lasting repairs.",
  },
  {
    title: "Convenient scheduling",
    description: "Book a slot that fits your day, including flexible timing.",
  },
  {
    title: "Multiple appliance services",
    description: "One team for washing machines, fridges, ACs, microwaves & more.",
  },
] as const;
