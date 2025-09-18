import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link, useLocation } from "react-router-dom";

interface SubNavigationProps {
  title: string;
  items: Array<{
    href: string;
    label: string;
    isActive?: boolean;
  }>;
}

const SubNavigation = ({ title, items }: SubNavigationProps) => {
  const location = useLocation();

  return (
    <div className="bg-accent/30 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <Card className="bg-background shadow-sm">
          <div className="px-6 py-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-foreground">{title}</h2>
            </div>
            <nav className="flex items-center space-x-6 mt-4">
              {items.map((item) => (
                <Button
                  key={item.href}
                  variant={location.pathname === item.href ? "default" : "ghost"}
                  size="sm"
                  asChild
                  className="text-sm"
                >
                  <Link to={item.href}>{item.label}</Link>
                </Button>
              ))}
            </nav>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default SubNavigation;