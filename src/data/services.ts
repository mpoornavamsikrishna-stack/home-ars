// ============================================================================
// SERVICES DATA
// Add, remove, or edit a service by editing this array only — ServiceSection
// and ServiceCard both render straight from this list, so nothing about a
// service needs to be duplicated elsewhere in the site.
// ============================================================================

export type ApplianceIconName =
  | "washing-machine"
  | "refrigerator"
  | "ac"
  | "microwave"
  | "tv"
  | "other";

export interface Service {
  id: string;
  icon: ApplianceIconName;
  name: string;
  /** Filename only (e.g. "washing-machine.jpg") — resolved against src/assets/services/. Optional. */
  photo?: string;
  description: string;
  /**
   * Specific appliance types/variants covered under this service (e.g. "Split ac",
   * "Portable ac"). When present, ServiceCard shows this list instead of the
   * `description` sentence — a more useful, specific summary of what's covered.
   */
  variants?: string[];
  /** Common problems this service covers. Shown as a scannable list on the card. */
  problems: string[];
  ctaLabel: string;
  /**
   * "booking" links the card to the booking section (#booking).
   * "whatsapp" links to a WhatsApp chat with a pre-filled, service-specific message —
   * used for the flexible "other appliances" card where a fixed booking flow doesn't fit.
   */
  ctaType: "booking" | "whatsapp";
  /** Only used when ctaType is "whatsapp". Falls back to the site-wide default message if omitted. */
  whatsappMessage?: string;
}

export const services: Service[] = [
  {
    id: "washing-machine",
    photo: "washing-machine.jpg",
    icon: "washing-machine",
    name: "Washing Machine Repair",
    description: "Troubleshooting, repair, and servicing for front-load and top-load washing machines.",
    variants: [
      "Semi-automatic washing machine",
      "Fully automatic top-load washing machine",
      "Fully automatic front-load washing machine",
    ],
    problems: [
      "Not starting",
      "Not filling with water",
      "Not draining",
      "Spin problems",
      "Excessive vibration",
      "Unusual noise",
      "Leakage",
      "Door/lock problems",
      "Error codes",
      "General servicing",
    ],
    ctaLabel: "Book Washing Machine Service",
    ctaType: "booking",
  },
  {
    id: "refrigerator",
    photo: "refrigerator.jpg",
    icon: "refrigerator",
    name: "Refrigerator Repair",
    description: "Repair and maintenance for single-door, double-door, and multi-door refrigerators.",
    variants: [
      "Single door refrigerator (Inverter or non-inverter)",
      "Double door refrigerator (Inverter or non-inverter)",
      "Side-by-side refrigerator",
      "French door refrigerator",
    ],
    problems: [
      "Not cooling",
      "Freezer problems",
      "Excessive ice",
      "Water leakage",
      "Unusual noise",
      "Temperature problems",
      "Door/seal issues",
      "General servicing",
    ],
    ctaLabel: "Book Refrigerator Service",
    ctaType: "booking",
  },
  {
    id: "air-conditioner",
    photo: "air-conditioner.jpg",
    icon: "ac",
    name: "AC Repair & Service",
    description: "Repair, cleaning, and maintenance for split and window air conditioners.",
    variants: ["Split ac", "Portable ac", "Central ac", "Cassette ac", "Ductless mini-split ac"],
    problems: [
      "Not cooling",
      "Weak airflow",
      "Water leakage",
      "Bad smell",
      "Unusual noise",
      "Filter cleaning",
      "Performance problems",
      "General maintenance",
    ],
    ctaLabel: "Book AC Service",
    ctaType: "booking",
  },
  {
    id: "microwave",
    photo: "microwave.jpg",
    icon: "microwave",
    name: "Microwave Repair",
    description: "Repair and servicing for microwave ovens and convection microwaves.",
    problems: [
      "Not heating",
      "Power problems",
      "Control/button problems",
      "Turntable problems",
      "Door problems",
      "General servicing",
    ],
    ctaLabel: "Book Microwave Service",
    ctaType: "booking",
  },
  {
    id: "tv-electronics",
    photo: "tv-electronics.jpg",
    icon: "tv",
    name: "TV & Electronics Repair",
    description: "Troubleshooting and repair for televisions and other household electronics.",
    problems: [
      "Not powering on",
      "Display problems",
      "Sound problems",
      "Connectivity problems",
      "Remote/control issues",
      "General troubleshooting",
    ],
    ctaLabel: "Book Electronics Service",
    ctaType: "booking",
  },
  {
    id: "other-appliances",
    photo: "other-appliances.jpg",
    icon: "other",
    name: "Other Household Appliances",
    description:
      "Have an appliance that's not listed above? Tell us what it is and what's wrong, and we'll let you know if we can help.",
    problems: [],
    ctaLabel: "Ask About Your Appliance",
    ctaType: "whatsapp",
    whatsappMessage:
      "Hi SVPHome ARS, I have a household appliance that isn't listed on your website. Can you help?",
  },
];
