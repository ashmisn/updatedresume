'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Flower2, Code2, Brain, Users } from 'lucide-react';

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const skillCategories = [
    {
      title: 'Technical',
      icon: Code2,
      color: 'from-blue-400 to-cyan-400',
      skills: [
        'Python',
        'JavaScript',
        'C++',
        'SQL',
        'PyTorch',
        'TensorFlow',
        'Hugging Face',
        'OpenCV',
        'MediaPipe',
        'Scikit-learn',
        'FastAPI',
        'Streamlit',
        'React.js',
        'Node.js',
        'Express.js',
        'MySQL',
        'MongoDB',
        'PostgreSQL',
        'Git',
      ],
    },
    {
      title: 'AI & ML',
      icon: Brain,
      color: 'from-purple-400 to-pink-400',
      skills: [
        'Transformer Models (ViT, GPT-2, BERT)',
        'IBM Watson',
        'RAG Systems',
        'OCR Systems',
        'NLP & Text Classification',
        'CNNs (U-Net++)',
        'Data Preprocessing',
        'Model Optimization',
      ],
    },
    {
      title: 'Soft Skills',
      icon: Users,
      color: 'from-pink-400 to-rose-400',
      skills: [
        'Analytical Thinking',
        'Research Orientation',
        'Problem Solving',
        'Collaboration',
        'Adaptability',
        'Effective Communication',
      ],
    },
  ];

  return (
    <section id="skills" ref={ref} className="relative py-16 sm:py-20 md:py-24 px-4">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent"></div>

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center gap-3 mb-12">
            <Flower2 className="text-blue-400" size={32} />
            <h2 className="text-5xl md:text-6xl font-handwritten text-gray-800 text-center">
              Skills & Expertise
            </h2>
            <Flower2 className="text-pink-400" size={32} />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-xl p-4 md:p-6 border-2 border-gray-100 hover:shadow-2xl transition-shadow"
              >
                <div className={`bg-gradient-to-br ${category.color} p-4 rounded-2xl shadow-lg inline-flex mb-4`}>
                  <category.icon className="text-white" size={28} />
                </div>

                <h3 className="text-2xl font-bold text-gray-800 mb-4">{category.title}</h3>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-gradient-to-r from-pink-100 to-purple-100 text-gray-700 rounded-full text-sm font-medium border border-pink-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
