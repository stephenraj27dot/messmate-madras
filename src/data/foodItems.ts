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
  "South Indian",
  "North Indian",
  "Chinese",
  "Beverages",
  "Desserts",
] as const;

export const foodItems: FoodItem[] = [
  // Breakfast
  { id: "idli", name: "Idli", price: 20, category: "Breakfast", available: true, description: "Soft steamed rice cakes served with sambar and chutney" },
  { id: "masala-dosa", name: "Masala Dosa", price: 35, category: "Breakfast", available: true, description: "Crispy rice crepe with spiced potato filling and chutneys" },
  { id: "plain-dosa", name: "Plain Dosa", price: 25, category: "Breakfast", available: true, description: "Classic crispy rice crepe with sambar and chutneys" },
  { id: "rava-dosa", name: "Rava Dosa", price: 40, category: "Breakfast", available: true, description: "Crispy semolina crepe with onions and spices" },
  { id: "onion-dosa", name: "Onion Dosa", price: 30, category: "Breakfast", available: true, description: "Crispy dosa topped with spiced onions" },
  { id: "pongal", name: "Pongal", price: 30, category: "Breakfast", available: true, description: "Savory rice and lentil dish with ghee and pepper" },
  { id: "poori-masala", name: "Poori Masala", price: 35, category: "Breakfast", available: true, description: "Fluffy fried bread with spiced potato curry" },
  { id: "mini-idli", name: "Mini Idli Sambar", price: 25, category: "Breakfast", available: true, description: "Bite-sized idlis in spicy sambar" },
  { id: "vada", name: "Medu Vada", price: 15, category: "Breakfast", available: true, description: "Crispy lentil donuts with sambar and chutney" },
  { id: "uttapam", name: "Onion Uttapam", price: 35, category: "Breakfast", available: true, description: "Thick rice pancake with onions and vegetables" },
  { id: "masala-uttapam", name: "Masala Uttapam", price: 40, category: "Breakfast", available: true, description: "Spiced uttapam with mixed vegetables" },
  { id: "upma", name: "Vegetable Upma", price: 25, category: "Breakfast", available: true, description: "Savory semolina porridge with fresh vegetables" },
  { id: "bread-omelette", name: "Masala Omelette", price: 30, category: "Breakfast", available: true, description: "Spicy egg omelette with herbs and toast" },
  { id: "veg-sandwich", name: "Grilled Cheese Sandwich", price: 35, category: "Breakfast", available: true, description: "Toasted sandwich with cheese and vegetables" },

  // Lunch
  { id: "veg-meals", name: "Special Veg Thali", price: 90, category: "Lunch", available: true, description: "Deluxe South Indian thali with 3 curries, dal, rice, and dessert" },
  { id: "north-thali", name: "North Indian Thali", price: 100, category: "Lunch", available: true, description: "Complete North Indian meal with roti, dal, paneer, and more" },
  { id: "sambar-rice", name: "Sambar Rice", price: 35, category: "Lunch", available: true, description: "Hot steamed rice with special sambar and papad" },
  { id: "curd-rice", name: "Curd Rice", price: 30, category: "Lunch", available: true, description: "Cooling yogurt rice with pomegranate and tempering" },
  { id: "rasam-rice", name: "Rasam Rice", price: 30, category: "Lunch", available: true, description: "Pepper rasam with rice and vegetables" },
  { id: "lemon-rice", name: "Lemon Rice", price: 35, category: "Lunch", available: true, description: "Tangy lemon rice with roasted peanuts and curry leaves" },
  { id: "veg-pulao", name: "Veg Pulao", price: 60, category: "Lunch", available: true, description: "Fragrant rice with mixed vegetables and raita" },
  { id: "chicken-biryani", name: "Special Chicken Biryani", price: 90, category: "Lunch", available: true, description: "Premium biryani with grilled chicken, raita, and salan" },
  { id: "mutton-biryani", name: "Hyderabadi Mutton Biryani", price: 130, category: "Lunch", available: true, description: "Authentic Hyderabadi style biryani with tender mutton" },
  { id: "fish-curry", name: "Kerala Fish Curry", price: 100, category: "Lunch", available: true, description: "Traditional Kerala style fish curry with tamarind" },
  { id: "prawn-curry", name: "Prawn Masala", price: 110, category: "Lunch", available: true, description: "Spicy prawn curry with coconut milk" },
  { id: "paneer-butter-masala", name: "Paneer Butter Masala", price: 80, category: "Lunch", available: true, description: "Rich and creamy paneer curry with butter naan" },
  { id: "dal-tadka", name: "Dal Tadka", price: 60, category: "Lunch", available: true, description: "Yellow dal with ghee tempering and jeera rice" },
  { id: "veg-kadai", name: "Veg Kadai", price: 70, category: "Lunch", available: true, description: "Mixed vegetables in spicy kadai masala" },

  // Snacks
  { id: "samosa", name: "Punjabi Samosa", price: 20, category: "Snacks", available: true, description: "Extra large crispy samosa with mint chutney" },
  { id: "masala-vada", name: "Masala Vada", price: 15, category: "Snacks", available: true, description: "Spicy lentil fritters with chutney" },
  { id: "veg-cutlet", name: "Veg Cutlet", price: 20, category: "Snacks", available: true, description: "Mixed vegetable patty with beetroot" },
  { id: "onion-pakoda", name: "Onion Pakoda", price: 25, category: "Snacks", available: true, description: "Crispy onion fritters with chutney" },
  { id: "masala-tea", name: "Masala Tea", price: 15, category: "Snacks", available: true, description: "Special chai with cardamom and ginger" },
  { id: "filter-coffee", name: "Filter Coffee", price: 20, category: "Snacks", available: true, description: "Traditional South Indian filter coffee" },
  { id: "fresh-juice", name: "Fresh Juice", price: 30, category: "Snacks", available: true, description: "Choice of seasonal fresh fruit juices" },
  { id: "lassi", name: "Sweet Lassi", price: 35, category: "Snacks", available: true, description: "Creamy yogurt drink with rose flavor" },
  { id: "vada-pav", name: "Vada Pav", price: 25, category: "Snacks", available: true, description: "Mumbai style spicy potato patty in bun" },
  { id: "parotta-salna", name: "Kerala Parotta", price: 45, category: "Snacks", available: true, description: "Layered flatbread with spicy salna" },
  { id: "gobi-65", name: "Gobi 65", price: 50, category: "Snacks", available: true, description: "Spicy cauliflower fritters" },
  { id: "paneer-pakoda", name: "Paneer Pakoda", price: 55, category: "Snacks", available: true, description: "Cottage cheese fritters with mint chutney" },
  { id: "chicken-roll", name: "Kathi Roll", price: 45, category: "Snacks", available: true, description: "Kolkata style chicken roll with egg" },
  { id: "french-fries", name: "Masala Fries", price: 40, category: "Snacks", available: true, description: "Spicy potato fries with chaat masala" },
  { id: "pani-puri", name: "Pani Puri", price: 30, category: "Snacks", available: true, description: "Crispy puris with spicy mint water" },

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
