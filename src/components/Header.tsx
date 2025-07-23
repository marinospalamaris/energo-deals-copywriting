import { Button } from "@/components/ui/button";
import { Zap } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="bg-gradient-primary p-2 rounded-lg">
              <Zap className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="text-2xl font-bold text-foreground">
              Revma Prosfores Online
            </span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#how-it-works" className="text-muted-foreground hover:text-primary transition-colors">
              Πώς Λειτουργεί
            </a>
            <a href="#why-choose-us" className="text-muted-foreground hover:text-primary transition-colors">
              Γιατί Εμάς
            </a>
            <a href="#faq" className="text-muted-foreground hover:text-primary transition-colors">
              FAQ
            </a>
          </nav>

          <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
            Σύγκρινε Τώρα
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;