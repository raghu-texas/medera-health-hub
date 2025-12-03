import { Mail, Phone, Home } from "lucide-react";
import omsLogo from "@/assets/oms-logo1.png";

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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          {/* About Us */}
          <div>
            <div className="flex items-center gap-3 mb-4 bg-[#F8FAFC]">
              <img src={omsLogo} alt="OnlineMedSys.com" className="h-12 sm:h-14 w-auto object-contain" />
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
                  <a href="mailto:support@onlinemedsys.com" className="hover:text-primary transition-colors">
                    support@onlinemedsys.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3 text-muted-foreground">
                <Phone className="text-primary mt-1 flex-shrink-0" size={18} />
                <div>
                  <p className="font-medium text-foreground">Phone</p>
                  <a href="tel:+17138408640" className="hover:text-primary transition-colors">
                    713-840-8640
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3 text-muted-foreground">
                <Home className="text-primary mt-1 flex-shrink-0" size={18} />
                <div>
                  <p className="font-medium text-foreground">Address</p>
                  <p>OnlineMedSys.com</p>
                  <p>5599 San Felipe, Suite 900</p>
                  <p>Houston, TX 77056</p>
                </div>
              </div>
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
