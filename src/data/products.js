export const BRAND_INFO = {
  name: 'Sweet Cravings',
  tagline: 'Treats ND Bites',
  logo: '/logo.png',
  phone: '07075114804',
  phoneRaw: '+2347075114804',
  whatsappNumber: '2347075114804',
  instagram: '@sweet.craving_treats_nd_bites',
  instagramUrl: 'https://www.instagram.com/sweet.craving_treats_nd_bites/',
  location: 'Zoo Road, Gandun Albasa',
  city: 'Kano, Nigeria',
  openingHours: 'Monday – Sunday: 9:00 AM – 9:00 PM',
  primaryColor: '#E50050',
  secondaryColor: '#54220D',
};

export const createWhatsAppOrderLink = (product, customerName = '', deliveryNote = '') => {
  const name = typeof product === 'string' ? product : product.name;
  const price = typeof product === 'object' ? product.price : '';
  const optionsText = typeof product === 'object' ? product.optionsText : '';
  const isQuote = price && price.toLowerCase().includes('quote');
  const isContact = price && price.toLowerCase().includes('contact us for price');

  let text = `Hello Sweet Cravings! 👋\n`;
  if (customerName && customerName.trim()) {
    text += `My name is *${customerName.trim()}*.\n`;
  }

  if (isQuote) {
    text += `I would like to request a quotation for: *${name}* (${price}).\n`;
    text += `Could you please share available sizes, designs, and flavor options?`;
  } else if (isContact) {
    text += `I would like to inquire about the price and order: *${name}*.\n`;
    text += `Could you please let me know what options are available today?`;
  } else if (optionsText) {
    text += `I would like to order: *${name}* (${price} — Available: ${optionsText}).\n`;
    text += `Please let me know how soon it can be ready for pickup or delivery.`;
  } else {
    text += `I would like to order: *${name}* (${price}).\n`;
    text += `Please let me know how soon it can be ready for pickup or delivery.`;
  }

  if (deliveryNote && deliveryNote.trim()) {
    text += `\nNote / Instructions: ${deliveryNote.trim()}`;
  }

  return `https://wa.me/${BRAND_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`;
};

export const createGeneralWhatsAppLink = (customText) => {
  const text = customText || `Hello Sweet Cravings! 👋 I'm browsing your website and would like to place an order.`;
  return `https://wa.me/${BRAND_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`;
};

export const CATEGORIES = [
  {
    id: 'all',
    name: 'All Cravings',
    icon: '✨',
    description: 'Browse our full mouthwatering selection of fresh treats & bites',
  },
  {
    id: 'shawarma',
    name: 'Shawarma',
    icon: '🌯',
    description: 'Juicy, heavily stuffed & seasoned Nigerian-style grilled shawarma wraps',
    image: '/images/chicken-shawarma.jpg',
    itemCount: '2 Varieties',
  },
  {
    id: 'doughnut-packs',
    name: 'Doughnuts',
    icon: '🍩',
    description: 'Takeaway packs of freshly glazed, ring, and cream-filled doughnuts',
    image: '/images/glazed-doughnuts.jpg',
    itemCount: '3 Packs',
  },
  {
    id: 'cakes-desserts',
    name: 'Cakes & Desserts',
    icon: '🎂',
    description: 'Bento cakes, milk cakes, plain/decorated cupcakes, parfaits & birthday cakes',
    image: '/images/bento-cake.jpg',
    itemCount: '7 Delights',
  },
  {
    id: 'other-products',
    name: 'Small Chops & Snacks',
    icon: '🥟',
    description: 'Golden meat pies, spring rolls & samosa, glazed puff puff & pancakes',
    image: '/images/meat-pie.jpg',
    itemCount: '4 Bites',
  },
];

export const PRODUCTS = [
  // 1. SHAWARMA
  {
    id: 'beef-shawarma',
    name: 'Beef Shawarma',
    category: 'shawarma',
    categoryName: 'Shawarma',
    price: '₦2,000',
    hasExactPrice: true,
    description: 'Familiar Nigerian-style toasted shawarma packed with tender seasoned shredded beef, fresh crunchy cabbage, and signature creamy garlic & chili sauce wrapped warm in foil.',
    image: '/images/beef-shawarma.jpg',
    isFeatured: true,
    badge: 'Popular',
    rating: 4.9,
  },
  {
    id: 'chicken-shawarma',
    name: 'Chicken Shawarma',
    category: 'shawarma',
    categoryName: 'Shawarma',
    price: '₦3,000',
    hasExactPrice: true,
    description: 'Familiar Nigerian-style chicken shawarma loaded with juicy marinated grilled chicken, fresh veggies, and our creamy special dressing wrapped in toasted pita.',
    image: '/images/chicken-shawarma.jpg',
    isFeatured: true,
    badge: 'Bestseller',
    rating: 5.0,
  },

  // 2. CUPCAKES
  {
    id: 'plain-cupcakes',
    name: 'Plain Cupcakes (Pack of 6)',
    category: 'cakes-desserts',
    categoryName: 'Cupcakes',
    price: '₦1,500',
    hasExactPrice: true,
    description: 'Freshly baked golden, soft, and moist vanilla cupcakes baked to perfection in a convenient pack of 6.',
    image: '/images/plain-cupcakes-pack-6.jpg',
    isFeatured: false,
    badge: 'Pack of 6',
    rating: 4.8,
  },
  {
    id: 'decorated-cupcakes',
    name: 'Decorated Cupcakes',
    category: 'cakes-desserts',
    categoryName: 'Cupcakes',
    price: '₦2,000',
    hasExactPrice: true,
    description: 'Moist gourmet cupcakes topped with rich, beautiful swirls of sweet buttercream frosting, decorative pearls, and drizzle.',
    image: '/images/decorated-cupcakes.jpg',
    isFeatured: false,
    badge: 'Sweet Swirls',
    rating: 4.9,
  },

  // 3. CAKES
  {
    id: 'bento-cake',
    name: 'Bento Cake',
    category: 'cakes-desserts',
    categoryName: 'Cakes',
    price: '₦4,000',
    hasExactPrice: true,
    description: 'Small, simple, minimalist bento cake packed inside a cute lunchbox container. Clean pastel aesthetic piping with no clutter.',
    image: '/images/bento-cake.jpg',
    isFeatured: true,
    badge: 'Minimalist',
    rating: 4.9,
  },
  {
    id: 'milk-cake',
    name: 'Milk Cake',
    category: 'cakes-desserts',
    categoryName: 'Cakes',
    price: '₦2,000',
    hasExactPrice: true,
    description: 'Ultra-moist tres leches style sponge cake soaked in sweet rich infused milk, topped with cloud-soft cream.',
    image: '/images/milk-cake.jpg',
    isFeatured: false,
    badge: 'Melt-In-Mouth',
    rating: 4.9,
  },
  {
    id: 'birthday-cakes',
    name: 'Birthday Cakes',
    category: 'cakes-desserts',
    categoryName: 'Cakes',
    price: 'Custom price (Contact us for a quote)',
    hasExactPrice: false,
    orderType: 'quote',
    description: 'Custom-designed celebration birthday cakes tailored to your theme, colors, and flavor preferences. Contact us for a personalized quote.',
    image: '/images/birthday-cake.jpg',
    isFeatured: false,
    badge: 'Custom Quote',
    rating: 5.0,
  },
  {
    id: 'sliced-cakes',
    name: 'Sliced Cakes',
    category: 'cakes-desserts',
    categoryName: 'Cakes',
    price: 'Contact us for price',
    hasExactPrice: false,
    orderType: 'inquiry',
    description: 'Delicious individual slices of our freshly baked layered cakes with velvety frosting and soft crumb.',
    image: '/images/sliced-cake.jpg',
    isFeatured: false,
    badge: 'Daily Slice',
    rating: 4.7,
  },

  // 4. DESSERTS
  {
    id: 'parfait',
    name: 'Parfait',
    category: 'cakes-desserts',
    categoryName: 'Desserts',
    price: '₦2,000',
    hasExactPrice: true,
    description: 'Chilled dessert cup layered with creamy Greek yogurt, crunchy granola, fresh fruit, and sweet honey drizzle.',
    image: '/images/parfait.jpg',
    isFeatured: true,
    badge: 'Customer Choice',
    rating: 4.9,
  },

  // 5. SMALL CHOPS
  {
    id: 'meat-pie',
    name: 'Meat Pie',
    category: 'other-products',
    categoryName: 'Small Chops',
    price: '₦500 / ₦1,000 depending on size',
    hasExactPrice: true,
    optionsText: 'Regular: ₦500 | Large: ₦1,000',
    description: 'Realistic golden-brown Nigerian meat pie with buttery flaky crimped crust loaded with well-seasoned minced meat, tender potato cubes, and carrots.',
    image: '/images/meat-pie.jpg',
    isFeatured: true,
    badge: 'Classic Snack',
    rating: 4.9,
  },
  {
    id: 'spring-rolls-and-samosa',
    name: 'Spring Rolls and Samosa',
    category: 'other-products',
    categoryName: 'Small Chops',
    price: '4 pieces for ₦1,000',
    hasExactPrice: true,
    description: 'Crispy golden fried Nigerian small chops: crunchy vegetable/meat spring rolls and spicy aromatic samosa pockets.',
    image: '/images/spring-rolls-and-samosa.jpg',
    isFeatured: false,
    badge: '4 Pieces',
    rating: 4.8,
  },

  // 6. GLAZED PUFF PUFF
  {
    id: 'glazed-puff-puff',
    name: 'Glazed Puff Puff',
    category: 'other-products',
    categoryName: 'Small Chops',
    price: 'Pack of 8 — ₦1,500',
    hasExactPrice: true,
    description: 'Familiar Nigerian round puff-puff pieces, fried to deep golden brown and generously coated with our sweet, shiny glossy sugar glaze.',
    image: '/images/glazed-puff-puff.jpg',
    isFeatured: true,
    badge: 'Pack of 8',
    rating: 5.0,
  },

  // 7. DOUGHNUTS
  {
    id: 'ring-doughnuts',
    name: 'Ring Doughnuts',
    category: 'doughnut-packs',
    categoryName: 'Doughnuts',
    price: 'Pack of 3 for ₦1,000',
    hasExactPrice: true,
    description: 'Classic airy, golden round ring doughnuts fried fresh and dusted in fine sweet sugar crystals in a takeaway box.',
    image: '/images/ring-doughnuts.jpg',
    isFeatured: false,
    badge: 'Pack of 3',
    rating: 4.8,
  },
  {
    id: 'filled-doughnuts',
    name: 'Filled Doughnuts',
    category: 'doughnut-packs',
    categoryName: 'Doughnuts',
    price: 'Pack of 2 for ₦2,000; Pack of 3 for ₦3,000',
    hasExactPrice: true,
    optionsText: 'Pack of 2: ₦2,000 | Pack of 3: ₦3,000',
    description: 'Pillowy-soft round doughnuts dusted with sugar and bursting with rich creamy custard, strawberry jam, or chocolate filling.',
    image: '/images/filled-doughnuts.jpg',
    isFeatured: false,
    badge: 'Pack Options',
    rating: 4.9,
  },
  {
    id: 'glazed-doughnuts',
    name: 'Glazed Doughnuts',
    category: 'doughnut-packs',
    categoryName: 'Doughnuts',
    price: 'Pack of 2 for ₦2,000; Pack of 3 for ₦3,000',
    hasExactPrice: true,
    optionsText: 'Pack of 2: ₦2,000 | Pack of 3: ₦3,000',
    description: 'Freshly dipped in our signature sweet glaze that crackles with every soft, warm bite. Packed in an attractive takeaway box.',
    image: '/images/glazed-doughnuts.jpg',
    isFeatured: false,
    badge: 'Pack Options',
    rating: 4.9,
  },

  // 8. OTHER TREATS
  {
    id: 'pancakes',
    name: 'Pancakes',
    category: 'other-products',
    categoryName: 'Other Treats',
    price: 'Contact us for price',
    hasExactPrice: false,
    orderType: 'inquiry',
    description: 'Golden, fluffy skillet pancakes made with rich vanilla batter, served warm and ready to satisfy your cravings.',
    image: '/images/pancakes.jpg',
    isFeatured: false,
    badge: 'Fluffy Stack',
    rating: 4.8,
  },
];
