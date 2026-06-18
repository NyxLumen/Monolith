import type { Product } from '../types';

export const products: Product[] = [
  {
    id: 1,
    title: 'Aero Backpack',
    price: 129.00,
    description: 'Designed for daily travel and technical storage. Built from robust weather-resistant materials to keep your essentials safe, wherever life takes you.',
    category: 'essentials',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=600',
    rating: { rate: 4.8, count: 124 }
  },
  {
    id: 2,
    title: 'Nova Headphones',
    price: 149.00,
    description: 'Active noise-cancelling headphones featuring crisp acoustic architecture and plush ear cushions for prolonged listening comfort.',
    category: 'audio',
    image: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&q=80&w=600',
    rating: { rate: 4.9, count: 320 }
  },
  {
    id: 3,
    title: 'Chrono Watch',
    price: 199.00,
    description: 'Precision mechanical timekeeper with a matte black chassis and solid link bracelet. Water-resistant, timeless design.',
    category: 'accessories',
    image: 'https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?auto=format&fit=crop&q=80&w=600',
    rating: { rate: 4.7, count: 98 }
  },
  {
    id: 4,
    title: 'Trail Sneakers',
    price: 99.00,
    description: 'Lightweight technical sneakers with engineered mesh ventilation, springy foam cushioning, and high-traction rubber outsoles.',
    category: 'footwear',
    image: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&q=80&w=600',
    rating: { rate: 4.6, count: 215 }
  },
  {
    id: 5,
    title: 'Vibe Sunglasses',
    price: 59.00,
    description: 'Polarized sunglasses in a durable tortoiseshell cellulose acetate frame. Full UV400 protection with metal screw hinge details.',
    category: 'accessories',
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&q=80&w=600',
    rating: { rate: 4.5, count: 86 }
  },
  {
    id: 6,
    title: 'Orbit Camera',
    price: 249.00,
    description: 'Ultra-compact mirrorless digital camera capturing high-fidelity raw snapshots. Perfect pocket-sized explorer tool.',
    category: 'essentials',
    image: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&q=80&w=600',
    rating: { rate: 4.8, count: 64 }
  },
  {
    id: 7,
    title: 'Horizon Jacket',
    price: 129.00,
    description: 'Windproof technical jacket with an adjustable storm hood, zippered pocket sheets, and utility loop points. Designed to endure.',
    category: 'apparel',
    image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&q=80&w=600',
    rating: { rate: 4.7, count: 142 }
  },
  {
    id: 8,
    title: 'Tech Pouch',
    price: 39.00,
    description: 'Padded tech accessory organizer. Keeps cables, power bricks, and memory chips stored securely in elastic grid bays.',
    category: 'essentials',
    image: 'https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?auto=format&fit=crop&q=80&w=600',
    rating: { rate: 4.6, count: 178 }
  },
  {
    id: 9,
    title: 'Classic Cap',
    price: 29.00,
    description: 'Cotton-twill classic dad cap. Built with a curved brim, adjustable metal clasp fastener, and embroidered detail.',
    category: 'accessories',
    image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&q=80&w=600',
    rating: { rate: 4.4, count: 54 }
  },
  {
    id: 10,
    title: 'Leather Wallet',
    price: 49.00,
    description: 'Bi-fold pocket wallet crafted from full-grain vegetable-tanned leather. Holds up to 8 cards and paper bills in a slim profile.',
    category: 'accessories',
    image: 'https://images.unsplash.com/photo-1627124768123-047b4eb585d6?auto=format&fit=crop&q=80&w=600',
    rating: { rate: 4.8, count: 112 }
  },
  {
    id: 11,
    title: 'Insulated Bottle',
    price: 35.00,
    description: 'Double-walled vacuum insulated stainless steel water bottle. Keeps your beverage icy cold for 24 hours or steaming hot for 12.',
    category: 'essentials',
    image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&q=80&w=600',
    rating: { rate: 4.9, count: 235 }
  },
  {
    id: 12,
    title: 'Canvas Tote',
    price: 45.00,
    description: 'Heavyweight organic cotton canvas tote. Finished with double-stitched web straps and an interior zipper pocket.',
    category: 'essentials',
    image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=600',
    rating: { rate: 4.7, count: 167 }
  }
];
