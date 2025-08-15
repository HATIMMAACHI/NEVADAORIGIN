import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Filter, Eye, Code, Palette, Camera, GraduationCap, Briefcase } from 'lucide-react';

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = [
    { name: 'All', icon: Filter },
    { name: 'Designer', icon: Palette },
    { name: 'Developer', icon: Code },
    { name: 'Artist', icon: Palette },
    { name: 'Photographer', icon: Camera },
    { name: 'Student', icon: GraduationCap },
    { name: 'Professional', icon: Briefcase }
  ];

  const projects = [
    {
      id: 1,
      title: "Sarah Chen - UX Designer",
      category: "Designer",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&crop=center",
      description: "Clean, modern portfolio showcasing UX/UI design projects with interactive prototypes.",
      technologies: ["Figma", "React", "TailwindCSS"],
      demoUrl: "https://sarahchen.design",
      features: ["Interactive Prototypes", "Project Gallery", "Contact Form", "Dark/Light Mode"]
    },
    {
      id: 2,
      title: "Marcus Rodriguez - Full-Stack Developer",
      category: "Developer",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop&crop=center",
      description: "Developer portfolio with dark theme, code snippets, and project showcase.",
      technologies: ["React", "Node.js", "MongoDB", "TypeScript"],
      demoUrl: "https://marcusrodriguez.dev",
      features: ["Code Snippets", "Project Showcase", "Blog Integration", "GitHub Integration"]
    },
    {
      id: 3,
      title: "Emma Thompson - Digital Artist",
      category: "Artist",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&h=400&fit=crop&crop=center",
      description: "Stunning gallery layout showcasing digital artwork and creative process.",
      technologies: ["Next.js", "Framer Motion", "Stripe"],
      demoUrl: "https://emmathompson.art",
      features: ["Gallery Layout", "Artwork Shop", "Commission Requests", "Process Videos"]
    },
    {
      id: 4,
      title: "Alex Johnson - Photographer",
      category: "Photographer",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop&crop=center",
      description: "Image-focused portfolio with lightbox gallery and booking system.",
      technologies: ["Vue.js", "Cloudinary", "Stripe"],
      demoUrl: "https://alexjohnson.photo",
      features: ["Lightbox Gallery", "Booking System", "Print Sales", "Client Portal"]
    },
    {
      id: 5,
      title: "Priya Patel - Student Portfolio",
      category: "Student",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop&crop=center",
      description: "Student portfolio showcasing academic projects and internship experiences.",
      technologies: ["React", "TailwindCSS", "Vercel"],
      demoUrl: "https://priyapatel.student",
      features: ["Academic Projects", "Resume Download", "Skills Showcase", "Contact Form"]
    },
    {
      id: 6,
      title: "David Kim - Creative Director",
      category: "Professional",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&h=400&fit=crop&crop=center",
      description: "Executive portfolio highlighting leadership experience and creative direction.",
      technologies: ["Next.js", "Sanity CMS", "Vercel"],
      demoUrl: "https://davidkim.creative",
      features: ["Case Studies", "Team Showcase", "Speaking Engagements", "Contact Form"]
    },
    {
      id: 7,
      title: "Lisa Wang - Frontend Developer",
      category: "Developer",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=400&fit=crop&crop=center",
      description: "Modern developer portfolio with interactive components and project demos.",
      technologies: ["React", "TypeScript", "Three.js"],
      demoUrl: "https://lisawang.dev",
      features: ["Interactive Components", "Project Demos", "Tech Blog", "GitHub Integration"]
    },
    {
      id: 8,
      title: "Carlos Mendez - Graphic Designer",
      category: "Designer",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop&crop=center",
      description: "Creative designer portfolio with brand identity projects and client work.",
      technologies: ["Webflow", "Adobe Creative Suite", "Stripe"],
      demoUrl: "https://carlosmendez.design",
      features: ["Brand Identity", "Client Work", "Process Videos", "Contact Form"]
    }
  ];

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

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
              Our <span className="gradient-text">Portfolio</span> Gallery
            </h1>
            <p className="text-xl text-neutral-600 dark:text-neutral-400 mb-8 leading-relaxed">
              Explore our collection of custom portfolio designs. Each project tells a unique story 
              and showcases the diverse talents of our amazing clients.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map((category) => (
              <motion.button
                key={category.name}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category.name)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category.name
                    ? 'bg-accent-500 text-white'
                    : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-accent-500 hover:text-white'
                }`}
              >
                <category.icon className="w-4 h-4" />
                <span>{category.name}</span>
              </motion.button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="wait">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="group relative overflow-hidden rounded-xl bg-white dark:bg-neutral-800 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  {/* Image */}
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="bg-accent-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                        {project.category}
                      </span>
                    </div>

                    {/* View Demo Button */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2 flex items-center space-x-2">
                        <Eye className="w-4 h-4" />
                        <span className="text-sm font-medium">View Demo</span>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                    <p className="text-neutral-600 dark:text-neutral-400 mb-4 line-clamp-2">
                      {project.description}
                    </p>
                    
                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="bg-neutral-100 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-300 text-xs px-2 py-1 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Demo Link */}
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 text-accent-500 hover:text-accent-600 font-medium text-sm"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <span>View Live Demo</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white dark:bg-neutral-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-64 object-cover rounded-t-2xl"
                />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 w-8 h-8 bg-black/50 text-white rounded-full flex items-center justify-center hover:bg-black/70 transition-colors duration-300"
                >
                  ×
                </button>
              </div>
              
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-2xl font-bold">{selectedProject.title}</h2>
                  <span className="bg-accent-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {selectedProject.category}
                  </span>
                </div>
                
                <p className="text-neutral-600 dark:text-neutral-400 mb-6">
                  {selectedProject.description}
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-3">Technologies Used</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="bg-neutral-100 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-300 px-3 py-1 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold mb-3">Key Features</h3>
                    <ul className="space-y-2">
                      {selectedProject.features.map((feature) => (
                        <li key={feature} className="flex items-center space-x-2 text-sm text-neutral-600 dark:text-neutral-400">
                          <div className="w-2 h-2 bg-accent-500 rounded-full"></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <a
                    href={selectedProject.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary flex items-center justify-center space-x-2"
                  >
                    <span>View Live Demo</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="btn-secondary"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Portfolio; 