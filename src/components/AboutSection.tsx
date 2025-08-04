'use client';

import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerChildren}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          <motion.div variants={fadeInUp}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              👨‍💻 About <span className="gradient-text">Me</span>
            </h2>
            <div className="text-lg text-slate-300 space-y-4">
              <p>
                Hi, I&apos;m <strong className="text-slate-100">Uday Sankeneni</strong> — a passionate tech professional with over <strong>8 years of experience</strong> in quality assurance, automation, and end-to-end testing across web, mobile, and backend systems.
              </p>
              <p>
                Over the years, I&apos;ve worked on complex software projects for large-scale organizations, helping teams ensure reliability, scalability, and performance across their applications. My background spans both manual and automated testing, along with cross-functional collaboration across development, product, and business teams.
              </p>
              <p>
                But more than just writing test cases or debugging APIs, what drives me is <strong className="text-blue-400">helping others succeed in their tech journey</strong>.
              </p>
            </div>
          </motion.div>

          <motion.div 
            variants={fadeInUp}
            className="relative"
          >
            <div className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-2xl p-8 border border-slate-600">
              <h3 className="text-2xl font-bold mb-6 text-slate-100">What I Offer</h3>
              <div className="space-y-3">
                {[
                  "Resume and LinkedIn optimization",
                  "Career path guidance for tech roles", 
                  "Mock interviews and job prep",
                  "Mentorship in QA, automation, and software testing",
                  "Personalized strategies to grow your skills and confidence"
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                    <span className="text-slate-300">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">My Mission</h3>
            <p className="text-xl max-w-4xl mx-auto">
              This platform was built with one goal in mind: to help professionals like you unlock new opportunities with the right tools, insights, and support. Through practical guidance and real-world experience, I aim to make career growth in tech more approachable, strategic, and empowering.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}