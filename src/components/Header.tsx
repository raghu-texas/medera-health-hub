import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Home, Info, Package, Mail } from "lucide-react";
import newLogo from "@/assets/OMS_Logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    {
      name: "Home",
      href: "/",
      icon: Home,
      isRoute: true
    },
    {
      name: "Product & Services",
      href: "/products-services",
      icon: Package,
      isRoute: true
    },
    {
      name: "About us",
      href: "/about-us",
      icon: Info,
      isRoute: true
    },
    {
      name: "Contact us",
      href: "#contact",
      icon: Mail,
      isRoute: false
    }
  ];

  const handleNavClick = (item: typeof navItems[0]) => {
    if (item.isRoute) {
      navigate(item.href);
    } else {
      if (location.pathname !== "/") {
        navigate("/");
        setTimeout(() => {
          const element = document.querySelector(item.href);
          element?.scrollIntoView({ behavior: "smooth" });
        }, 100);
      } else {
        const element = document.querySelector(item.href);
        element?.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3 transition-opacity hover:opacity-80 ml-0.5">
            <img src={newLogo} alt="OMS Logo" className="h-20 w-auto object-contain" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item)}
                  className="flex items-center gap-2 text-foreground/80 hover:text-primary transition-colors font-medium"
                >
                  <Icon size={18} />
                  {item.name}
                </button>
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
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-6 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.name}
                    onClick={() => handleNavClick(item)}
                    className="flex items-center gap-2 text-foreground/80 hover:text-primary transition-colors font-medium py-2"
                  >
                    <Icon size={18} />
                    {item.name}
                  </button>
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
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
