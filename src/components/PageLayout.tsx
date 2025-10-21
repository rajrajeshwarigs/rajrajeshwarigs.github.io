import { ReactNode } from "react";
import Navigation from "./Navigation";

interface PageLayoutProps {
  children: ReactNode;
  gradient?: boolean;
}

const PageLayout = ({ children, gradient = false }: PageLayoutProps) => {
  return (
    <div className={`min-h-screen ${gradient ? 'gradient-mesh' : 'bg-background'}`}>
      <Navigation />
      <main className="pt-20">
        {children}
      </main>
    </div>
  );
};

export default PageLayout;
