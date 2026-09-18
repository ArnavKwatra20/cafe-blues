export type MenuCategory = 'Coffee' | 'Breakfast' | 'Mains' | 'Desserts' | 'Cold Drinks'

export interface MenuItem {
  id: string
  name: string
  description: string
  price: number
  category: MenuCategory
  image: string
  alt: string
  vegetarian?: boolean
  featured?: boolean
}

const photos = {
  coffee: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=85',
  latte: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&w=900&q=85',
  breakfast: 'https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=900&q=85',
  eggs: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=900&q=85',
  pasta: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=900&q=85',
  toast: 'https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?auto=format&fit=crop&w=900&q=85',
  dessert: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=900&q=85',
  cake: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=900&q=85',
  drink: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=900&q=85',
  matcha: 'https://images.unsplash.com/photo-1515823064-d6e0c04616a7?auto=format&fit=crop&w=900&q=85',
}

export const menuItems: MenuItem[] = [
  { id: 'flat-white', name: 'Velvet Flat White', description: 'Double espresso, silky microfoam, a whisper of cocoa.', price: 280, category: 'Coffee', image: photos.latte, alt: 'Flat white in a ceramic cup', vegetarian: true, featured: true },
  { id: 'pour-over', name: 'Blue Street Pour Over', description: 'Rotating single origin, hand brewed and served black.', price: 320, category: 'Coffee', image: photos.coffee, alt: 'Pour over coffee being brewed', vegetarian: true },
  { id: 'cortado', name: 'Sea Salt Cortado', description: 'Short espresso, warm milk, and a fine sea-salt finish.', price: 260, category: 'Coffee', image: photos.latte, alt: 'Cortado coffee on a wooden table', vegetarian: true },
  { id: 'cold-brew', name: 'Night Train Cold Brew', description: 'Sixteen-hour steep, orange peel, served over clear ice.', price: 300, category: 'Coffee', image: photos.drink, alt: 'Cold brew coffee with ice', vegetarian: true },
  { id: 'blue-plate', name: 'The Blue Plate', description: 'Sourdough, avocado, jammy eggs, greens, and chilli oil.', price: 540, category: 'Breakfast', image: photos.eggs, alt: 'Avocado toast with eggs and greens', vegetarian: true, featured: true },
  { id: 'ricotta-hotcakes', name: 'Ricotta Hotcakes', description: 'Cloud-soft cakes, citrus curd, whipped cream, toasted nuts.', price: 480, category: 'Breakfast', image: photos.breakfast, alt: 'Stack of ricotta hotcakes with fruit', vegetarian: true },
  { id: 'morning-bowl', name: 'Morning Grain Bowl', description: 'Coconut yoghurt, seasonal fruit, granola, maple and seeds.', price: 420, category: 'Breakfast', image: photos.breakfast, alt: 'Breakfast grain bowl with fruit', vegetarian: true },
  { id: 'spiced-eggs', name: 'Spiced Eggs & Toast', description: 'Soft scrambled eggs, labneh, herbs, grilled country loaf.', price: 460, category: 'Breakfast', image: photos.eggs, alt: 'Scrambled eggs with toast and herbs', vegetarian: true },
  { id: 'truffle-pasta', name: 'Truffle Mafaldine', description: 'Hand-cut pasta, wild mushrooms, parmesan, black truffle.', price: 690, category: 'Mains', image: photos.pasta, alt: 'Mafaldine pasta with mushrooms', vegetarian: true, featured: true },
  { id: 'miso-chicken', name: 'Miso Roast Chicken', description: 'Miso glaze, roasted vegetables, sesame and ginger jus.', price: 720, category: 'Mains', image: photos.pasta, alt: 'Roast chicken with vegetables' },
  { id: 'cafe-sandwich', name: 'The Cafe Sandwich', description: 'Grilled sourdough, smoked cheddar, tomato jam, crisp leaves.', price: 520, category: 'Mains', image: photos.toast, alt: 'Grilled sandwich with greens', vegetarian: true },
  { id: 'green-risotto', name: 'Green Garden Risotto', description: 'Peas, asparagus, basil oil and aged parmesan.', price: 580, category: 'Mains', image: photos.pasta, alt: 'Green risotto in a bowl', vegetarian: true },
  { id: 'burnt-cheesecake', name: 'Burnt Basque Cheesecake', description: 'Warm centre, caramelised top, berry compote.', price: 380, category: 'Desserts', image: photos.cake, alt: 'Slice of basque cheesecake', vegetarian: true, featured: true },
  { id: 'dark-chocolate', name: 'Dark Chocolate Tart', description: '70% chocolate ganache, sea salt, olive oil pastry.', price: 360, category: 'Desserts', image: photos.dessert, alt: 'Chocolate tart with powdered sugar', vegetarian: true },
  { id: 'seasonal-pie', name: 'Seasonal Fruit Pie', description: 'Butter pastry, market fruit, vanilla bean cream.', price: 340, category: 'Desserts', image: photos.cake, alt: 'Fruit pie with cream', vegetarian: true },
  { id: 'affogato', name: 'Affogato', description: 'Vanilla bean gelato drowned in a hot double espresso.', price: 300, category: 'Desserts', image: photos.dessert, alt: 'Affogato dessert with espresso', vegetarian: true },
  { id: 'hibiscus-fizz', name: 'Hibiscus Fizz', description: 'Tart hibiscus, grapefruit, lime and sparkling water.', price: 280, category: 'Cold Drinks', image: photos.drink, alt: 'Pink hibiscus fizz in a glass', vegetarian: true },
  { id: 'iced-matcha', name: 'Garden Iced Matcha', description: 'Ceremonial matcha, oat milk and a touch of vanilla.', price: 320, category: 'Cold Drinks', image: photos.matcha, alt: 'Iced matcha latte', vegetarian: true },
  { id: 'ginger-lime', name: 'Ginger Lime Soda', description: 'Fresh ginger syrup, lime, mint and chilled soda.', price: 260, category: 'Cold Drinks', image: photos.drink, alt: 'Ginger lime soda with mint', vegetarian: true },
  { id: 'peach-tea', name: 'White Peach Tea', description: 'Cold brewed white tea, peach, lemon verbena.', price: 300, category: 'Cold Drinks', image: photos.drink, alt: 'White peach iced tea', vegetarian: true },
]

export const categories: Array<'All' | MenuCategory> = ['All', 'Coffee', 'Breakfast', 'Mains', 'Desserts', 'Cold Drinks']
