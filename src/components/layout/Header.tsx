import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, Search, User, Globe, MessageCircle, HelpCircle, ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  return (
    <header className="bg-background border-b border-border">
      {/* Top Navigation Bar */}
      <div className="px-4 py-3">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          {/* Left side - Logo and main navigation */}
          <div className="flex items-center space-x-8">
            <Link to="/" className="flex items-center space-x-2">
              <Heart className="w-8 h-8 text-primary" />
              <span className="text-2xl font-bold text-foreground">Sanat Care</span>
            </Link>
            
            <nav className="hidden md:flex items-center space-x-6">
              <Link to="/overview" className="text-foreground hover:text-primary transition-colors">
                Overview
              </Link>
              <Link to="/worker-registration" className="text-foreground hover:text-primary transition-colors">
                Worker Portal
              </Link>
              <Link to="/provider-dashboard" className="text-foreground hover:text-primary transition-colors">
                Provider Portal
              </Link>
              <Link to="/health-records" className="text-foreground hover:text-primary transition-colors">
                Health Records
              </Link>
              <div className="text-foreground hover:text-primary transition-colors cursor-pointer flex items-center">
                Resources <ChevronDown className="w-4 h-4 ml-1" />
              </div>
            </nav>
          </div>

          {/* Right side - Utilities and account */}
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-4">
              <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                <Globe className="w-4 h-4" />
                <span>English</span>
                <ChevronDown className="w-4 h-4" />
              </div>
              <span className="text-sm text-foreground hover:text-primary cursor-pointer">Contact us</span>
              <div className="flex items-center space-x-1 text-sm text-foreground hover:text-primary cursor-pointer">
                <HelpCircle className="w-4 h-4" />
                <span>Support</span>
                <ChevronDown className="w-4 h-4" />
              </div>
              <div className="flex items-center space-x-1 text-sm text-foreground hover:text-primary cursor-pointer">
                <User className="w-4 h-4" />
                <span>My account</span>
                <ChevronDown className="w-4 h-4" />
              </div>
            </div>
            
            <Search className="w-5 h-5 text-muted-foreground cursor-pointer hover:text-foreground" />
            
            <Button variant="ghost" size="sm" className="text-foreground">
              Sign in to console
            </Button>
            <Button size="sm" className="bg-foreground text-background hover:bg-foreground/90">
              Create account
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;