'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Upload, Calendar, ArrowRight } from 'lucide-react';
import Navigation from '@/components/Navigation';
import AboutSection from '@/components/AboutSection';
import StatsSection from '@/components/StatsSection';
import ServicesSection from '@/components/ServicesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import GetStartedSection from '@/components/GetStartedSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import ResumeUpload from '@/components/ResumeUpload';

export default function HomePage() {
  const [isResumeUploadOpen, setIsResumeUploadOpen] = useState(false);

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Background - Dark Theme */}
      <div className="fixed inset-0 z-0">
        {/* Base gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900"></div>
        
        {/* Animated gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10 animate-gradient-x"></div>
        <div className="absolute inset-0 bg-gradient-to-l from-purple-500/10 via-pink-500/10 to-blue-500/10 animate-gradient-y"></div>
        
        {/* Animated wave shapes */}
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-gradient-to-br from-blue-400/15 to-cyan-400/15 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-1/3 -right-20 w-80 h-80 bg-gradient-to-br from-purple-400/15 to-pink-400/15 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute bottom-20 left-1/4 w-72 h-72 bg-gradient-to-br from-cyan-400/15 to-blue-400/15 rounded-full blur-3xl animate-float-slow"></div>
        
        {/* Wave elements */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-slate-800/30 to-transparent wave-animation"></div>
      </div>
      
      {/* Content with proper z-index */}
      <div className="relative z-10">
        {/* Navigation */}
        <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-6"
            >
              Helping You Land Your{' '}
              <span className="gradient-text">Dream Tech Job</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-xl md:text-2xl text-slate-600 mb-12 max-w-3xl mx-auto"
            >
              Resume writing • Career guidance • Technical mentorship for QA, Data, and Engineering roles
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <motion.a
                whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(59, 130, 246, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                href="https://calendly.com/udaysankeneni/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all flex items-center gap-2 pulse-glow"
              >
                <Calendar className="w-5 h-5" />
                Book a Free Consultation
                <ChevronRight className="w-5 h-5" />
              </motion.a>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsResumeUploadOpen(true)}
                className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-600 hover:text-white transition-all flex items-center gap-2"
              >
                <Upload className="w-5 h-5" />
                Upload Resume for Review
              </motion.button>
              
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#services"
                className="text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-all flex items-center gap-2"
              >
                Browse Services
                <ArrowRight className="w-5 h-5" />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Floating Animation Elements - Dark Theme */}
          <div className="relative mt-20">
            <motion.div 
              className="float-animation absolute top-0 left-1/4 w-20 h-20 bg-blue-400 rounded-full opacity-30"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            <motion.div 
              className="float-animation absolute top-10 right-1/4 w-16 h-16 bg-cyan-400 rounded-full opacity-30"
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              style={{ animationDelay: '2s' }}
            />
            <motion.div 
              className="float-animation absolute bottom-0 left-1/3 w-12 h-12 bg-purple-400 rounded-full opacity-30"
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              style={{ animationDelay: '4s' }}
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about">
        <AboutSection />
      </section>
      
      {/* Stats Section */}
      <StatsSection />
      
      {/* Services Section */}
      <section id="services">
        <ServicesSection />
      </section>
      
      {/* Testimonials Section */}
      <section id="testimonials">
        <TestimonialsSection />
      </section>
      
      {/* Get Started Section */}
      <GetStartedSection onResumeUploadClick={() => setIsResumeUploadOpen(true)} />
      
      {/* Contact Section */}
      <section id="contact">
        <ContactSection onResumeUploadClick={() => setIsResumeUploadOpen(true)} />
      </section>
      
      {/* Footer */}
      <Footer />
      
        {/* Scroll to Top Button */}
        <ScrollToTop />
      </div>
      
      {/* Resume Upload Modal */}
      <ResumeUpload 
        isOpen={isResumeUploadOpen} 
        onClose={() => setIsResumeUploadOpen(false)} 
      />
    </div>
  );
}