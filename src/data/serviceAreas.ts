// ============================================================================
// SERVICE AREAS DATA
// Only list an area here once SVPHome ARS has confirmed it's actually served.
// Add or remove entries freely — ServiceAreas.astro renders straight from
// this array.
// ============================================================================

export interface ServiceArea {
  id: string;
  name: string;
}

export const serviceAreas: ServiceArea[] = [
  { id: "hyderabad", name: "Hyderabad" },
  { id: "madhapur", name: "Madhapur" },
  { id: "kondapur", name: "Kondapur" },
  { id: "kphb", name: "KPHB" },
  { id: "ameerpeta", name: "Ameerpeta" },
];
