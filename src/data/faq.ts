// ============================================================================
// FAQ DATA
// Answers are written to be accurate rather than impressive — no fixed
// repair-time promises, no "we service every brand" claims, no invented
// parts policy. Edit the bracketed placeholder in the parts-policy answer
// once SVPHome ARS confirms the real policy.
// ============================================================================

export interface FaqItem {
  id: string;
  question: string;
  /** Plain text, or simple HTML (e.g. an <a> tag) — rendered with set:html. */
  answer: string;
}

export const faqItems: FaqItem[] = [
  {
    id: "what-appliances",
    question: "What appliances does SVPHome ARS repair?",
    answer:
      "SVPHome ARS repairs and services washing machines, refrigerators, air conditioners, microwave ovens, TVs and other electronics, and select other household appliances. See our <a href=\"/#services\">full list of services</a> for details on each.",
  },
  {
    id: "doorstep-service",
    question: "Does SVPHome ARS provide doorstep service?",
    answer:
      "Yes. A technician visits your home at the scheduled time to inspect and repair the appliance, so you don't need to transport it anywhere.",
  },
  {
    id: "how-to-book",
    question: "How can I book an appliance repair?",
    answer:
      "You can call us, message us on WhatsApp, or use the <a href=\"/#booking\">Book a Service</a> option on this website. Share your appliance type and the issue you're facing, and we'll take it from there.",
  },
  {
    id: "repair-duration",
    question: "How long does a repair take?",
    answer:
      "It depends on the appliance and the problem. Some issues are resolved in a single visit, while others may take longer if parts need to be sourced. Your technician will give you a clearer estimate after inspecting the appliance.",
  },
  {
    id: "brands-serviced",
    question: "Does SVPHome ARS service all brands?",
    answer:
      "Brand support varies. See our <a href=\"/#brands\">brands we service</a> section, and contact us to confirm availability for your specific brand and model before booking.",
  },
  {
    id: "replacement-parts",
    question: "Does SVPHome ARS provide replacement parts?",
    answer:
      "When a repair requires a replacement part, our technician will source a suitable one for your appliance. [ADD PARTS POLICY — e.g. sourcing process, brand-original vs. compatible parts, part warranty] once confirmed.",
  },
  {
    id: "repair-cost",
    question: "How much does appliance repair cost?",
    answer:
      "Cost depends on the diagnosis, the appliance type, the complexity of the repair, and whether replacement parts are needed. You'll be told the recommended repair and its cost before any work begins.",
  },
  {
    id: "appointment-time",
    question: "Can I choose an appointment time?",
    answer:
      "Yes — when you contact us, let us know your preferred day and time. We'll confirm a slot based on technician availability in your area.",
  },
  {
    id: "booking-info",
    question: "What information should I provide when booking?",
    answer:
      "To help us prepare for your visit, please share: the appliance type, the brand/model (if known), a description of the problem, your location, and your preferred appointment time.",
  },
];
