// ============================================================================
// APPLIANCE PHOTOS DATA
// Photos shown in the hero's auto-advancing slider. Labels are drawn directly
// from the site's official service list (src/data/business.ts -> services)
// so the slider never claims a service that isn't actually offered.
//
// Add or remove entries freely — ApplianceSlider.astro renders straight from
// this array. `image` is just the filename — the actual files live in
// src/assets/appliances/ and are resolved + optimized by Astro's Image
// component at build time.
// ============================================================================

export interface ApplianceSlide {
  id: string;
  /** Filename only (e.g. "washing-machine-1.jpg") — resolved against src/assets/appliances/. */
  image: string;
  label: string;
}

export const applianceSlides: ApplianceSlide[] = [
  {
    id: "washing-machine-1",
    image: "washing-machine-1.jpg",
    label: "Washing Machine Repair & Service",
  },
  {
    id: "washing-machine-2",
    image: "washing-machine-2.jpg",
    label: "Washing Machine Repair & Service",
  },
  {
    id: "refrigerator-1",
    image: "refrigerator-1.jpg",
    label: "Refrigerator Repair & Service",
  },
  {
    id: "refrigerator-2",
    image: "refrigerator-2.jpg",
    label: "Refrigerator Repair & Service",
  },
  {
    id: "air-conditioner-1",
    image: "air-conditioner-1.jpg",
    label: "Air Conditioner Repair & Service",
  },
  {
    id: "air-conditioner-2",
    image: "air-conditioner-2.jpg",
    label: "Air Conditioner Repair & Service",
  },
  {
    id: "microwave-1",
    image: "microwave-1.jpg",
    label: "Microwave Oven Repair",
  },
  {
    id: "other-water-purifier-1",
    image: "other-water-purifier-1.jpg",
    label: "Other Household Appliance Repair & Service",
  },
  {
    id: "other-water-purifier-2",
    image: "other-water-purifier-2.jpg",
    label: "Other Household Appliance Repair & Service",
  },
  {
    id: "other-oven-1",
    image: "other-oven-1.jpg",
    label: "Other Household Appliance Repair & Service",
  },
  {
    id: "other-oven-2",
    image: "other-oven-2.jpg",
    label: "Other Household Appliance Repair & Service",
  },
];
