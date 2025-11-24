import { Mail, Phone, Clock, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import logo from "@/assets/medera-logo.png";

const Footer = () => {
  const services = [
    "Patient Health Records",
    "Hospital Network Access",
    "Advanced Treatment Plans",
    "Critical Disease Care",
    "Health Monitoring",
    "Medical Consultation",
  ];

  return (
    <footer id="contact" className="bg-muted/50 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* About Us */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="Medera Logo" className="h-10 w-10" />
              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Medera
              </span>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Medera is your trusted partner in healthcare, connecting patients with world-class hospitals 
              and advanced medical treatments. We're committed to making quality healthcare accessible to everyone.
            </p>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground">Our Services</h3>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href="#services"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3 text-muted-foreground">
                <Mail className="text-primary mt-1 flex-shrink-0" size={18} />
                <div>
                  <p className="font-medium text-foreground">Email</p>
                  <a href="mailto:contact@medera.health" className="hover:text-primary transition-colors">
                    contact@medera.health
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3 text-muted-foreground">
                <Phone className="text-primary mt-1 flex-shrink-0" size={18} />
                <div>
                  <p className="font-medium text-foreground">Phone</p>
                  <a href="tel:+1-800-MEDERA" className="hover:text-primary transition-colors">
                    +1-800-MEDERA
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3 text-muted-foreground">
                <Clock className="text-primary mt-1 flex-shrink-0" size={18} />
                <div>
                  <p className="font-medium text-foreground">Available</p>
                  <p>Mon - Fri: 8:00 AM - 8:00 PM</p>
                  <p>Sat - Sun: 9:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* News & Updates */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground">Stay Connected</h3>
            <p className="text-muted-foreground mb-4">
              Follow us on social media for the latest healthcare news, tips, and updates.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
              <a
                href="#"
                className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="#"
                className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2024 Medera. All rights reserved. Your health, our priority.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Accessibility
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
