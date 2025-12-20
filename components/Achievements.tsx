'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Flower2, Trophy, Users, Award } from 'lucide-react';

export default function Achievements() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const achievements = [
    {
      title: 'IBM Student Maitrayee Program',
      description: 'Shortlisted from pool of candidates for attending Annual outreach program Online at Bangalore.',
      icon: Award,
    },
    {
      title: 'Smart India Hackathon',
      description: 'Qualified internals in 2023 with disaster management solution and in 2024 with CNN-based Mask R-CNN for building classification.',
      icon: Trophy,
    },
    {
      title: 'Gen AI 60-Day Challenge',
      description: 'Successfully completed the challenge with hands-on experience in building AI solutions. Received winning swags from Google for outstanding participation.',
      icon: Award,
    },
  ];

  const extracurricular = [
    {
      role: 'Lead',
      organization: 'Mind Quest Mental Wellness Club',
      institution: 'IITK',
      activities: [
        'Coordinated outreach programs promoting mental wellness, focusing on stress management and resilience during academic exams.',
        'Organized workshops and sessions in collaboration with local schools and mental health professionals.',
        'Raised awareness and provided support for mental well-being through structured events and initiatives.',
      ],
    },
    {
      role: 'Ex-Robotics Sub-Lead',
      organization: 'Beta Labs',
      institution: 'IITK',
      activities: [
        'Organized and executed technical events to introduce first-year students to robotics.',
        'Led the development of a line-following robot with speed control, overseeing both simulation and real-time implementation.',
        'Facilitated teamwork and hands-on learning through technical treasure hunts and practical projects.',
      ],
    },
  ];

  return (
    <section id="achievements" ref={ref} className="relative py-24 px-4">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-pink-300 to-transparent"></div>

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center gap-3 mb-12">
            <Flower2 className="text-pink-400" size={32} />
            <h2 className="text-5xl md:text-6xl font-handwritten text-gray-800 text-center">
              Achievements & Activities
            </h2>
            <Flower2 className="text-purple-400" size={32} />
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-xl p-6 border-2 border-pink-100 hover:shadow-2xl transition-shadow"
              >
                <div className="bg-gradient-to-br from-yellow-400 to-orange-400 p-4 rounded-2xl shadow-lg inline-flex mb-4">
                  <achievement.icon className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {achievement.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {achievement.description}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="space-y-6">
            {extracurricular.map((activity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-xl p-8 border-2 border-purple-100"
              >
                <div className="flex items-start gap-6">
                  <div className="bg-gradient-to-br from-purple-400 to-pink-400 p-4 rounded-2xl shadow-lg flex-shrink-0">
                    <Users className="text-white" size={28} />
                  </div>

                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-1">
                          {activity.role}
                        </h3>
                        <p className="text-lg text-gray-600 font-medium">
                          {activity.organization} • {activity.institution}
                        </p>
                      </div>
                    </div>

                    <ul className="space-y-2 text-gray-700">
                      {activity.activities.map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="text-pink-400 text-xl flex-shrink-0">🌸</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
