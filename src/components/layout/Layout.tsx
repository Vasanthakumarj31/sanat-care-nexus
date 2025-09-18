import { ReactNode } from "react";
import Header from "./Header";
import SubNavigation from "./SubNavigation";
import Breadcrumb from "./Breadcrumb";

interface LayoutProps {
  children: ReactNode;
  title?: string;
  subNavItems?: Array<{
    href: string;
    label: string;
  }>;
  breadcrumbItems?: Array<{
    label: string;
    href?: string;
  }>;
}

const Layout = ({ children, title, subNavItems, breadcrumbItems }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {title && subNavItems && (
        <SubNavigation title={title} items={subNavItems} />
      )}
      
      {breadcrumbItems && (
        <Breadcrumb items={breadcrumbItems} />
      )}
      
      <main className="max-w-7xl mx-auto px-4 py-8">
        {children}
      </main>
    </div>
  );
};

export default Layout;