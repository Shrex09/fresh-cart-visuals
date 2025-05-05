
export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  category: string;
  image: string;
  stock: number;
  unit: string;
  isPromoted?: boolean;
}

export const products: Product[] = [
  // Fruits
  {
    id: "fruit-001",
    name: "Organic Apples",
    price: 2.99,
    description: "Fresh locally-sourced organic apples, perfect for healthy snacking.",
    category: "Fruits",
    image: "https://images.unsplash.com/photo-1567306226408-c02fe98d5131",
    stock: 45,
    unit: "lb",
    isPromoted: true
  },
  {
    id: "fruit-002",
    name: "Bananas",
    price: 0.59,
    description: "Sweet and nutritious bananas, great source of potassium.",
    category: "Fruits",
    image: "https://images.unsplash.com/photo-1528825871115-3581a5387919",
    stock: 80,
    unit: "lb"
  },
  {
    id: "fruit-003",
    name: "Strawberries",
    price: 3.99,
    description: "Sweet juicy strawberries, perfect for desserts or eating fresh.",
    category: "Fruits",
    image: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6",
    stock: 25,
    unit: "box"
  },
  {
    id: "fruit-004",
    name: "Avocados",
    price: 1.99,
    description: "Ripe and ready to eat avocados, great for salads and sandwiches.",
    category: "Fruits",
    image: "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578",
    stock: 30,
    unit: "each"
  },

  // Meat
  {
    id: "meat-001",
    name: "Grass-fed Ground Beef",
    price: 8.99,
    description: "Premium grass-fed ground beef, perfect for burgers and meatballs.",
    category: "Meat",
    image: "https://images.unsplash.com/photo-1565116175817-e9d4c757f638",
    stock: 15,
    unit: "lb",
    isPromoted: true
  },
  {
    id: "meat-002",
    name: "Organic Chicken Breast",
    price: 6.99,
    description: "Fresh organic boneless chicken breasts, great for grilling or baking.",
    category: "Meat",
    image: "https://images.unsplash.com/photo-1604503468506-a8da13d82791",
    stock: 20,
    unit: "lb"
  },
  {
    id: "meat-003",
    name: "Smoked Bacon",
    price: 5.99,
    description: "Hickory smoked bacon slices, perfect for breakfast or sandwiches.",
    category: "Meat",
    image: "https://images.unsplash.com/photo-1542901031-ec5eeb518e83",
    stock: 35,
    unit: "pack"
  },
  {
    id: "meat-004",
    name: "Wild-caught Salmon",
    price: 12.99,
    description: "Premium wild-caught salmon fillets, rich in omega-3.",
    category: "Meat",
    image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2",
    stock: 10,
    unit: "lb"
  },

  // Dairy & Eggs
  {
    id: "dairy-001",
    name: "Organic Whole Milk",
    price: 3.79,
    description: "Fresh organic whole milk from grass-fed cows.",
    category: "Dairy & Eggs",
    image: "https://images.unsplash.com/photo-1550583724-b2692b85b150",
    stock: 40,
    unit: "gallon"
  },
  {
    id: "dairy-002",
    name: "Free-range Eggs",
    price: 4.49,
    description: "Farm-fresh free-range brown eggs, hormone-free.",
    category: "Dairy & Eggs",
    image: "https://images.unsplash.com/photo-1506976785307-8732e854ad03",
    stock: 50,
    unit: "dozen",
    isPromoted: true
  },
  {
    id: "dairy-003",
    name: "Aged Cheddar Cheese",
    price: 5.29,
    description: "Sharp aged cheddar cheese, perfect for sandwiches or snacking.",
    category: "Dairy & Eggs",
    image: "https://images.unsplash.com/photo-1552767059-ce182ead6c1b",
    stock: 25,
    unit: "block"
  },
  {
    id: "dairy-004",
    name: "Greek Yogurt",
    price: 3.99,
    description: "Creamy plain Greek yogurt, high in protein.",
    category: "Dairy & Eggs",
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777",
    stock: 30,
    unit: "tub"
  },

  // Spices, Oils & Condiments
  {
    id: "spice-001",
    name: "Extra Virgin Olive Oil",
    price: 9.99,
    description: "Cold-pressed extra virgin olive oil, perfect for cooking and dressings.",
    category: "Spices, Oils & Condiments",
    image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5",
    stock: 20,
    unit: "bottle"
  },
  {
    id: "spice-002",
    name: "Organic Turmeric",
    price: 3.49,
    description: "Ground organic turmeric, known for its anti-inflammatory properties.",
    category: "Spices, Oils & Condiments",
    image: "https://images.unsplash.com/photo-1615485500704-8e990f9900f7",
    stock: 40,
    unit: "jar",
    isPromoted: true
  },
  {
    id: "spice-003",
    name: "Dijon Mustard",
    price: 2.99,
    description: "Classic Dijon mustard, perfect for sandwiches and dressings.",
    category: "Spices, Oils & Condiments",
    image: "https://images.unsplash.com/photo-1528750717929-32abb73d3bd9",
    stock: 35,
    unit: "jar"
  },
  {
    id: "spice-004",
    name: "Balsamic Vinegar",
    price: 7.99,
    description: "Aged balsamic vinegar, great for salads and marinades.",
    category: "Spices, Oils & Condiments",
    image: "https://images.unsplash.com/photo-1530734575165-ce79aef6a936",
    stock: 15,
    unit: "bottle"
  },

  // Snacks & Beverages
  {
    id: "snack-001",
    name: "Artisan Dark Chocolate",
    price: 4.99,
    description: "Handcrafted 70% dark chocolate bar, fair-trade and organic.",
    category: "Snacks & Beverages",
    image: "https://images.unsplash.com/photo-1549007953-2f2dc0b24019",
    stock: 30,
    unit: "bar"
  },
  {
    id: "snack-002",
    name: "Craft IPA Beer",
    price: 8.99,
    description: "Local brewery IPA with citrus and pine notes.",
    category: "Snacks & Beverages",
    image: "https://images.unsplash.com/photo-1566633806327-68e152aaf26d",
    stock: 24,
    unit: "6-pack",
    isPromoted: true
  },
  {
    id: "snack-003",
    name: "Mixed Nuts",
    price: 6.49,
    description: "Premium blend of roasted almonds, cashews, and pecans.",
    category: "Snacks & Beverages",
    image: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32",
    stock: 25,
    unit: "bag"
  },
  {
    id: "snack-004",
    name: "Sparkling Water",
    price: 3.99,
    description: "Natural lemon-flavored sparkling water, zero calories.",
    category: "Snacks & Beverages",
    image: "https://images.unsplash.com/photo-1605185618600-594526856c9c",
    stock: 48,
    unit: "12-pack"
  }
];

export const categories = [
  { 
    id: "cat-001", 
    name: "Fruits",
    image: "https://images.unsplash.com/photo-1546630392-db5b1f8eee33",
    color: "bg-light-green"
  },
  { 
    id: "cat-002", 
    name: "Meat",
    image: "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f",
    color: "bg-deep-orange"
  },
  { 
    id: "cat-003", 
    name: "Dairy & Eggs",
    image: "https://images.unsplash.com/photo-1550583724-b2692b85b150",
    color: "bg-blue-400"
  },
  { 
    id: "cat-004", 
    name: "Spices, Oils & Condiments",
    image: "https://images.unsplash.com/photo-1532336414038-cf19250c5757",
    color: "bg-red-500"
  },
  { 
    id: "cat-005", 
    name: "Snacks & Beverages",
    image: "https://images.unsplash.com/photo-1609709295838-8b94a98cbf12",
    color: "bg-amber-400"
  }
];
