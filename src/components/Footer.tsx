import { Mail, Phone, Clock } from "lucide-react";
import newLogo from "@/assets/OMS_Logo.png";

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
    <footer id="contact" className="bg-white border-t border-border">
      <div className="container mx-auto p-3">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* About Us */}
          <div>
            <div className="flex items-center gap-3 mb-4 bg-[#F8FAFC]">
              <img src={newLogo} alt="OMS Logo" className="h-20 w-auto object-contain" />
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              OMSYSTEMS is your trusted partner in healthcare, connecting patients with world-class hospitals 
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
                  <a href="mailto:contact@omsystems.health" className="hover:text-primary transition-colors">
                    contact@omsystems.health
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3 text-muted-foreground">
                <Phone className="text-primary mt-1 flex-shrink-0" size={18} />
                <div>
                  <p className="font-medium text-foreground">Phone</p>
                  <a href="tel:+1-800-OMSYSTEMS" className="hover:text-primary transition-colors">
                    +1-800-OMSYSTEMS
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
                href="https://www.linkedin.com"
                className="h-10 w-10 rounded-full flex items-center justify-center transition-colors bg-white shadow-md"
                aria-label="LinkedIn"
              >
                <img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" alt="LinkedIn" className="h-full w-full rounded-full" />
              </a>
              <a
                href="https://twitter.com"
                className="h-10 w-10 rounded-full flex items-center justify-center transition-colors bg-white shadow-md"
                aria-label="Twitter"
              >
                {/* Inline resilient Twitter/X logo */}
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-6 w-6 text-[#1D9BF0]"
                  aria-hidden="true"
                >
                  <path d="M22.46 5.95c-.77.34-1.6.57-2.46.67a4.18 4.18 0 0 0 1.84-2.31 8.27 8.27 0 0 1-2.63 1.01 4.13 4.13 0 0 0-7.06 3.76A11.72 11.72 0 0 1 3.16 4.9a4.11 4.11 0 0 0-.56 2.08 4.13 4.13 0 0 0 1.84 3.44 4.07 4.07 0 0 1-1.87-.52v.05a4.14 4.14 0 0 0 3.32 4.05 4.2 4.2 0 0 1-1.85.07 4.14 4.14 0 0 0 3.86 2.87A8.3 8.3 0 0 1 2 19.54 11.72 11.72 0 0 0 8.29 21.4c7.55 0 11.68-6.26 11.68-11.68 0-.18-.01-.36-.02-.54a8.35 8.35 0 0 0 2.05-2.13Z" />
                </svg>
              </a>
              <a
                href="https://www.facebook.com"
                className="h-10 w-10 rounded-full flex items-center justify-center transition-colors bg-white shadow-md"
                aria-label="Facebook"
              >
                <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="Facebook" className="h-full w-full rounded-full" />
              </a>
              <a
                href="https://www.youtube.com"
                className="h-10 w-10 rounded-full flex items-center justify-center transition-colors bg-white shadow-md"
                aria-label="YouTube"
              >
                <img src="https://upload.wikimedia.org/wikipedia/commons/0/09/YouTube_full-color_icon_%282017%29.svg" alt="YouTube" className="h-full w-full rounded-full" />
              </a>
              <a
                href="https://www.instagram.com"
                className="h-10 w-10 rounded-full flex items-center justify-center transition-colors bg-white shadow-md"
                aria-label="Instagram"
              >
                <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="Instagram" className="h-full w-full rounded-full" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2024 OMSYSTEMS. All rights reserved. Your health, our priority.
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
