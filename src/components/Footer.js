import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Instagram,
  Twitter,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Sparkles,
  ArrowUp,
  Heart,
  Star,
} from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 border border-white rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 border border-white rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-white rounded-full"></div>
      </div>

      <div className="container-custom py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Enhanced Brand Section */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center space-x-4 mb-8"
            >
              <div className="relative">
                <img
                  src="/nevadaorigin.jpg"
                  alt="NevadaOrigin Logo"
                  className="w-16 h-16 rounded-full object-cover shadow-2xl"
                />
                <div className="absolute -inset-2 bg-white/10 rounded-full blur-xl"></div>
              </div>
              <div>
                <span className="text-3xl font-black logo-gradient-text block">
                  NevadaOrigin
                </span>
                <span className="text-sm text-neutral-400">
                  Crafting Digital Excellence
                </span>
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-neutral-300 mb-8 max-w-lg leading-relaxed"
            >
              Crafting exceptional digital portfolios that tell your unique
              story. We transform creative visions into stunning, professional
              websites that stand out with precision and elegance.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex space-x-4"
            >
              {[
                { icon: Instagram, href: "https://instagram.com/nevadaorigin" },
                { icon: Twitter, href: "https://twitter.com/nevadaorigin" },
                {
                  icon: Linkedin,
                  href: "https://linkedin.com/company/nevadaorigin",
                },
                { icon: Mail, href: "mailto:hello@nevadaorigin.com" },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-neutral-800 rounded-xl flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Enhanced Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-xl font-bold mb-8 flex items-center">
              <Star className="w-5 h-5 mr-2" />
              Quick Links
            </h3>
            <ul className="space-y-4">
              {[
                { name: "Home", path: "/" },
                { name: "About", path: "/about" },
                { name: "Portfolio", path: "/portfolio" },
                { name: "Services", path: "/services" },
                { name: "Contact", path: "/contact" },
              ].map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                >
                  <Link
                    to={link.path}
                    className="text-neutral-400 hover:text-white transition-all duration-300 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-neutral-600 rounded-full mr-3 group-hover:bg-white transition-colors"></span>
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Enhanced Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-xl font-bold mb-8 flex items-center">
              <Sparkles className="w-5 h-5 mr-2" />
              Services
            </h3>
            <ul className="space-y-4">
              {[
                "Custom Portfolio Design",
                "Developer Portfolios",
                "Designer Portfolios",
                "Artist Portfolios",
                "Student Portfolios",
                "Photographer Portfolios",
              ].map((service, index) => (
                <motion.li
                  key={service}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                >
                  <span className="text-neutral-400 hover:text-white transition-all duration-300 flex items-center group cursor-pointer">
                    <span className="w-2 h-2 bg-neutral-600 rounded-full mr-3 group-hover:bg-white transition-colors"></span>
                    {service}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Enhanced Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="border-t border-neutral-800 mt-16 pt-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Mail,
                title: "Email",
                value: "hello@nevadaorigin.com",
                href: "mailto:hello@nevadaorigin.com",
              },
              {
                icon: Phone,
                title: "Phone",
                value: "+212663192810",
                href: "tel:+212663192810",
              },
              { icon: MapPin, title: "Location", value: "Morocco", href: "#" },
            ].map((contact, index) => (
              <motion.a
                key={index}
                href={contact.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="flex items-center space-x-4 p-6 rounded-2xl bg-neutral-800/50 hover:bg-neutral-800 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <contact.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-neutral-400">{contact.title}</p>
                  <p className="font-semibold">{contact.value}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Enhanced Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="border-t border-neutral-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-neutral-400 text-sm flex items-center">
            © {currentYear} NevadaOrigin. Made with{" "}
            <Heart className="w-4 h-4 mx-1 text-red-500" /> for creatives.
          </p>
          <div className="flex space-x-8 mt-4 md:mt-0">
            <Link
              to="/privacy"
              className="text-neutral-400 hover:text-white text-sm transition-all duration-300 hover:scale-105"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="text-neutral-400 hover:text-white text-sm transition-all duration-300 hover:scale-105"
            >
              Terms of Service
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Enhanced Scroll to Top Button */}
      <motion.button
        whileHover={{ scale: 1.1, y: -5 }}
        whileTap={{ scale: 0.9 }}
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-14 h-14 logo-gradient-bg rounded-2xl flex items-center justify-center shadow-2xl hover:shadow-3xl transition-all duration-300 z-50"
      >
        <ArrowUp className="w-6 h-6 text-white" />
      </motion.button>
    </footer>
  );
};

export default Footer;
