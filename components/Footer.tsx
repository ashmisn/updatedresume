'use client';

import { motion } from 'framer-motion';
import { Flower2, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative py-16 px-4">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-pink-300 to-transparent"></div>

      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center gap-3 mb-8">
            <Flower2 className="text-pink-400" size={24} />
            <Flower2 className="text-purple-400" size={24} />
            <Flower2 className="text-blue-400" size={24} />
          </div>

          <p className="text-3xl md:text-4xl font-handwritten text-gray-700 mb-8 leading-relaxed">
            &quot;Code can be powerful — and beautiful too.&quot;
          </p>

          <div className="flex items-center justify-center gap-2 text-gray-600 mb-8">
            <span>Made with</span>
            <Heart className="text-pink-500 fill-pink-500" size={18} />
            <span>by Ashmi S N</span>
          </div>

          <div className="flex items-center justify-center gap-4 text-sm text-gray-500">
            <span>© 2025 ashmi-sn.dev</span>
            <span>•</span>
            <span>Built with Next.js & Framer Motion</span>
          </div>

          <div className="mt-8 flex justify-center gap-4">
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            >
              <Flower2 className="text-pink-300" size={32} />
            </motion.div>
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
            >
              <Flower2 className="text-purple-300" size={32} />
            </motion.div>
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            >
              <Flower2 className="text-blue-300" size={32} />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
