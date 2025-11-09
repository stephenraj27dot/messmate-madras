import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Users, ShieldCheck, ChefHat } from "lucide-react";
import mecLogo from "@/assets/mec-logo.png";

const Index = () => {
  const portals = [
    {
      title: "Student Portal",
      description: "Browse menu, order food, and manage your account",
      icon: Users,
      path: "/student",
      gradient: "bg-gradient-primary",
    },
    {
      title: "Admin Portal",
      description: "Manage students, staff, and view analytics",
      icon: ShieldCheck,
      path: "/admin",
      gradient: "bg-gradient-secondary",
    },
    {
      title: "Mess Portal",
      description: "Upload menu, track orders, and manage inventory",
      icon: ChefHat,
      path: "/mess",
      gradient: "bg-gradient-accent",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-bg flex items-center justify-center p-4">
      <div className="max-w-6xl w-full">
        <div className="text-center mb-12 animate-fade-in">
          <div className="flex justify-center mb-6">
            <img src={mecLogo} alt="MEC Logo" className="w-24 h-24 rounded-2xl shadow-glow animate-float" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-foreground">
            MEC Food Hub
          </h1>
          <p className="text-xl text-muted-foreground font-medium">
            Madras Engineering College Mess Management System
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {portals.map((portal, index) => {
            const Icon = portal.icon;
            return (
              <Card
                key={portal.title}
                className="group relative overflow-hidden hover:shadow-glow transition-all duration-500 hover:-translate-y-3 border-0 shadow-card animate-slide-up bg-card/80 backdrop-blur-sm"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`absolute inset-0 ${portal.gradient} opacity-0 group-hover:opacity-15 transition-opacity duration-500`} />
                <div className="p-8 relative">
                  <div className={`w-20 h-20 ${portal.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-glow group-hover:scale-110 group-hover:shadow-glow-accent transition-all duration-500`}>
                    <Icon className="w-10 h-10 text-white drop-shadow-lg" />
                  </div>
                  <h2 className="text-2xl font-bold mb-3 text-foreground">
                    {portal.title}
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    {portal.description}
                  </p>
                  <Link to={portal.path}>
                    <Button className={`w-full ${portal.gradient} border-0 text-white shadow-glow hover:shadow-glow-accent transition-all duration-500 hover:scale-105 font-semibold`}>
                      Enter Portal
                    </Button>
                  </Link>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="mt-12 text-center text-sm text-muted-foreground animate-fade-in">
          <p>© 2024 Madras Engineering College. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Index;
