// ============================================================================
// BRANDS DATA
// Only list a brand here once SVPHome ARS has confirmed it services that brand.
// Add or remove entries freely — BrandGrid.astro renders straight from this
// array as a continuously scrolling marquee.
//
// Logo files live in public/images/brands/ — add a new one there and reference it
// here by filename.
// ============================================================================

export interface Brand {
  id: string;
  name: string;
  logo: string;
}

export const brands: Brand[] = [
  { id: "samsung", name: "Samsung", logo: "/images/brands/samsung.png" },
  { id: "lg", name: "LG", logo: "/images/brands/lg.png" },
  { id: "whirlpool", name: "Whirlpool", logo: "/images/brands/whirlpool.png" },
  { id: "godrej", name: "Godrej", logo: "/images/brands/godrej.png" },
  { id: "ifb", name: "IFB", logo: "/images/brands/ifb.png" },
  { id: "bosch", name: "Bosch", logo: "/images/brands/bosch.png" },
  { id: "panasonic", name: "Panasonic", logo: "/images/brands/panasonic.png" },
  { id: "philips", name: "Philips", logo: "/images/brands/philips.png" },
  { id: "havells", name: "Havells", logo: "/images/brands/havells.png" },
  { id: "crompton", name: "Crompton", logo: "/images/brands/crompton.png" },
  { id: "bajaj-electricals", name: "Bajaj Electricals", logo: "/images/brands/bajaj-electricals.png" },
  { id: "prestige", name: "Prestige", logo: "/images/brands/prestige.png" },
  { id: "voltas", name: "Voltas", logo: "/images/brands/voltas.png" },
  { id: "blue-star", name: "Blue Star", logo: "/images/brands/blue-star.png" },
  { id: "haier", name: "Haier", logo: "/images/brands/haier.png" },
];
