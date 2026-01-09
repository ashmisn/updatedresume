'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Flower2, Github, Linkedin, Mail, MessageCircle, Send, Heart } from 'lucide-react';

export default function Connect() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/ashmisn',
      color: 'hover:text-gray-900',
      bgColor: 'hover:bg-gray-100'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://www.linkedin.com/in/ashmi-s-n-67581a315/',
      color: 'hover:text-blue-600',
      bgColor: 'hover:bg-blue-50'
    },
    {
      name: 'Email',
      icon: Mail,
      url: 'mailto:ashmi.sn2004@gmail.com',
      color: 'hover:text-red-500',
      bgColor: 'hover:bg-red-50'
    }
  ];

  return (
    <section id="connect" ref={ref} className="relative py-16 sm:py-20 md:py-24 px-4">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-300 to-transparent"></div>

      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Flower2 className="text-purple-400" size={32} />
            <h2 className="text-5xl md:text-6xl font-handwritten text-gray-800">
              Connect with Me
            </h2>
            <Flower2 className="text-pink-400" size={32} />
          </div>
          <p className="text-center text-gray-600 font-handwritten text-xl mb-12">
            Let's build something amazing together
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-12">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`group flex flex-col items-center p-6 md:p-8 bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg border-2 border-pink-100 hover:border-pink-300 transition-all hover:shadow-2xl hover:-translate-y-2 ${social.bgColor}`}
                >
                  <Icon size={48} className={`mb-4 text-gray-600 ${social.color} transition-colors`} />
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{social.name}</h3>
                  <p className="text-gray-600 text-sm">
                    {social.name === 'Email' ? 'Drop me a message' :
                     social.name === 'GitHub' ? 'Check my code' :
                     'Connect professionally'}
                  </p>
                </motion.a>
              );
            })}
          </div>

            <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-3xl p-6 md:p-8 border-2 border-pink-200"
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <Heart className="text-pink-500" size={24} />
              <h3 className="text-2xl font-handwritten text-gray-800">Let's Collaborate!</h3>
              <Heart className="text-purple-500" size={24} />
            </div>
            <p className="text-gray-700 mb-6 leading-relaxed">
              I'm always excited to work on innovative projects, whether it's building AI solutions,
              creating beautiful web experiences, or exploring new technologies. Feel free to reach out
              for collaborations, opportunities, or just to say hello!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="mailto:ashmi.sn2004@gmail.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-6 py-3 sm:px-8 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full font-medium hover:shadow-lg transition-all"
              >
                <Send size={18} />
                Send Message
              </motion.a>
              <motion.a
                href="#hero"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-6 py-3 sm:px-8 bg-white text-gray-700 rounded-full font-medium hover:shadow-lg transition-all border-2 border-gray-200 hover:border-gray-300"
              >
                <MessageCircle size={18} />
                Start Conversation
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}