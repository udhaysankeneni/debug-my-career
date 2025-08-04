'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

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

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "QA Engineer at TechCorp",
      content: "Uday helped me transition from manual testing to automation. His guidance was invaluable in landing my dream job!",
      rating: 5
    },
    {
      name: "Michael Rodriguez",
      role: "Data Analyst at StartupXYZ",
      content: "The resume optimization and interview prep were game-changers. I got 3 job offers within a month!",
      rating: 5
    },
    {
      name: "Priya Patel",
      role: "Senior SDET at BigTech",
      content: "Uday's mentorship helped me level up my automation skills and negotiate a 40% salary increase.",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerChildren}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Success <span className="gradient-text">Stories</span>
          </motion.h2>
          <motion.p 
            variants={fadeInUp}
            className="text-xl text-slate-300 max-w-3xl mx-auto"
          >
            Hear from professionals who&apos;ve transformed their tech careers
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -5 }}
              className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl p-6 border border-slate-600"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
                              <p className="text-slate-300 mb-6 italic">&ldquo;{testimonial.content}&rdquo;</p>
              <div>
                <p className="font-semibold text-slate-100">{testimonial.name}</p>
                <p className="text-slate-400 text-sm">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}