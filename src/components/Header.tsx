import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Home, Briefcase, FileText, Package, Mail } from "lucide-react";
import logo from "@/assets/oms-logo3.png";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = [{
    name: "Home",
    href: "#home",
    icon: Home
  }, {
    name: "Services",
    href: "#services",
    icon: Briefcase
  }, {
    name: "Case Studies",
    href: "#case-studies",
    icon: FileText
  }, {
    name: "Products",
    href: "#products",
    icon: Package
  }, {
    name: "Contact",
    href: "#contact",
    icon: Mail
  }];
  return <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 transition-opacity hover:opacity-80">
            <img src={logo} alt="OMS Logo" className="h-20 w-auto object-contain" />
            
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map(item => {
              const Icon = item.icon;
              return (
                <a key={item.name} href={item.href} className="flex items-center gap-2 text-foreground/80 hover:text-primary transition-colors font-medium">
                  <Icon size={18} />
                  {item.name}
                </a>
              );
            })}
            <div className="flex items-center gap-3 ml-4">
              <Button variant="outline" size="lg">
                Login
              </Button>
              <Button variant="default" size="lg">
                Book Free Demo
              </Button>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2 text-foreground hover:text-primary transition-colors" aria-label="Toggle menu">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && <nav className="md:hidden py-6 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-4">
              {navItems.map(item => {
                const Icon = item.icon;
                return (
                  <a key={item.name} href={item.href} onClick={() => setIsMenuOpen(false)} className="flex items-center gap-2 text-foreground/80 hover:text-primary transition-colors font-medium py-2">
                    <Icon size={18} />
                    {item.name}
                  </a>
                );
              })}
              <div className="flex flex-col gap-3 mt-2">
                <Button variant="outline" size="lg">
                  Login
                </Button>
                <Button variant="default" size="lg">
                  Book Free Demo
                </Button>
              </div>
            </div>
          </nav>}
      </div>
    </header>;
};
export default Header;