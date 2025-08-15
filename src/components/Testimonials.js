import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Chen",
      role: "UX Designer",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
      quote: "NevadaOrigin transformed my portfolio into something I'm truly proud of. The attention to detail and modern design exceeded my expectations!",
      rating: 5,
      category: "Designer Portfolio"
    },
    {
      id: 2,
      name: "Marcus Rodriguez",
      role: "Full-Stack Developer",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      quote: "Professional, responsive, and delivered exactly what I wanted. My portfolio now stands out from the crowd and has helped me land amazing opportunities.",
      rating: 5,
      category: "Developer Portfolio"
    },
    {
      id: 3,
      name: "Emma Thompson",
      role: "Digital Artist",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      quote: "The team at NevadaOrigin understood my vision perfectly. They created a stunning gallery layout that showcases my artwork beautifully.",
      rating: 5,
      category: "Artist Portfolio"
    },
    {
      id: 4,
      name: "Alex Johnson",
      role: "Photographer",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      quote: "Incredible work! My photography portfolio now has the perfect balance of style and functionality. Highly recommended!",
      rating: 5,
      category: "Photographer Portfolio"
    },
    {
      id: 5,
      name: "Priya Patel",
      role: "Student",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face",
      quote: "As a student, I needed something affordable but professional. NevadaOrigin delivered beyond my expectations!",
      rating: 5,
      category: "Student Portfolio"
    },
    {
      id: 6,
      name: "David Kim",
      role: "Creative Director",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
      quote: "The level of creativity and technical expertise is outstanding. My portfolio now reflects my brand perfectly.",
      rating: 5,
      category: "Creative Portfolio"
    }
  ];

  return (
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
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our amazing clients have to say about their portfolio experience.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card p-6 relative"
            >
              {/* Quote Icon */}
              <div className="absolute -top-3 left-6">
                <div className="w-8 h-8 bg-accent-500 rounded-full flex items-center justify-center">
                  <Quote className="w-4 h-4 text-white" />
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-1 mb-4 mt-2">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-neutral-700 dark:text-neutral-300 mb-6 leading-relaxed">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center space-x-3">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-sm">{testimonial.name}</h4>
                  <p className="text-xs text-neutral-600 dark:text-neutral-400">{testimonial.role}</p>
                </div>
              </div>

              {/* Category Badge */}
              <div className="absolute top-4 right-4">
                <span className="bg-accent-500/10 text-accent-600 dark:text-accent-400 text-xs px-2 py-1 rounded-full">
                  {testimonial.category}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          {[
            { number: "100%", label: "Client Satisfaction" },
            { number: "50+", label: "Portfolios Created" },
            { number: "4.9/5", label: "Average Rating" },
            { number: "24/7", label: "Support Available" }
          ].map((stat, index) => (
            <div key={index}>
              <div className="text-2xl md:text-3xl font-bold gradient-text mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-neutral-600 dark:text-neutral-400">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials; 