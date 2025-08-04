'use client';

import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight, Calendar, Upload, MessageSquare } from 'lucide-react';



interface GetStartedSectionProps {
  onResumeUploadClick: () => void;
}

export default function GetStartedSection({ onResumeUploadClick }: GetStartedSectionProps) {
  const steps = [
    {
      step: "01",
      icon: <Calendar className="w-8 h-8" />,
      title: "Book Free Consultation",
      description: "Schedule a 30-minute call to discuss your career goals and challenges",
      cta: "Schedule Now"
    },
    {
      step: "02", 
      icon: <Upload className="w-8 h-8" />,
      title: "Resume Review",
      description: "Get detailed feedback and optimization suggestions for your resume",
      cta: "Upload Resume"
    },
    {
      step: "03",
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Personalized Plan",
      description: "Receive a custom action plan tailored to your specific career objectives",
      cta: "Get Started"
    }
  ];

  return (
    <section className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to <span className="gradient-text">Transform</span> Your Career?
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Take the first step towards landing your dream tech job with our proven 3-step process
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="relative"
            >
              {/* Connection line for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-blue-300 to-transparent z-0" 
                     style={{ width: 'calc(100% - 2rem)' }} 
                />
              )}
              
              <div className="bg-slate-700 rounded-2xl p-8 shadow-lg border border-slate-600 relative z-10 hover:shadow-xl transition-all">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                    {step.step}
                  </div>
                  <div className="text-blue-600">
                    {step.icon}
                  </div>
                </div>
                
                              <h3 className="text-2xl font-bold mb-4 text-slate-100">{step.title}</h3>
              <p className="text-slate-300 mb-6">{step.description}</p>
                
                {step.step === "01" ? (
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="https://calendly.com/udaysankeneni/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                  >
                    {step.cta}
                    <ArrowRight className="w-4 h-4" />
                  </motion.a>
                ) : step.step === "02" ? (
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={onResumeUploadClick}
                    className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                  >
                    {step.cta}
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                ) : (
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="#contact"
                    className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                  >
                    {step.cta}
                    <ArrowRight className="w-4 h-4" />
                  </motion.a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional benefits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="bg-gradient-to-br from-slate-700 to-slate-600 rounded-2xl p-8 border border-slate-500"
        >
          <h3 className="text-2xl font-bold text-center mb-8 text-slate-100">
            What You&apos;ll Get With DebugMyCareer
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Personalized career roadmap",
              "Resume optimization",
              "Interview preparation", 
              "Ongoing mentorship support"
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.8, duration: 0.5 }}
                className="flex items-center gap-3"
              >
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                <span className="text-slate-300 font-medium">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}