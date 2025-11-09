import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { CheckCircle, Download, Home } from "lucide-react";

interface ReceiptData {
  orderId: string;
  transactionId: string;
  items: Array<{ name: string; quantity: number; price: number }>;
  total: number;
  paymentMethod: string;
  timestamp: string;
  studentName: string;
  registerNumber: string;
}

const Receipt = () => {
  const navigate = useNavigate();
  const [receipt, setReceipt] = useState<ReceiptData | null>(null);

  useEffect(() => {
    const savedReceipt = localStorage.getItem("receipt");
    if (savedReceipt) {
      setReceipt(JSON.parse(savedReceipt));
    } else {
      navigate("/student/dashboard");
    }
  }, [navigate]);

  if (!receipt) return null;

  const date = new Date(receipt.timestamp);

  return (
    <div className="min-h-screen bg-gradient-bg flex items-center justify-center p-4 animate-fade-in">
      <Card className="max-w-2xl w-full shadow-glow border-0 animate-bounce-in bg-card/95 backdrop-blur-lg">
        <div className="p-8">
          {/* Success Icon */}
          <div className="flex justify-center mb-6">
            <div className="w-24 h-24 bg-gradient-primary rounded-full flex items-center justify-center shadow-glow animate-float">
              <CheckCircle className="w-14 h-14 text-white drop-shadow-lg" />
            </div>
          </div>

          <h1 className="text-3xl font-bold text-center mb-2">Payment Successful!</h1>
          <p className="text-center text-muted-foreground mb-8">
            Your order has been confirmed
          </p>

          {/* Receipt Details */}
          <div className="space-y-6">
            {/* Student Details */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-muted-foreground">Student Name</p>
                <p className="font-medium">{receipt.studentName}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Register Number</p>
                <p className="font-medium">{receipt.registerNumber}</p>
              </div>
            </div>

            <Separator />

            {/* Order Details */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-muted-foreground">Order ID</p>
                <p className="font-medium font-mono">{receipt.orderId}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Transaction ID</p>
                <p className="font-medium font-mono">{receipt.transactionId}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Payment Method</p>
                <p className="font-medium capitalize">{receipt.paymentMethod}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Date & Time</p>
                <p className="font-medium">{date.toLocaleString()}</p>
              </div>
            </div>

            <Separator />

            {/* Items */}
            <div>
              <p className="text-sm text-muted-foreground mb-3">Items Purchased</p>
              <div className="space-y-2">
                {receipt.items.map((item, index) => (
                  <div key={index} className="flex justify-between text-sm">
                    <span>{item.quantity}x {item.name}</span>
                    <span className="font-medium">₹{item.price * item.quantity}</span>
                  </div>
                ))}
              </div>
            </div>

            <Separator />

            {/* Total */}
            <div className="flex justify-between items-center">
              <span className="text-lg font-bold">Total Amount</span>
              <span className="text-2xl font-bold bg-gradient-accent bg-clip-text text-transparent">
                ₹{receipt.total}
              </span>
            </div>
          </div>

          {/* Actions */}
          <div className="grid grid-cols-2 gap-4 mt-8">
            <Button
              variant="outline"
              onClick={() => window.print()}
            >
              <Download className="w-4 h-4 mr-2" />
              Download
            </Button>
            <Button
              className="bg-gradient-primary text-white shadow-glow hover:shadow-glow-accent transition-all duration-300 hover:scale-105"
              onClick={() => {
                localStorage.removeItem("receipt");
                navigate("/student/dashboard");
              }}
            >
              <Home className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Receipt;
