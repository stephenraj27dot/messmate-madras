export interface FoodItem {
  id: string;
  name: string;
  price: number;
  category: string;
  description?: string;
  image?: string;
  available: boolean;
}

export const foodCategories = [
  "Breakfast",
  "Lunch",
  "Snacks",
  "Dinner",
  "Desserts",
] as const;

export const foodItems: FoodItem[] = [
  // Breakfast
  { id: "b1", name: "Idli", price: 20, category: "Breakfast", available: true, description: "Soft steamed rice cakes" },
  { id: "b2", name: "Dosa", price: 25, category: "Breakfast", available: true, description: "Crispy rice crepe" },
  { id: "b3", name: "Pongal", price: 30, category: "Breakfast", available: true, description: "Savory rice and lentil dish" },
  { id: "b4", name: "Poori Masala", price: 35, category: "Breakfast", available: true, description: "Fluffy fried bread with potato curry" },
  { id: "b5", name: "Chapathi Kurma", price: 30, category: "Breakfast", available: true, description: "Wheat flatbread with vegetable curry" },
  { id: "b6", name: "Vada", price: 15, category: "Breakfast", available: true, description: "Crispy lentil donuts" },
  { id: "b7", name: "Uttapam", price: 25, category: "Breakfast", available: true, description: "Thick rice pancake with toppings" },
  { id: "b8", name: "Upma", price: 20, category: "Breakfast", available: true, description: "Savory semolina porridge" },
  { id: "b9", name: "Bread Omelette", price: 25, category: "Breakfast", available: true, description: "Egg omelette with bread" },
  { id: "b10", name: "Veg Sandwich", price: 30, category: "Breakfast", available: true, description: "Grilled vegetable sandwich" },

  // Lunch
  { id: "l1", name: "Veg Meals", price: 80, category: "Lunch", available: true, description: "Full vegetarian thali" },
  { id: "l2", name: "Sambar Rice", price: 30, category: "Lunch", available: true, description: "Rice with lentil vegetable stew" },
  { id: "l3", name: "Curd Rice", price: 25, category: "Lunch", available: true, description: "Cooling yogurt rice" },
  { id: "l4", name: "Rasam Rice", price: 25, category: "Lunch", available: true, description: "Tangy tamarind rice" },
  { id: "l5", name: "Lemon Rice", price: 30, category: "Lunch", available: true, description: "Tangy lemon flavored rice" },
  { id: "l6", name: "Tomato Rice", price: 35, category: "Lunch", available: true, description: "Spicy tomato rice" },
  { id: "l7", name: "Chicken Biryani", price: 80, category: "Lunch", available: true, description: "Aromatic chicken rice" },
  { id: "l8", name: "Mutton Biryani", price: 120, category: "Lunch", available: true, description: "Premium mutton biryani" },
  { id: "l9", name: "Fish Curry", price: 90, category: "Lunch", available: true, description: "Spicy fish curry" },
  { id: "l10", name: "Paneer Butter Masala", price: 70, category: "Lunch", available: true, description: "Creamy cottage cheese curry" },

  // Snacks
  { id: "s1", name: "Samosa", price: 15, category: "Snacks", available: true, description: "Crispy pastry with filling" },
  { id: "s2", name: "Cutlet", price: 20, category: "Snacks", available: true, description: "Fried vegetable patty" },
  { id: "s3", name: "Tea", price: 10, category: "Snacks", available: true, description: "Hot chai" },
  { id: "s4", name: "Coffee", price: 15, category: "Snacks", available: true, description: "Fresh coffee" },
  { id: "s5", name: "Juice", price: 20, category: "Snacks", available: true, description: "Fresh fruit juice" },
  { id: "s6", name: "Parotta & Salna", price: 40, category: "Snacks", available: true, description: "Layered bread with gravy" },
  { id: "s7", name: "Gobi Manchurian", price: 45, category: "Snacks", available: true, description: "Indo-Chinese cauliflower" },
  { id: "s8", name: "Egg Puff", price: 20, category: "Snacks", available: true, description: "Flaky egg pastry" },
  { id: "s9", name: "Chicken Roll", price: 40, category: "Snacks", available: true, description: "Chicken wrap" },
  { id: "s10", name: "French Fries", price: 35, category: "Snacks", available: true, description: "Crispy potato fries" },

  // Dinner
  { id: "d1", name: "Chapathi Set", price: 35, category: "Dinner", available: true, description: "Wheat bread with curry" },
  { id: "d2", name: "Veg Fried Rice", price: 60, category: "Dinner", available: true, description: "Stir-fried vegetable rice" },
  { id: "d3", name: "Chicken Fried Rice", price: 70, category: "Dinner", available: true, description: "Chicken fried rice" },
  { id: "d4", name: "Veg Noodles", price: 60, category: "Dinner", available: true, description: "Stir-fried vegetable noodles" },
  { id: "d5", name: "Chicken Noodles", price: 70, category: "Dinner", available: true, description: "Chicken noodles" },
  { id: "d6", name: "Egg Curry", price: 40, category: "Dinner", available: true, description: "Boiled egg curry" },
  { id: "d7", name: "Paneer Tikka", price: 65, category: "Dinner", available: true, description: "Grilled cottage cheese" },
  { id: "d8", name: "Veg Kurma", price: 45, category: "Dinner", available: true, description: "Vegetable coconut curry" },
  { id: "d9", name: "Chicken 65", price: 70, category: "Dinner", available: true, description: "Spicy fried chicken" },
  { id: "d10", name: "Mutton Curry", price: 120, category: "Dinner", available: true, description: "Rich mutton curry" },

  // Desserts
  { id: "de1", name: "Ice Cream", price: 30, category: "Desserts", available: true, description: "Assorted flavors" },
  { id: "de2", name: "Fruit Salad", price: 25, category: "Desserts", available: true, description: "Fresh mixed fruits" },
  { id: "de3", name: "Gulab Jamun", price: 20, category: "Desserts", available: true, description: "Sweet milk dumplings" },
  { id: "de4", name: "Payasam", price: 25, category: "Desserts", available: true, description: "Traditional milk pudding" },
  { id: "de5", name: "Sweet Pongal", price: 30, category: "Desserts", available: true, description: "Sweet rice dish" },
  { id: "de6", name: "Laddu", price: 15, category: "Desserts", available: true, description: "Sweet balls" },
  { id: "de7", name: "Cake Slice", price: 20, category: "Desserts", available: true, description: "Fresh cake" },
  { id: "de8", name: "Mysore Pak", price: 25, category: "Desserts", available: true, description: "Ghee based sweet" },
  { id: "de9", name: "Halwa", price: 20, category: "Desserts", available: true, description: "Sweet semolina pudding" },
  { id: "de10", name: "Milkshake", price: 40, category: "Desserts", available: true, description: "Thick creamy shake" },
];
