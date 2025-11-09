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
  { id: "idli", name: "Idli", price: 20, category: "Breakfast", available: true, description: "Soft steamed rice cakes served with sambar and chutney" },
  { id: "dosa", name: "Dosa", price: 25, category: "Breakfast", available: true, description: "Crispy golden rice crepe with sambar and chutneys" },
  { id: "pongal", name: "Pongal", price: 30, category: "Breakfast", available: true, description: "Savory rice and lentil dish with ghee and pepper" },
  { id: "poori-masala", name: "Poori Masala", price: 35, category: "Breakfast", available: true, description: "Fluffy fried bread with spiced potato curry" },
  { id: "chapathi-kurma", name: "Chapathi Kurma", price: 30, category: "Breakfast", available: true, description: "Wheat flatbread with vegetable kurma" },
  { id: "vada", name: "Vada", price: 15, category: "Breakfast", available: true, description: "Crispy lentil donuts with sambar" },
  { id: "uttapam", name: "Uttapam", price: 25, category: "Breakfast", available: true, description: "Thick rice pancake with vegetable toppings" },
  { id: "upma", name: "Upma", price: 20, category: "Breakfast", available: true, description: "Savory semolina porridge with vegetables" },
  { id: "bread-omelette", name: "Bread Omelette", price: 25, category: "Breakfast", available: true, description: "Fluffy egg omelette with toasted bread" },
  { id: "veg-sandwich", name: "Veg Sandwich", price: 30, category: "Breakfast", available: true, description: "Grilled vegetable sandwich with mint chutney" },

  // Lunch
  { id: "veg-meals", name: "Veg Meals", price: 80, category: "Lunch", available: true, description: "Full South Indian vegetarian thali on banana leaf" },
  { id: "sambar-rice", name: "Sambar Rice", price: 30, category: "Lunch", available: true, description: "Steamed rice with traditional lentil vegetable stew" },
  { id: "curd-rice", name: "Curd Rice", price: 25, category: "Lunch", available: true, description: "Cooling yogurt rice with tempering" },
  { id: "rasam-rice", name: "Rasam Rice", price: 25, category: "Lunch", available: true, description: "Tangy tamarind soup with rice" },
  { id: "lemon-rice", name: "Lemon Rice", price: 30, category: "Lunch", available: true, description: "Tangy lemon flavored rice with peanuts" },
  { id: "tomato-rice", name: "Tomato Rice", price: 35, category: "Lunch", available: true, description: "Spicy tomato rice with cashews" },
  { id: "chicken-biryani", name: "Chicken Biryani", price: 80, category: "Lunch", available: true, description: "Aromatic basmati rice with tender chicken pieces" },
  { id: "mutton-biryani", name: "Mutton Biryani", price: 120, category: "Lunch", available: true, description: "Premium mutton biryani with raita" },
  { id: "fish-curry", name: "Fish Curry", price: 90, category: "Lunch", available: true, description: "Spicy South Indian fish curry with rice" },
  { id: "paneer-butter-masala", name: "Paneer Butter Masala", price: 70, category: "Lunch", available: true, description: "Creamy cottage cheese curry with naan" },

  // Snacks
  { id: "samosa", name: "Samosa", price: 15, category: "Snacks", available: true, description: "Crispy golden pastry with spiced potato filling" },
  { id: "cutlet", name: "Cutlet", price: 20, category: "Snacks", available: true, description: "Fried vegetable patty with green chutney" },
  { id: "tea", name: "Tea", price: 10, category: "Snacks", available: true, description: "Hot South Indian chai" },
  { id: "coffee", name: "Coffee", price: 15, category: "Snacks", available: true, description: "Fresh filter coffee" },
  { id: "juice", name: "Juice", price: 20, category: "Snacks", available: true, description: "Fresh seasonal fruit juice" },
  { id: "parotta-salna", name: "Parotta & Salna", price: 40, category: "Snacks", available: true, description: "Layered flatbread with spicy vegetable gravy" },
  { id: "gobi-manchurian", name: "Gobi Manchurian", price: 45, category: "Snacks", available: true, description: "Indo-Chinese crispy cauliflower" },
  { id: "egg-puff", name: "Egg Puff", price: 20, category: "Snacks", available: true, description: "Flaky pastry with egg filling" },
  { id: "chicken-roll", name: "Chicken Roll", price: 40, category: "Snacks", available: true, description: "Spiced chicken wrap in flatbread" },
  { id: "french-fries", name: "French Fries", price: 35, category: "Snacks", available: true, description: "Crispy golden potato fries" },

  // Dinner
  { id: "chapathi-set", name: "Chapathi Set", price: 35, category: "Dinner", available: true, description: "Wheat bread with dal and vegetable curry" },
  { id: "veg-fried-rice", name: "Veg Fried Rice", price: 60, category: "Dinner", available: true, description: "Stir-fried rice with fresh vegetables" },
  { id: "chicken-fried-rice", name: "Chicken Fried Rice", price: 70, category: "Dinner", available: true, description: "Fried rice with chicken and vegetables" },
  { id: "veg-noodles", name: "Veg Noodles", price: 60, category: "Dinner", available: true, description: "Stir-fried noodles with vegetables" },
  { id: "chicken-noodles", name: "Chicken Noodles", price: 70, category: "Dinner", available: true, description: "Hakka noodles with chicken" },
  { id: "egg-curry", name: "Egg Curry", price: 40, category: "Dinner", available: true, description: "Boiled eggs in spicy curry gravy" },
  { id: "paneer-tikka", name: "Paneer Tikka", price: 65, category: "Dinner", available: true, description: "Grilled cottage cheese with spices" },
  { id: "veg-kurma", name: "Veg Kurma", price: 45, category: "Dinner", available: true, description: "Mixed vegetable coconut curry" },
  { id: "chicken-65", name: "Chicken 65", price: 70, category: "Dinner", available: true, description: "Spicy fried chicken South Indian style" },
  { id: "mutton-curry", name: "Mutton Curry", price: 120, category: "Dinner", available: true, description: "Rich mutton curry with aromatic spices" },

  // Desserts
  { id: "ice-cream", name: "Ice Cream", price: 30, category: "Desserts", available: true, description: "Assorted flavors of creamy ice cream" },
  { id: "fruit-salad", name: "Fruit Salad", price: 25, category: "Desserts", available: true, description: "Fresh seasonal mixed fruits" },
  { id: "gulab-jamun", name: "Gulab Jamun", price: 20, category: "Desserts", available: true, description: "Sweet milk dumplings in sugar syrup" },
  { id: "payasam", name: "Payasam", price: 25, category: "Desserts", available: true, description: "Traditional South Indian milk pudding" },
  { id: "sweet-pongal", name: "Sweet Pongal", price: 30, category: "Desserts", available: true, description: "Sweet rice dish with jaggery and ghee" },
  { id: "laddu", name: "Laddu", price: 15, category: "Desserts", available: true, description: "Traditional sweet balls" },
  { id: "cake-slice", name: "Cake Slice", price: 20, category: "Desserts", available: true, description: "Fresh baked cake slice" },
  { id: "mysore-pak", name: "Mysore Pak", price: 25, category: "Desserts", available: true, description: "Rich ghee based traditional sweet" },
  { id: "halwa", name: "Halwa", price: 20, category: "Desserts", available: true, description: "Sweet semolina pudding with nuts" },
  { id: "milkshake", name: "Milkshake", price: 40, category: "Desserts", available: true, description: "Thick creamy milkshake - multiple flavors" },
];
