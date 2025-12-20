'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Flower2, GraduationCap, Sparkles } from 'lucide-react';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" ref={ref} className="relative py-24 px-4">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-pink-300 to-transparent"></div>

      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center gap-3 mb-8">
            <Flower2 className="text-pink-400" size={32} />
            <h2 className="text-5xl md:text-6xl font-handwritten text-gray-800 text-center">
              About Me
            </h2>
            <Flower2 className="text-purple-400" size={32} />
          </div>

          <div className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-xl p-8 md:p-12 border-2 border-pink-100">
            <div className="flex items-start gap-4 mb-6">
              <GraduationCap className="text-pink-500 flex-shrink-0 mt-1" size={28} />
              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                  Indian Institute of Information Technology, Kottayam
                </h3>
                <p className="text-gray-600 italic mb-2">B.Tech in Computer Science | Aug 2023 - Present</p>
                <p className="text-gray-700 leading-relaxed">
                  <span className="font-semibold">Coursework:</span> Compiler Design, Theory of Computation, Computer Architecture,
                  Design and Analysis of Algorithms, Data Structures, Python, Java, PHP
                </p>
              </div>
            </div>

            <div className="h-px bg-gradient-to-r from-pink-200 via-purple-200 to-pink-200 my-8"></div>

            <div className="flex items-start gap-4">
              <Sparkles className="text-purple-500 flex-shrink-0 mt-1" size={28} />
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  I&apos;m a full-stack developer and AI engineer passionate about creating technology that&apos;s both
                  <span className="font-handwritten text-2xl text-pink-500"> powerful </span> and
                  <span className="font-handwritten text-2xl text-purple-500"> beautiful</span>.
                </p>

                <p>
                  My journey spans across three worlds: crafting delightful user interfaces on the frontend,
                  building robust and scalable systems on the backend, and pushing the boundaries of artificial
                  intelligence through research and experimentation.
                </p>

                <p>
                  Recently, I&apos;ve been deep into transformer-based models, working on Malayalam OCR systems that
                  bridge technology with regional language processing. My work was presented at SPELL 2025, IIIT
                  Kottayam, where I shared insights on custom tokenization approaches for handwritten text recognition.
                </p>

                <p>
                  Beyond code, I believe in technology that serves humanity — whether it&apos;s gamifying waste
                  management to help rural communities, detecting cyberbullying in Malayalam text, or building
                  intelligent chatbots that make technical documentation accessible.
                </p>

                <p className="font-handwritten text-xl text-gray-600 italic mt-6">
                  &quot;Every line of code is an opportunity to make someone&apos;s day a little brighter.&quot;
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
