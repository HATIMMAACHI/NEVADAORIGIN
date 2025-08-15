import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Star, Zap, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Sophisticated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-neutral-50 to-neutral-100 dark:from-neutral-900 dark:via-neutral-800 dark:to-neutral-900"></div>
      
      {/* Geometric Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-72 h-72 border border-neutral-200 dark:border-neutral-700 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 border border-neutral-200 dark:border-neutral-700 rounded-full opacity-10 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-neutral-200 dark:border-neutral-700 rounded-full opacity-15 animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Floating Elements with Better Design */}
      <div className="absolute top-32 left-20 w-4 h-4 bg-black dark:bg-white rounded-full opacity-60 animate-bounce"></div>
      <div className="absolute bottom-32 right-20 w-6 h-6 bg-black dark:bg-white rounded-full opacity-40 animate-bounce" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-black dark:bg-white rounded-full opacity-50 animate-bounce" style={{ animationDelay: '2s' }}></div>

      <div className="container-custom relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Enhanced Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-3 bg-black dark:bg-white text-white dark:text-black px-6 py-3 rounded-full text-sm font-semibold mb-8 shadow-lg"
          >
            <Sparkles className="w-4 h-4" />
            <span>Crafting Digital Portfolios</span>
            <CheckCircle className="w-4 h-4" />
          </motion.div>
          
          {/* Enhanced Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-6xl md:text-8xl font-black mb-8 leading-tight tracking-tight"
          >
            <span className="block">Craft Your</span>
            <span className="block">Unique</span>
            <span className="block logo-gradient-text">Portfolio</span>
            <span className="block text-4xl md:text-6xl font-bold text-neutral-600 dark:text-neutral-400 mt-4">
              with NevadaOrigin
            </span>
          </motion.h1>
          
          {/* Enhanced Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-xl md:text-2xl text-neutral-600 dark:text-neutral-400 mb-12 leading-relaxed max-w-4xl mx-auto"
          >
            Transform your creative vision into a stunning digital portfolio that stands out. 
            We craft bespoke websites that tell your unique story and showcase your talent 
            with precision and elegance.
          </motion.p>
          
          {/* Enhanced CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
          >
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="bg-black dark:bg-white text-white dark:text-black font-bold py-5 px-10 rounded-xl text-lg transition-all duration-300 shadow-2xl hover:shadow-3xl flex items-center space-x-3 group"
              >
                <span>Get Your Portfolio Now</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>
            <Link to="/portfolio">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white dark:bg-neutral-800 text-black dark:text-white border-2 border-black dark:border-white font-bold py-5 px-10 rounded-xl text-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center space-x-3 group"
              >
                <span>View Our Work</span>
                <Zap className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </motion.button>
            </Link>
          </motion.div>
          
          {/* Enhanced Stats with Better Design */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            {[
              { number: "50+", label: "Portfolios Created", icon: Sparkles },
              { number: "100%", label: "Client Satisfaction", icon: CheckCircle },
              { number: "24/7", label: "Support Available", icon: Zap },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="text-center group"
              >
                <div className="w-16 h-16 bg-black dark:bg-white rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <stat.icon className="w-8 h-8 text-white dark:text-black" />
                </div>
                <div className="text-4xl md:text-5xl font-black logo-gradient-text mb-2">
                  {stat.number}
                </div>
                <div className="text-neutral-600 dark:text-neutral-400 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Enhanced Floating Icons */}
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 right-20 text-black dark:text-white opacity-60"
      >
        <Star className="w-12 h-12" />
      </motion.div>
      <motion.div
        animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-1/4 left-20 text-black dark:text-white opacity-60"
      >
        <Sparkles className="w-12 h-12" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
