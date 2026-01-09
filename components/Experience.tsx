'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Flower2, Briefcase } from 'lucide-react';

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="experience" ref={ref} className="relative py-16 sm:py-20 md:py-24 px-4">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-300 to-transparent"></div>

      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center gap-3 mb-12">
            <Flower2 className="text-purple-400" size={32} />
            <h2 className="text-5xl md:text-6xl font-handwritten text-gray-800 text-center">
              Experience
            </h2>
            <Flower2 className="text-pink-400" size={32} />
          </div>

          <div className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-xl p-6 md:p-8 lg:p-12 border-2 border-purple-100">
            <div className="flex flex-col md:flex-row items-start gap-6">
              <div className="bg-gradient-to-br from-purple-400 to-pink-400 p-4 rounded-2xl shadow-lg flex-shrink-0">
                <Briefcase className="text-white" size={32} />
              </div>

              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-1">
                      Machine Learning Intern
                    </h3>
                    <p className="text-lg text-gray-600 font-medium">
                      National Institute of Technology (NIT), Calicut
                    </p>
                  </div>
                  <span className="text-gray-500 italic mt-2 md:mt-0">May 2025 – Aug 2025</span>
                </div>

                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="text-pink-400 text-xl flex-shrink-0">🌸</span>
                    <span>
                      Conducted research and model development on transformer-based <strong>OCR systems</strong> using
                      Hugging Face, focusing on handwritten <strong>Malayalam script recognition</strong>.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-purple-400 text-xl flex-shrink-0">🌿</span>
                    <span>
                      Designed and fine-tuned the <strong>Microsoft TrOCR</strong> architecture with a custom tokenizer,
                      achieving high character recognition accuracy on regional datasets.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-pink-400 text-xl flex-shrink-0">🌸</span>
                    <span>
                      Developed and evaluated a <strong>cyberbullying detection model</strong> for Malayalam text using
                      <strong> IndicBERT</strong> and a manually curated social media dataset.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-purple-400 text-xl flex-shrink-0">🌿</span>
                    <span>
                      Implemented extensive <strong>data preprocessing, augmentation, and normalization</strong> pipelines
                      to improve model robustness and generalization.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-pink-400 text-xl flex-shrink-0">🌸</span>
                    <span>
                      Converted the internship work into a <strong>research project</strong> accepted at a low-resource
                      language conference.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
