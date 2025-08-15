import React, { useState } from "react";
import { motion } from "framer-motion";
import { Check, Star, Zap, Crown, Package, ArrowRight } from "lucide-react";

const Services = () => {
  const [selectedPlan, setSelectedPlan] = useState("Pro");

  const services = [
    {
      icon: Package,
      title: "Custom Portfolio Design",
      description:
        "Bespoke portfolio websites tailored to your unique style and brand identity.",
      features: [
        "Custom Design",
        "Responsive Layout",
        "SEO Optimization",
        "Contact Forms",
      ],
    },
    {
      icon: Zap,
      title: "Developer Portfolios",
      description:
        "Technical portfolios showcasing your coding skills and project expertise.",
      features: [
        "Code Snippets",
        "Project Showcase",
        "GitHub Integration",
        "Blog Integration",
      ],
    },
    {
      icon: Crown,
      title: "Artist Portfolios",
      description:
        "Stunning galleries to showcase your artwork and creative process.",
      features: [
        "Gallery Layout",
        "Artwork Shop",
        "Commission Requests",
        "Process Videos",
      ],
    },
    {
      icon: Star,
      title: "Photographer Portfolios",
      description:
        "Image-focused portfolios with lightbox galleries and booking systems.",
      features: [
        "Lightbox Gallery",
        "Booking System",
        "Print Sales",
        "Client Portal",
      ],
    },
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$299",
      period: "one-time",
      description: "Perfect for students and beginners",
      features: [
        "Custom Design",
        "Responsive Layout",
        "Contact Form",
        "Basic SEO",
        "1 Month Support",
        "Mobile Optimized",
      ],
      popular: false,
    },
    {
      name: "Pro",
      price: "$599",
      period: "one-time",
      description: "Most popular choice for professionals",
      features: [
        "Everything in Starter",
        "Advanced SEO",
        "Blog Integration",
        "Social Media Integration",
        "3 Months Support",
        "Analytics Setup",
        "Performance Optimization",
        "Content Management",
      ],
      popular: true,
    },
    {
      name: "Premium",
      price: "$999",
      period: "one-time",
      description: "Complete solution with advanced features",
      features: [
        "Everything in Pro",
        "E-commerce Integration",
        "Custom Animations",
        "Advanced Analytics",
        "Priority Support",
        "Performance Monitoring",
        "Security Hardening",
        "Content Strategy",
      ],
      popular: false,
    },
  ];

  const addOns = [
    {
      title: "Hosting Setup",
      price: "$50",
      description: "Professional hosting setup with SSL certificate and CDN",
      features: [
        "Domain Setup",
        "SSL Certificate",
        "CDN Configuration",
        "Backup System",
      ],
    },
    {
      title: "SEO Optimization",
      price: "$100",
      description:
        "Advanced SEO optimization for better search engine rankings",
      features: [
        "Keyword Research",
        "Meta Tags",
        "Schema Markup",
        "Performance Audit",
      ],
    },
    {
      title: "CV Writing",
      price: "$75",
      description:
        "Professional CV/resume writing to complement your portfolio",
      features: [
        "Custom Design",
        "ATS Optimized",
        "Multiple Formats",
        "Cover Letter",
      ],
    },
    {
      title: "Content Creation",
      price: "$150",
      description: "Professional content writing for your portfolio sections",
      features: [
        "About Section",
        "Project Descriptions",
        "Blog Posts",
        "Social Media",
      ],
    },
  ];

  return (
    <div className="pt-16 md:pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-neutral-50 to-neutral-100 dark:from-neutral-800 dark:to-neutral-900">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our <span className="gradient-text">Services</span>
            </h1>
            <p className="text-xl text-neutral-600 dark:text-neutral-400 mb-8 leading-relaxed">
              From custom design to complete portfolio solutions, we offer
              everything you need to create a stunning online presence that
              stands out.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What We <span className="gradient-text">Offer</span>
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
              Comprehensive portfolio solutions tailored to your specific needs
              and industry.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card p-6 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-accent-500 to-accent-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-neutral-600 dark:text-neutral-400 mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center justify-center space-x-2"
                    >
                      <Check className="w-4 h-4 text-accent-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-gradient-to-br from-neutral-50 to-neutral-100 dark:from-neutral-800 dark:to-neutral-900">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Get Your <span className="gradient-text">Custom Quote</span>
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
              Every portfolio is unique, just like you. Let's discuss your
              project and create a custom solution that perfectly fits your
              needs and budget.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: "💬",
                title: "WhatsApp",
                description: "Quick and easy communication",
                action: "Chat Now",
                link: "https://wa.me/your-number",
              },
              {
                icon: "📧",
                title: "Email",
                description: "Detailed project discussion",
                action: "Send Email",
                link: "mailto:hello@nevadaorigin.com",
              },
              {
                icon: "📞",
                title: "Call",
                description: "Direct consultation",
                action: "Call Us",
                link: "tel:+your-phone",
              },
            ].map((contact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                <div className="card p-8 text-center">
                  <div className="text-4xl mb-4">{contact.icon}</div>
                  <h3 className="text-2xl font-bold mb-2">{contact.title}</h3>
                  <p className="text-neutral-600 dark:text-neutral-400 mb-6">
                    {contact.description}
                  </p>

                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={contact.link}
                    className="w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 bg-accent-500 text-white hover:bg-accent-600 block"
                  >
                    {contact.action}
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What We <span className="gradient-text">Include</span>
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
              Every portfolio project includes these essential services to
              ensure your success.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Custom Design",
                description: "Unique design tailored to your brand and style",
                features: [
                  "Brand Identity",
                  "Color Palette",
                  "Typography",
                  "Layout Design",
                ],
              },
              {
                title: "Development",
                description:
                  "Modern, responsive website built with latest technologies",
                features: [
                  "Mobile Responsive",
                  "Fast Loading",
                  "SEO Optimized",
                  "Cross-browser",
                ],
              },
              {
                title: "Content Strategy",
                description:
                  "Professional content that tells your story effectively",
                features: [
                  "About Section",
                  "Project Descriptions",
                  "Call-to-actions",
                  "SEO Content",
                ],
              },
              {
                title: "Launch Support",
                description:
                  "Complete setup and ongoing support for your success",
                features: [
                  "Domain Setup",
                  "Hosting Configuration",
                  "Training",
                  "Support",
                ],
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card p-6"
              >
                <div className="mb-4">
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                </div>
                <p className="text-neutral-600 dark:text-neutral-400 mb-4">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center space-x-2 text-sm"
                    >
                      <Check className="w-4 h-4 text-accent-500 flex-shrink-0" />
                      <span className="text-neutral-600 dark:text-neutral-400">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-accent-500 to-accent-600">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-accent-100 mb-8 max-w-2xl mx-auto">
              Let's discuss your project and create a custom solution that
              perfectly fits your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://wa.me/your-number"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-accent-600 font-semibold py-4 px-8 rounded-lg text-lg hover:bg-neutral-100 transition-colors duration-300 flex items-center justify-center space-x-2"
              >
                <span>Chat on WhatsApp</span>
                <ArrowRight className="w-5 h-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="mailto:hello@nevadaorigin.com"
                className="border-2 border-white text-white font-semibold py-4 px-8 rounded-lg text-lg hover:bg-white hover:text-accent-600 transition-colors duration-300"
              >
                Send Email
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
