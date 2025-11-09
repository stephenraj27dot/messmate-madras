import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { ArrowLeft, ChefHat } from "lucide-react";

const MessAuth = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    
    setTimeout(() => {
      setIsLoading(false);
      toast.success("Mess staff login successful!");
      // navigate("/mess/dashboard"); // Will create this later
      toast.info("Mess dashboard coming soon!");
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-bg flex items-center justify-center p-4">
      <Card className="max-w-md w-full shadow-hover border-0 animate-bounce-in">
        <div className="p-8">
          <Button
            variant="ghost"
            className="mb-4"
            onClick={() => navigate("/")}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>

          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-accent rounded-2xl flex items-center justify-center shadow-3d">
              <ChefHat className="w-8 h-8 text-white" />
            </div>
          </div>

          <h1 className="text-3xl font-bold mb-2 text-center bg-gradient-accent bg-clip-text text-transparent">
            Mess Portal
          </h1>
          <p className="text-muted-foreground text-center mb-6">
            Access mess management system
          </p>

          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="mess-email">Staff Email</Label>
              <Input
                id="mess-email"
                type="email"
                placeholder="staff@mec.edu"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="mess-password">Password</Label>
              <Input
                id="mess-password"
                type="password"
                placeholder="••••••••"
                required
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-gradient-accent text-white shadow-3d hover:shadow-hover"
              disabled={isLoading}
            >
              {isLoading ? "Logging in..." : "Login as Staff"}
            </Button>
          </form>
        </div>
      </Card>
    </div>
  );
};

export default MessAuth;
