'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Flower2, FileText, Award } from 'lucide-react';

export default function Publications() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="publications" ref={ref} className="relative py-16 sm:py-20 md:py-24 px-4">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-300 to-transparent"></div>

      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center gap-3 mb-12">
            <Flower2 className="text-purple-400" size={32} />
            <h2 className="text-5xl md:text-6xl font-handwritten text-gray-800 text-center">
              Publications & Research
            </h2>
            <Flower2 className="text-pink-400" size={32} />
          </div>

          <div className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-xl p-6 md:p-8 lg:p-12 border-2 border-purple-100">
            <div className="flex flex-col md:flex-row items-start gap-6">
              <div className="bg-gradient-to-br from-purple-400 to-pink-400 p-4 rounded-2xl shadow-lg flex-shrink-0">
                <FileText className="text-white" size={32} />
              </div>

              <div className="flex-1">
                <div className="flex items-start gap-3 mb-4">
                  <Award className="text-yellow-500 flex-shrink-0 mt-1" size={24} />
                  <h3 className="text-2xl font-bold text-gray-800 leading-tight">
                    Transformer-Based Approaches for Malayalam Handwritten Text Recognition Using Custom Tokenization
                  </h3>
                </div>

                <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl p-6 border-2 border-pink-200">
                  <p className="text-gray-700 mb-3">
                    Presented at <strong className="text-purple-600">SPELL 2025</strong>
                  </p>
                  <p className="text-gray-700 mb-3">
                    <strong>Venue:</strong> Indian Institute of Information Technology, Kottayam, India
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    This research explores novel transformer-based architectures specifically designed for handwritten
                    Malayalam text recognition. By developing a custom tokenization strategy that accounts for the unique
                    characteristics of Malayalam script, including conjuncts and diacritics, we achieved significant
                    improvements in character recognition accuracy. The work contributes to advancing OCR capabilities
                    for low-resource languages and demonstrates the importance of linguistically-informed preprocessing
                    in neural models.
                  </p>
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 text-gray-700 rounded-full text-sm font-medium border border-purple-200 flex items-center gap-2">
                    <span>🔬</span> Transformers
                  </span>
                  <span className="px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 text-gray-700 rounded-full text-sm font-medium border border-purple-200 flex items-center gap-2">
                    <span>📝</span> OCR
                  </span>
                  <span className="px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 text-gray-700 rounded-full text-sm font-medium border border-purple-200 flex items-center gap-2">
                    <span>🌐</span> Malayalam NLP
                  </span>
                  <span className="px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 text-gray-700 rounded-full text-sm font-medium border border-purple-200 flex items-center gap-2">
                    <span>🎯</span> Custom Tokenization
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
