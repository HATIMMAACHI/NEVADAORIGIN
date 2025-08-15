import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Target, Users, Award, Zap } from "lucide-react";

const About = () => {
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
            <div className="inline-flex items-center space-x-2 bg-accent-500/10 text-accent-600 dark:text-accent-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              <span>Our Story</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              The Story Behind{" "}
              <span className="gradient-text">NevadaOrigin</span>
            </h1>
            <p className="text-xl text-neutral-600 dark:text-neutral-400 leading-relaxed">
              Born from a passion for creativity and technology, NevadaOrigin
              emerged to revolutionize how creatives showcase their work to the world,
              connecting talent with opportunity globally.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Our <span className="gradient-text">Mission</span>
              </h2>
              <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-6 leading-relaxed">
                We believe every creative deserves a portfolio that not only
                showcases their work but tells their unique story. Our mission
                is to empower designers, developers, artists, and creatives with
                stunning digital portfolios that stand out in today's
                competitive landscape.
              </p>
              <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
                From students taking their first steps into the creative world
                to established professionals looking to refresh their online
                presence, we craft bespoke digital experiences that capture the
                essence of your creativity and professionalism.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-accent-500 to-accent-600 rounded-2xl p-8 text-white">
                <Target className="w-12 h-12 mb-6" />
                <h3 className="text-2xl font-bold mb-4">
                  Empowering Creatives
                </h3>
                <p className="text-accent-100 leading-relaxed">
                  We don't just build websites – we create digital experiences
                  that amplify your creative voice and help you connect with
                  opportunities that matter.
                </p>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary-500/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent-500/20 rounded-full blur-xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
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
              Our <span className="gradient-text">Values</span>
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
              These core principles guide everything we do and every portfolio
              we create.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Sparkles,
                title: "Creativity First",
                description:
                  "We believe in pushing boundaries and creating unique experiences that reflect your creative vision.",
              },
              {
                icon: Users,
                title: "Client-Centric",
                description:
                  "Your success is our success. We work closely with you to ensure every detail meets your expectations.",
              },
              {
                icon: Award,
                title: "Quality Excellence",
                description:
                  "We never compromise on quality. Every portfolio is crafted with attention to detail and modern best practices.",
              },
              {
                icon: Zap,
                title: "Innovation",
                description:
                  "We stay ahead of trends and technologies to deliver cutting-edge solutions that make you stand out.",
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card p-6 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-accent-500 to-accent-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                <p className="text-neutral-600 dark:text-neutral-400">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
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
              How We <span className="gradient-text">Work</span>
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
              Our streamlined process ensures your portfolio is delivered on
              time and exceeds expectations.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery",
                description:
                  "We start by understanding your vision, goals, and the story you want to tell.",
              },
              {
                step: "02",
                title: "Design",
                description:
                  "Our team creates a custom design that perfectly captures your unique style and brand.",
              },
              {
                step: "03",
                title: "Development",
                description:
                  "We build your portfolio using modern technologies for optimal performance and user experience.",
              },
              {
                step: "04",
                title: "Launch",
                description:
                  "Your portfolio goes live with full support and guidance for ongoing success.",
              },
            ].map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                <div className="card p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-accent-500 to-accent-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">
                    {process.step}
                  </div>
                  <h3 className="text-xl font-semibold mb-4">
                    {process.title}
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-400">
                    {process.description}
                  </p>
                </div>
                {index < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <div className="w-8 h-0.5 bg-gradient-to-r from-accent-500 to-transparent"></div>
                  </div>
                )}
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
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-accent-100 mb-8 max-w-2xl mx-auto">
              Let's create something extraordinary together. Your portfolio
              deserves to be as unique as you are.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-accent-600 font-semibold py-4 px-8 rounded-lg text-lg hover:bg-neutral-100 transition-colors duration-300"
            >
              Let's Build Yours
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
