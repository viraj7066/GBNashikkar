import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import logo from '@/assets/logo-new.png';

const Footer = () => {
  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
  ];

  const quickLinks = [
    { name: 'Collections', href: '/collections' },
    { name: 'Lookbook', href: '/lookbook' },
    { name: 'Services', href: '/services' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  const services = [
    { name: 'Custom Design', href: '/services#custom' },
    { name: 'Jewelry Repair', href: '/services#repair' },
    { name: 'Appraisal', href: '/services#appraisal' },
    { name: 'Engraving', href: '/services#engraving' },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Newsletter Section */}
      <div className="border-b border-primary-foreground/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-playfair font-semibold mb-4">
              Stay Connected with Our Legacy
            </h3>
            <p className="text-primary-foreground/80 font-inter mb-8">
              Subscribe to receive updates on new collections, exclusive events, and heritage stories.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input 
                type="email" 
                placeholder="Enter your email"
                className="bg-primary-foreground text-primary border-0"
              />
              <Button 
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-inter font-medium"
              >
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center space-x-3 mb-6">
              <img src={logo} alt="G. B. Nashikkar" className="h-12 w-auto" />
              <div>
                <h4 className="text-xl font-playfair font-semibold">G. B. Nashikkar</h4>
                <p className="text-sm text-primary-foreground/70 font-inter">Since 1881</p>
              </div>
            </Link>
            <p className="text-primary-foreground/80 font-inter mb-6 leading-relaxed">
              Crafting exquisite jewelry with uncompromising quality and timeless elegance for over 140 years.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="p-2 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-elegant"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="text-lg font-playfair font-semibold mb-6">Quick Links</h5>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-elegant font-inter"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h5 className="text-lg font-playfair font-semibold mb-6">Services</h5>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link 
                    to={service.href}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-elegant font-inter"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h5 className="text-lg font-playfair font-semibold mb-6">Contact Us</h5>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                <div>
                  <p className="text-primary-foreground/80 font-inter">
                    Agra Road, Navnath Nager<br />
                    Dhule, Maharashtra<br />
                    India
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-accent flex-shrink-0" />
                <a 
                  href="tel:+911234567890"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-elegant font-inter"
                >
                  +91 123 456 7890
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-accent flex-shrink-0" />
                <a 
                  href="mailto:info@gbnashikkar.com"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-elegant font-inter"
                >
                  info@gbnashikkar.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-primary-foreground/60 font-inter text-sm">
              © 2024 G. B. Nashikkar. All rights reserved. Established 1881.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link 
                to="/privacy" 
                className="text-primary-foreground/60 hover:text-primary-foreground transition-elegant font-inter"
              >
                Privacy Policy
              </Link>
              <Link 
                to="/terms" 
                className="text-primary-foreground/60 hover:text-primary-foreground transition-elegant font-inter"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;