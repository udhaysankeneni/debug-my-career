'use client';

import { motion } from 'framer-motion';
import { CheckCircle, FileText, Briefcase, MessageSquare, TestTube } from 'lucide-react';

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

export default function ServicesSection() {

  const services = [
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Resume & LinkedIn Services",
      items: [
        "Resume review + optimization (junior/mid/senior)",
        "LinkedIn profile makeover", 
        "Job description-based tailoring"
      ]
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "Job Application Support",
      items: [
        "Career switch guidance (QA → Data, DevOps, etc.)",
        "How to apply strategically",
        "Custom cover letters (if needed)"
      ]
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Career Coaching / Mentorship",
      items: [
        "Weekly or one-time career coaching calls",
        "Help with choosing between paths latest trends",
        "Interview preparation (mock interviews, STAR stories)"
      ]
    },
    {
      icon: <TestTube className="w-8 h-8" />,
      title: "QA & Testing Mentorship",
      items: [
        "Backend/API testing (Postman, pytest)",
        "Frontend (Playwright, Selenium)",
        "Mobile (Appium, Espresso)",
        "ETL/Data validation"
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-slate-800">
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
            Services <span className="gradient-text">Offered</span>
          </motion.h2>
          <motion.p 
            variants={fadeInUp}
            className="text-xl text-slate-300 max-w-3xl mx-auto"
          >
            Comprehensive career development services tailored for tech professionals
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-slate-700 rounded-xl p-6 shadow-lg border border-slate-600 hover:shadow-xl transition-all cursor-pointer"
              
            >
              <div className="text-blue-600 mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-4 text-slate-100">{service.title}</h3>
              <ul className="space-y-2">
                {service.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start gap-2 text-slate-300">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}