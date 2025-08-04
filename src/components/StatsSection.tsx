'use client';

import { motion } from 'framer-motion';
import { Users, Award, Target, TrendingUp } from 'lucide-react';



export default function StatsSection() {
  const stats = [
    {
      icon: <Users className="w-8 h-8" />,
      number: "200+",
      label: "Professionals Helped",
      description: "Tech professionals guided to success"
    },
    {
      icon: <Award className="w-8 h-8" />,
      number: "8+",
      label: "Years Experience",
      description: "In quality assurance and testing"
    },
    {
      icon: <Target className="w-8 h-8" />,
      number: "95%",
      label: "Success Rate",
      description: "Clients landing desired roles"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      number: "40%",
      label: "Average Salary Increase",
      description: "For career advancement clients"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Proven <span className="text-yellow-300">Results</span>
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Real numbers from real success stories in the tech industry
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -10, scale: 1.05 }}
              className="bg-white/10 backdrop-blur-md rounded-xl p-8 text-center border border-white/20"
            >
              <div className="text-yellow-300 flex justify-center mb-4">
                {stat.icon}
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
                className="text-4xl font-bold text-white mb-2"
              >
                {stat.number}
              </motion.div>
              <h3 className="text-xl font-semibold text-white mb-2">{stat.label}</h3>
              <p className="text-blue-100 text-sm">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}