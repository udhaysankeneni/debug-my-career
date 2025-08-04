'use client';

import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="py-12 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl font-bold gradient-text mb-4"
          >
            DebugMyCareer
          </motion.div>
          <p className="text-slate-400 mb-8">Helping tech professionals land their dream jobs</p>
          <div className="border-t border-slate-800 pt-8">
            <p className="text-slate-500">© 2024 DebugMyCareer. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}