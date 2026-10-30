export interface Product {
  id: string;
  name: string;
  price: number;
  tagline: string;
  description: string;
  category: string;
  imageUrl: string;
  inStock: boolean;
}

export const products: Product[] = [
  {
    id: "titanium-wrench",
    name: "Titanium Adjustable Wrench",
    price: 129,
    tagline: "Aerospace-grade durability in your palm.",
    description: "Forged from aerospace-grade titanium alloy, this wrench offers unmatched strength-to-weight ratio, corrosion resistance, and precision jaw adjustment for heavy-duty engineering tasks.",
    category: "Hand Tools",
    imageUrl: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80",
    inStock: true,
  },
  {
    id: "carbon-multimeter",
    name: "Digital Carbon Multimeter",
    price: 249,
    tagline: "High-precision electrical diagnostics.",
    description: "Engineered for professional electricians and developers, featuring true-RMS accuracy, auto-ranging measurements, and an impact-resistant carbon composite casing.",
    category: "Electronics",
    imageUrl: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=600&q=80",
    inStock: true,
  },
  {
    id: "laser-level-pro",
    name: "Laser Level Pro 360",
    price: 189,
    tagline: "Self-leveling cross-line precision.",
    description: "Projects bright 360-degree horizontal and vertical laser lines with micro-adjustment leveling base for flawless alignment on construction and fabrication projects.",
    category: "Measurement",
    imageUrl: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80",
    inStock: true,
  },
  {
    id: "precision-soldering-station",
    name: "Precision Soldering Station",
    price: 159,
    tagline: "Rapid thermal recovery and digital control.",
    description: "Features a rapid-heating ceramic core, precise digital temperature control, and ergonomic soldering handle designed for delicate PCB repairs and prototyping.",
    category: "Electronics",
    imageUrl: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=600&q=80",
    inStock: true,
  },
  {
    id: "industrial-safety-harness",
    name: "Industrial Safety Harness",
    price: 99,
    tagline: "Ergonomic fall protection gear.",
    description: "Built with heavy-duty webbing, quick-connect aluminum buckles, and breathable padding designed for all-day comfort and safety compliance at height.",
    category: "Safety Gear",
    imageUrl: "https://images.unsplash.com/photo-1541888946425-d0fbb18f106d?auto=format&fit=crop&w=600&q=80",
    inStock: true,
  },
  {
    id: "hydraulic-crimper",
    name: "Hydraulic Cable Crimper",
    price: 219,
    tagline: "Effortless heavy-gauge wire termination.",
    description: "Delivers up to 10 tons of crimping force with interchangeable hex dies, ideal for heavy electrical installations, battery cables, and rigging work.",
    category: "Hand Tools",
    imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80",
    inStock: false,
  },
  {
    id: "torque-screwdriver-set",
    name: "Torque Screwdriver Set",
    price: 119,
    tagline: "Calibrated fastening precision.",
    description: "Micro-adjustable torque screwdriver kit complete with 20 interchangeable bits, calibration certificate, and secure blow-molded storage case.",
    category: "Hand Tools",
    imageUrl: "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?auto=format&fit=crop&w=600&q=80",
    inStock: true,
  },
];

export function getProduct(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}