import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ArrowLeft, CreditCard, Smartphone, Banknote } from "lucide-react";
import { toast } from "sonner";

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

const Payment = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useState<CartItem[]>([]);
  const [paymentMethod, setPaymentMethod] = useState("upi");
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    } else {
      navigate("/student/dashboard");
    }
  }, [navigate]);

  const totalAmount = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handlePayment = () => {
    setIsProcessing(true);
    
    // Mock payment processing
    setTimeout(() => {
      setIsProcessing(false);
      
      // Store receipt data
      const receipt = {
        orderId: `ORD${Date.now()}`,
        transactionId: `TXN${Date.now()}`,
        items: cart,
        total: totalAmount,
        paymentMethod,
        timestamp: new Date().toISOString(),
        studentName: "John Doe",
        registerNumber: "REG123456",
      };
      
      localStorage.setItem("receipt", JSON.stringify(receipt));
      localStorage.removeItem("cart");
      
      toast.success("Payment successful!");
      navigate("/student/receipt");
    }, 2000);
  };

  const paymentMethods = [
    { id: "upi", name: "UPI Payment", icon: Smartphone, desc: "GPay, PhonePe, Paytm" },
    { id: "card", name: "Card Payment", icon: CreditCard, desc: "Visa, MasterCard" },
    { id: "cod", name: "Cash on Delivery", icon: Banknote, desc: "Pay at counter" },
  ];

  return (
    <div className="min-h-screen bg-gradient-bg p-4">
      <div className="max-w-2xl mx-auto">
        <Button
          variant="ghost"
          className="mb-4"
          onClick={() => navigate("/student/dashboard")}
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Menu
        </Button>

        <div className="grid gap-6">
          {/* Order Summary */}
          <Card className="shadow-card border-0 animate-slide-up">
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
              <div className="space-y-3 mb-4">
                {cart.map((item) => (
                  <div key={item.id} className="flex justify-between text-sm">
                    <span>{item.quantity}x {item.name}</span>
                    <span className="font-medium">₹{item.price * item.quantity}</span>
                  </div>
                ))}
              </div>
              <div className="border-t pt-4">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold">Total Amount</span>
                  <span className="text-2xl font-bold bg-gradient-accent bg-clip-text text-transparent">
                    ₹{totalAmount}
                  </span>
                </div>
              </div>
            </div>
          </Card>

          {/* Payment Method */}
          <Card className="shadow-card border-0 animate-slide-up" style={{ animationDelay: "100ms" }}>
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-4">Payment Method</h2>
              <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                <div className="space-y-3">
                  {paymentMethods.map((method) => {
                    const Icon = method.icon;
                    return (
                      <Label
                        key={method.id}
                        htmlFor={method.id}
                        className="flex items-center gap-4 p-4 border rounded-lg cursor-pointer hover:bg-muted/50 transition-colors"
                      >
                        <RadioGroupItem value={method.id} id={method.id} />
                        <div className="flex items-center gap-3 flex-1">
                          <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                            <Icon className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <div className="font-medium">{method.name}</div>
                            <div className="text-sm text-muted-foreground">{method.desc}</div>
                          </div>
                        </div>
                      </Label>
                    );
                  })}
                </div>
              </RadioGroup>
            </div>
          </Card>

          <Button
            className="w-full bg-gradient-secondary text-white shadow-3d hover:shadow-hover h-12 text-lg animate-bounce-in"
            style={{ animationDelay: "200ms" }}
            onClick={handlePayment}
            disabled={isProcessing}
          >
            {isProcessing ? "Processing Payment..." : `Pay ₹${totalAmount}`}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Payment;
