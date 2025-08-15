import React from "react";
import { motion } from "framer-motion";
import { Heart, MessageCircle, Share, Instagram } from "lucide-react";

const InstagramFeed = () => {
  // Mock Instagram posts data
  const posts = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=400&fit=crop&crop=center",
      caption:
        "New portfolio design for @creative_designer ✨ Clean, modern, and perfectly showcases their work!",
      likes: 234,
      comments: 18,
      category: "Designer Portfolio",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=400&fit=crop&crop=center",
      caption:
        "Developer portfolio with dark theme and smooth animations 🚀 #webdev #portfolio",
      likes: 189,
      comments: 12,
      category: "Developer Portfolio",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&h=400&fit=crop&crop=center",
      caption:
        "Artist portfolio featuring stunning gallery layout 🎨 Perfect for showcasing creative work!",
      likes: 312,
      comments: 24,
      category: "Artist Portfolio",
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=400&fit=crop&crop=center",
      caption:
        "Behind the scenes: Working on a photographer's portfolio 📸 Clean, minimal, and image-focused!",
      likes: 156,
      comments: 9,
      category: "Photographer Portfolio",
    },
    {
      id: 5,
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=400&fit=crop&crop=center",
      caption:
        "Student portfolio with modern tech stack ⚡ React, Tailwind, and smooth animations!",
      likes: 278,
      comments: 21,
      category: "Student Portfolio",
    },
    {
      id: 6,
      image:
        "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=400&fit=crop&crop=center",
      caption:
        "UX Designer portfolio with interactive prototypes 🎯 User experience first!",
      likes: 203,
      comments: 15,
      category: "UX Designer Portfolio",
    },
  ];

  return (
    <div className="space-y-8">
      {/* Instagram Header */}
      <div className="flex items-center justify-center space-x-4 mb-8">
        <Instagram className="w-8 h-8 text-accent-500" />
        <div className="text-center">
          <h3 className="text-xl font-semibold">@nevadaorigin</h3>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            Follow for portfolio inspiration
          </p>
        </div>
      </div>

      {/* Instagram Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post, index) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            className="group relative overflow-hidden rounded-xl bg-white dark:bg-neutral-800 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            {/* Image */}
            <div className="relative aspect-square overflow-hidden">
              <img
                src={post.image}
                alt={post.caption}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>

              {/* Category Badge */}
              <div className="absolute top-3 left-3">
                <span className="bg-accent-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                  {post.category}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-4">
              <p className="text-sm text-neutral-700 dark:text-neutral-300 mb-3 line-clamp-2">
                {post.caption}
              </p>

              {/* Engagement */}
              <div className="flex items-center justify-between text-xs text-neutral-500 dark:text-neutral-400">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-1">
                    <Heart className="w-4 h-4" />
                    <span>{post.likes}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <MessageCircle className="w-4 h-4" />
                    <span>{post.comments}</span>
                  </div>
                </div>
                <Share className="w-4 h-4" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Follow CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="text-center mt-12"
      >
        <a
          href="https://instagram.com/nevadaorigin"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center space-x-2 bg-gradient-to-r from-accent-500 to-accent-600 text-white px-6 py-3 rounded-lg font-medium hover:from-accent-600 hover:to-accent-700 transition-all duration-300 transform hover:scale-105"
        >
          <Instagram className="w-5 h-5" />
          <span>Follow @nevadaorigin</span>
        </a>
      </motion.div>
    </div>
  );
};

export default InstagramFeed;
