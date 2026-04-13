export const CATEGORIES = [
  { id: 'fresh-bakes', title: 'Today’s Fresh Bakes', desc: 'Limited batch. Baked fresh every morning.' },
  { id: 'croissants', title: 'Croissants & Artisan Breads', desc: 'Hand-laminated, slow-fermented & naturally leavened.' },
  { id: 'desserts', title: 'Signature Desserts', desc: 'Modern patisserie made with premium couverture.' },
  { id: 'coffee', title: 'Brew Bar — Coffee', desc: 'Specialty single-origin beans & classic espresso.' },
  { id: 'sandwiches', title: 'Gourmet Sandwiches', desc: 'Served on house-made sourdough & brioche.' },
  { id: 'tea', title: 'Artisan Teas & Matcha', desc: 'Single-origin teas, matcha & Indian classics.' },
  { id: 'beverages', title: 'Cold Brews & Coolers', desc: 'Shakes, frappes & sparkling refreshers.' }
];

export const MENU = [
  {
    id: 'fb1',
    cat: 'fresh-bakes',
    name: 'Classic Butter Croissant',
    price: 180,
    priceLabel: '₹180',
    desc: 'Flaky, buttery layers with a honeycomb interior.',
    img: '/assets/butterCroissant.png',
    tags: ['bestseller'],
    isAvailable: true
  },
  {
    id: 'fb2',
    cat: 'fresh-bakes',
    name: 'Pain au Chocolat',
    price: 210,
    priceLabel: '₹210',
    desc: 'Dark Belgian chocolate inside laminated dough.',
    img: '/assets/choclateCroissant.png',
    tags: ['fresh'],
    isAvailable: true
  },
  {
    id: 'fb3',
    cat: 'fresh-bakes',
    name: 'Almond Croissant',
    price: 240,
    priceLabel: '₹240',
    desc: 'Frangipane filled, toasted almonds on top.',
    img: '/assets/teaCake.png',
    tags: [],
    isAvailable: true
  },
  {
    id: 'fb4',
    cat: 'fresh-bakes',
    name: 'Pistachio Cream Croissant',
    price: 260,
    priceLabel: '₹260',
    desc: 'Filled with rich pistachio crème.',
    img: '/assets/pistachioCroissant.png',
    tags: ['premium'],
    isAvailable: true
  },
  {
    id: 'fb5',
    cat: 'fresh-bakes',
    name: 'Cinnamon Sugar Cruffin',
    price: 220,
    priceLabel: '₹220',
    desc: 'Croissant muffin rolled in cinnamon sugar.',
    img: '/assets/cinnamonCruffin.png',
    tags: [],
    isAvailable: true
  },

  {
    id: 'cb1',
    cat: 'croissants',
    name: 'Artisanal Sourdough Loaf',
    price: 350,
    priceLabel: '₹350',
    desc: '48-hour naturally leavened loaf.',
    img: '/assets/sourdoughLoaf.png',
    tags: ['vegan'],
    isAvailable: true
  },
  {
    id: 'cb2',
    cat: 'croissants',
    name: 'Garlic & Herb Focaccia',
    price: 150,
    priceLabel: '₹150',
    desc: 'Olive oil rich Italian flatbread.',
    img: '/assets/focaccia.png',
    tags: ['vegan'],
    isAvailable: true
  },
  {
    id: 'cb3',
    cat: 'croissants',
    name: 'Multigrain Health Loaf',
    price: 320,
    priceLabel: '₹320',
    desc: 'Seed loaded high-fiber loaf.',
    img: '/assets/sourdoughLoaf.png',
    tags: [],
    isAvailable: true
  },

  {
    id: 'ds1',
    cat: 'desserts',
    name: 'Biscoff Cheesecake',
    price: 320,
    priceLabel: '₹320',
    desc: 'Lotus Biscoff base & glaze.',
    img: '/assets/biscoffCheesecake.png',
    tags: ['bestseller'],
    isAvailable: true
  },
  {
    id: 'ds2',
    cat: 'desserts',
    name: 'Dark Chocolate Éclair',
    price: 260,
    priceLabel: '₹260',
    desc: '70% chocolate crème pâtissière.',
    img: '/assets/belgianChoclate.png',
    tags: [],
    isAvailable: true
  },
  {
    id: 'ds3',
    cat: 'desserts',
    name: 'Hazelnut Praline Entremet',
    price: 420,
    priceLabel: '₹420',
    desc: 'Layered mousse with crunch.',
    img: '/assets/oreoShake.png',
    tags: ['premium'],
    isAvailable: true
  },

  {
    id: 'cf1',
    cat: 'coffee',
    name: 'Flat White',
    price: 200,
    priceLabel: '₹200',
    desc: 'Double ristretto with microfoam.',
    img: '/assets/flatWhite.png',
    tags: [],
    isAvailable: true
  },
  {
    id: 'cf2',
    cat: 'coffee',
    name: 'Spanish Latte',
    price: 260,
    priceLabel: '₹260',
    desc: 'Condensed milk & espresso.',
    img: '/assets/spanishLatte.png',
    tags: ['bestseller'],
    isAvailable: true
  },
  {
    id: 'cf3',
    cat: 'coffee',
    name: 'Pour Over (Single Origin)',
    price: 300,
    priceLabel: '₹300',
    desc: 'Manual brew, clean & aromatic.',
    img: '/assets/icedLatte.png',
    tags: ['premium'],
    isAvailable: true
  },

  {
    id: 'sw1',
    cat: 'sandwiches',
    name: 'Truffle Mushroom Sandwich',
    price: 320,
    priceLabel: '₹320',
    desc: 'Mushroom, truffle mayo, sourdough.',
    img: '/assets/mushroomSandwich.png',
    tags: ['veg'],
    isAvailable: true
  },
  {
    id: 'sw2',
    cat: 'sandwiches',
    name: 'Pesto Paneer Sandwich',
    price: 310,
    priceLabel: '₹310',
    desc: 'Grilled paneer, basil pesto.',
    img: '/assets/paneerSandwich.png',
    tags: ['bestseller', 'veg'],
    isAvailable: true
  },

  {
    id: 'te1',
    cat: 'tea',
    name: 'Matcha Latte',
    price: 280,
    priceLabel: '₹280',
    desc: 'Ceremonial grade matcha.',
    img: '/assets/matchaLatte.png',
    tags: [],
    isAvailable: true
  },
  {
    id: 'te2',
    cat: 'tea',
    name: 'Masala Chai (Kettle)',
    price: 180,
    priceLabel: '₹180',
    desc: 'Slow brewed house blend.',
    img: '/assets/masalaChai.png',
    tags: [],
    isAvailable: true
  },

  {
    id: 'bv1',
    cat: 'beverages',
    name: 'Cold Coffee Frappe',
    price: 260,
    priceLabel: '₹260',
    desc: 'Blended coffee with ice cream.',
    img: '/assets/coldCoffee.png',
    tags: [],
    isAvailable: true
  }
];