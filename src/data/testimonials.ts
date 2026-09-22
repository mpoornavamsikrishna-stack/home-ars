// ============================================================================
// TESTIMONIALS DATA
// IMPORTANT: No genuine customer reviews have been supplied yet. Every entry
// below is a placeholder — `verified: false` — and TestimonialCard renders
// placeholders with a distinct "unverified" style so they can never be
// mistaken for real reviews.
//
// To add a real review: set verified: true, fill in name/appliance/review,
// and set a rating (1–5) if the customer gave one. Do not fabricate a rating
// for a review that didn't include one — leave it as null.
// ============================================================================

export interface Testimonial {
  id: string;
  verified: boolean;
  customerName: string;
  applianceServiced: string;
  review: string;
  /** 1–5, or null if no rating was given. Never invent a value here. */
  rating: number | null;
}

export const testimonials: Testimonial[] = [
  {
    id: "review-1",
    verified: false,
    customerName: "[ADD CUSTOMER NAME]",
    applianceServiced: "[ADD APPLIANCE TYPE]",
    review: "[ADD VERIFIED CUSTOMER REVIEW]",
    rating: null,
  },
  {
    id: "review-2",
    verified: false,
    customerName: "[ADD CUSTOMER NAME]",
    applianceServiced: "[ADD APPLIANCE TYPE]",
    review: "[ADD VERIFIED CUSTOMER REVIEW]",
    rating: null,
  },
  {
    id: "review-3",
    verified: false,
    customerName: "[ADD CUSTOMER NAME]",
    applianceServiced: "[ADD APPLIANCE TYPE]",
    review: "[ADD VERIFIED CUSTOMER REVIEW]",
    rating: null,
  },
  {
    id: "review-4",
    verified: false,
    customerName: "[ADD CUSTOMER NAME]",
    applianceServiced: "[ADD APPLIANCE TYPE]",
    review: "[ADD VERIFIED CUSTOMER REVIEW]",
    rating: null,
  },
];
