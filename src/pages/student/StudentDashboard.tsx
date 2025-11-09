import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ShoppingCart, User, LogOut, Plus, Minus } from "lucide-react";
import { foodItems, foodCategories } from "@/data/foodItems";
import { toast } from "sonner";

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

const StudentDashboard = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (item: typeof foodItems[0]) => {
    const existingItem = cart.find((i) => i.id === item.id);
    if (existingItem) {
      setCart(cart.map((i) =>
        i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
      ));
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
    toast.success(`${item.name} added to cart`);
  };

  const removeFromCart = (id: string) => {
    const item = cart.find((i) => i.id === id);
    if (item && item.quantity > 1) {
      setCart(cart.map((i) =>
        i.id === id ? { ...i, quantity: i.quantity - 1 } : i
      ));
    } else {
      setCart(cart.filter((i) => i.id !== id));
    }
  };

  const totalAmount = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-gradient-bg">
      {/* Header */}
      <header className="bg-card shadow-card sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            MEC Food Hub
          </h1>
          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              size="icon"
              className="relative"
              onClick={() => navigate("/student/cart")}
            >
              <ShoppingCart className="w-5 h-5" />
              {totalItems > 0 && (
                <Badge className="absolute -top-2 -right-2 bg-gradient-accent text-white px-2 py-0.5 text-xs">
                  {totalItems}
                </Badge>
              )}
            </Button>
            <Button variant="outline" size="icon">
              <User className="w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => {
                toast.success("Logged out successfully");
                navigate("/student");
              }}
            >
              <LogOut className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8 animate-fade-in">
          <h2 className="text-3xl font-bold mb-2">Today's Menu</h2>
          <p className="text-muted-foreground">Browse and order your favorite items</p>
        </div>

        <Tabs defaultValue="Breakfast" className="w-full">
          <TabsList className="grid grid-cols-5 w-full mb-8">
            {foodCategories.map((category) => (
              <TabsTrigger key={category} value={category}>
                {category}
              </TabsTrigger>
            ))}
          </TabsList>

          {foodCategories.map((category) => (
            <TabsContent key={category} value={category}>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {foodItems
                  .filter((item) => item.category === category)
                  .map((item, index) => (
                    <Card
                      key={item.id}
                      className="group overflow-hidden hover:shadow-hover transition-all duration-300 hover:-translate-y-1 border-0 shadow-card animate-slide-up"
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      <div className="p-5">
                        <div className="flex justify-between items-start mb-3">
                          <div>
                            <h3 className="text-lg font-bold mb-1">{item.name}</h3>
                            <p className="text-sm text-muted-foreground line-clamp-2">
                              {item.description}
                            </p>
                          </div>
                        </div>
                        <div className="flex justify-between items-center mt-4">
                          <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                            ₹{item.price}
                          </span>
                          <Button
                            size="sm"
                            className="bg-gradient-primary text-white shadow-3d hover:shadow-hover"
                            onClick={() => addToCart(item)}
                          >
                            <Plus className="w-4 h-4 mr-1" />
                            Add
                          </Button>
                        </div>
                      </div>
                    </Card>
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {/* Cart Summary */}
        {cart.length > 0 && (
          <Card className="fixed bottom-4 right-4 left-4 md:left-auto md:w-96 shadow-hover border-0 animate-bounce-in z-40">
            <div className="p-4">
              <h3 className="text-lg font-bold mb-3">Cart Summary</h3>
              <div className="space-y-2 max-h-48 overflow-y-auto mb-3">
                {cart.map((item) => (
                  <div key={item.id} className="flex justify-between items-center text-sm">
                    <div className="flex items-center gap-2">
                      <Button
                        size="icon"
                        variant="outline"
                        className="h-6 w-6"
                        onClick={() => removeFromCart(item.id)}
                      >
                        <Minus className="w-3 h-3" />
                      </Button>
                      <span>{item.quantity}x</span>
                      <span className="font-medium">{item.name}</span>
                    </div>
                    <span className="font-bold">₹{item.price * item.quantity}</span>
                  </div>
                ))}
              </div>
              <div className="border-t pt-3 mb-3">
                <div className="flex justify-between items-center font-bold text-lg">
                  <span>Total</span>
                  <span className="bg-gradient-accent bg-clip-text text-transparent">
                    ₹{totalAmount}
                  </span>
                </div>
              </div>
              <Button
                className="w-full bg-gradient-secondary text-white shadow-3d hover:shadow-hover"
                onClick={() => {
                  // Store cart in localStorage for payment page
                  localStorage.setItem("cart", JSON.stringify(cart));
                  navigate("/student/payment");
                }}
              >
                Proceed to Payment
              </Button>
            </div>
          </Card>
        )}
      </main>
    </div>
  );
};

export default StudentDashboard;
