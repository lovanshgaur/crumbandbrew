export 

const CATEGORIES = [
    { id: 'fresh-bakes', title: 'Today’s Fresh Bakes', desc: 'Limited batch. Baked fresh every morning.' },
    { id: 'croissants', title: 'Croissants & Artisan Breads', desc: 'Hand-laminated, slow-fermented & naturally leavened.' },
    { id: 'desserts', title: 'Signature Desserts', desc: 'Modern patisserie made with premium couverture.' },
    { id: 'coffee', title: 'Brew Bar — Coffee', desc: 'Specialty single-origin beans & classic espresso.' },
    { id: 'sandwiches', title: 'Gourmet Sandwiches', desc: 'Served on house-made sourdough & brioche.' },
    { id: 'tea', title: 'Artisan Teas & Matcha', desc: 'Single-origin teas, matcha & Indian classics.' },
    { id: 'beverages', title: 'Cold Brews & Coolers', desc: 'Shakes, frappes & sparkling refreshers.' }
];

export 

const MENU = [
    { id: 'fb1', cat: 'fresh-bakes', name: 'Classic Butter Croissant', price: 180, desc: 'Flaky, buttery layers with a honeycomb interior.', img: 'https://images.unsplash.com/photo-1555507036-ab1f40ce88f4', tags: ['Bestseller'] },
    { id: 'fb2', cat: 'fresh-bakes', name: 'Pain au Chocolat', price: 210, desc: 'Dark Belgian chocolate inside laminated dough.', img: 'https://images.unsplash.com/photo-1608198093002-ad4e005484ec', tags: ['Fresh'] },
    { id: 'fb3', cat: 'fresh-bakes', name: 'Almond Croissant', price: 240, desc: 'Frangipane filled, toasted almonds on top.', img: 'https://images.unsplash.com/photo-1623334044303-241021148842', tags: [] },
    { id: 'fb4', cat: 'fresh-bakes', name: 'Pistachio Cream Croissant', price: 260, desc: 'Filled with rich pistachio crème.', img: 'https://images.unsplash.com/photo-1587248720327-8eb72564be1e', tags: ['Premium'] },
    { id: 'fb5', cat: 'fresh-bakes', name: 'Cinnamon Sugar Cruffin', price: 220, desc: 'Croissant muffin rolled in cinnamon sugar.', img: 'https://images.unsplash.com/photo-1509440159596-0249088772ff', tags: [] },

    { id: 'cb1', cat: 'croissants', name: 'Artisanal Sourdough Loaf', price: 350, desc: '48-hour naturally leavened loaf.', img: 'https://images.unsplash.com/photo-1589367920969-18ba4d95b5e6', tags: ['Vegan'] },
    { id: 'cb2', cat: 'croissants', name: 'Garlic & Herb Focaccia', price: 150, desc: 'Olive oil rich Italian flatbread.', img: 'https://images.unsplash.com/photo-1599388147587-f27352220d91', tags: ['Vegan'] },
    { id: 'cb3', cat: 'croissants', name: 'Multigrain Health Loaf', price: 320, desc: 'Seed loaded high-fiber loaf.', img: 'https://images.unsplash.com/photo-1608198093002-ad4e005484ec', tags: [] },

    { id: 'ds1', cat: 'desserts', name: 'Biscoff Cheesecake', price: 320, desc: 'Lotus Biscoff base & glaze.', img: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad', tags: ['Bestseller'] },
    { id: 'ds2', cat: 'desserts', name: 'Dark Chocolate Éclair', price: 260, desc: '70% chocolate crème pâtissière.', img: 'https://images.unsplash.com/photo-1619860860774-1e2e17343432', tags: [] },
    { id: 'ds3', cat: 'desserts', name: 'Hazelnut Praline Entremet', price: 420, desc: 'Layered mousse with crunch.', img: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587', tags: ['Premium'] },

    { id: 'cf1', cat: 'coffee', name: 'Flat White', price: 200, desc: 'Double ristretto with microfoam.', img: 'https://images.unsplash.com/photo-1570968915860-54d5c301fa9f', tags: [] },
    { id: 'cf2', cat: 'coffee', name: 'Spanish Latte', price: 260, desc: 'Condensed milk & espresso.', img: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085', tags: ['Bestseller'] },
    { id: 'cf3', cat: 'coffee', name: 'Pour Over (Single Origin)', price: 300, desc: 'Manual brew, clean & aromatic.', img: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e', tags: ['Premium'] },

    { id: 'sw1', cat: 'sandwiches', name: 'Truffle Mushroom Sandwich', price: 320, desc: 'Mushroom, truffle mayo, sourdough.', img: 'https://images.unsplash.com/photo-1553909489-cd47e0ef937f', tags: ['Veg'] },
    { id: 'sw2', cat: 'sandwiches', name: 'Pesto Paneer Sandwich', price: 310, desc: 'Grilled paneer, basil pesto.', img: 'https://images.unsplash.com/photo-1604908812427-56d0d5c8b2c0', tags: ['Bestseller', 'Veg'] },

    { id: 'te1', cat: 'tea', name: 'Matcha Latte', price: 280, desc: 'Ceremonial grade matcha.', img: 'https://images.unsplash.com/photo-1515823064-d6e0c04616a7', tags: [] },
    { id: 'te2', cat: 'tea', name: 'Masala Chai (Kettle)', price: 180, desc: 'Slow brewed house blend.', img: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3', tags: [] },

    { id: 'bv1', cat: 'beverages', name: 'Cold Coffee Frappe', price: 260, desc: 'Blended coffee with ice cream.', img: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735', tags: [] }
];
