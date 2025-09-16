import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { UserCircle, Hospital, FileText, Settings } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { href: "/", label: "Home", icon: Hospital },
    { href: "/worker-registration", label: "Worker Registration", icon: UserCircle },
    { href: "/provider-dashboard", label: "Provider Dashboard", icon: FileText },
    { href: "/health-records", label: "Health Records", icon: FileText },
  ];

  return (
    <Card className="p-4 mb-6">
      <nav className="flex flex-wrap gap-2 justify-center">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <Button
              key={item.href}
              variant={location.pathname === item.href ? "default" : "outline"}
              asChild
              className="flex items-center gap-2"
            >
              <Link to={item.href}>
                <Icon className="w-4 h-4" />
                {item.label}
              </Link>
            </Button>
          );
        })}
      </nav>
    </Card>
  );
};

export default Navigation;