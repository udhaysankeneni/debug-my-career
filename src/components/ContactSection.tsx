'use client';

import { motion } from 'framer-motion';
import { Calendar, Upload, Mail } from 'lucide-react';

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

interface ContactSectionProps {
  onResumeUploadClick: () => void;
}

export default function ContactSection({ onResumeUploadClick }: ContactSectionProps) {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-600 to-cyan-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerChildren}
          className="text-center"
        >
          <motion.h2 
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Let&apos;s Get <span className="text-yellow-300">Started</span>
          </motion.h2>
          <motion.p 
            variants={fadeInUp}
            className="text-xl mb-12 max-w-3xl mx-auto"
          >
            Have questions? Want help with your resume or job search? Let&apos;s turn your potential into progress.
          </motion.p>

          <motion.div 
            variants={fadeInUp}
            className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
          >
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-6">Book a Consultation</h3>
              <p className="mb-6">Schedule a free 30-minute consultation to discuss your career goals</p>
                          <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://calendly.com/uday-debugmycareer/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-400 text-slate-800 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors flex items-center gap-2 mx-auto"
            >
              <Calendar className="w-5 h-5" />
              Schedule Now
            </motion.a>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-6">Upload Resume</h3>
              <p className="mb-6">Get a detailed review and optimization suggestions for your resume</p>
                          <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onResumeUploadClick}
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center gap-2 mx-auto"
            >
              <Upload className="w-5 h-5" />
              Upload Now
            </motion.button>
            </div>
          </motion.div>

          <motion.div 
            variants={fadeInUp}
            className="mt-12 flex justify-center items-center gap-8"
          >
            <a href="mailto:uday@debugmycareer.com" className="flex items-center gap-2 hover:text-yellow-300 transition-colors">
              <Mail className="w-5 h-5" />
              uday@debugmycareer.com
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}