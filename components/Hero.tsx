'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Flower2, Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { useEffect, useState } from 'react';

const roles = ['Full-Stack Developer', 'AI Engineer', 'Researcher'];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-6 py-12 sm:py-16 md:py-20 cherry-blossom-bg"
    >
      <Flower2 className="absolute top-10 left-10 text-pink-300 opacity-20" size={80} />
      <Flower2 className="absolute bottom-20 right-10 text-purple-300 opacity-20" size={100} />

      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">

        {/* IMAGE — BIG + ZOOM */}
        <motion.div
          whileHover={{ scale: 1.15 }}
          transition={{ type: 'spring', stiffness: 120, damping: 12 }}
          className="mx-auto md:mx-0"
        >
          <div className="w-48 h-48 sm:w-[320px] sm:h-[320px] md:w-[420px] md:h-[420px] 
                          rounded-3xl overflow-hidden 
                          shadow-[0_30px_80px_rgba(0,0,0,0.25)]
                          border-8 border-white">
            <img
              src="/profile.jpg"
              alt="Ashmi S N"
              className="w-full h-full object-cover transition-transform duration-700"
            />
          </div>
        </motion.div>

        {/* CONTENT */}
        <div className="text-center md:text-left">

          <motion.h1
            className="text-4xl sm:text-6xl md:text-7xl font-handwritten text-foreground mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Hi, I&apos;m <span className="text-pink-500">Ashmi</span>
          </motion.h1>

          {/* BLOOMING ROLE */}
          <div className="h-16 mb-8 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={roles[index]}
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.4 }}
                transition={{ duration: 0.8, ease: 'easeInOut' }}
                className="text-2xl md:text-4xl font-light text-muted-foreground"
              >
                {roles[index]}
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="space-y-3 text-lg sm:text-xl text-muted-foreground mb-10 font-handwritten">
            <p>I build beautiful interfaces 🌼</p>
            <p>I engineer scalable backends 🌿</p>
            <p>I train intelligent AI systems 🤖</p>
          </div>

          <div className="flex flex-wrap gap-4 items-center text-muted-foreground mb-8 justify-center md:justify-start">
            <div className="flex items-center gap-2">
              <MapPin size={18} /> Trivandrum
            </div>
            <div className="flex items-center gap-2">
              <Mail size={18} />
              <a
                href="mailto:ashmi.sn2004@gmail.com"
                className="hover:text-pink-500"
              >
                ashmi.sn2004@gmail.com
              </a>
            </div>
            {/* <div className="flex items-center gap-2">
              <Phone size={18} /> +91 79074 02324
            </div> */}
          </div>

          <div className="flex flex-wrap gap-4">
            <a
              href="https://github.com/ashmisn"
              target="_blank"
              className="px-4 py-2 sm:px-6 sm:py-3 bg-background rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all flex items-center gap-2 border"
            >
              <Github size={20} /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/ashmi-s-n-67581a315/"
              target="_blank"
              className="px-4 py-2 sm:px-6 sm:py-3 bg-background rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all flex items-center gap-2 border"
            >
              <Linkedin size={20} /> LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}


// 'use client';

// import { motion } from 'framer-motion';
// import { Flower2, Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

// export default function Hero() {
//   const subtexts = [
//     "I build beautiful interfaces 🌼",
//     "I engineer scalable backends 🌿",
//     "I train intelligent AI systems 🤖"
//   ];

//   return (
//     <section
//       id="hero"
//       className="relative min-h-screen flex items-center justify-center px-6 py-20 cherry-blossom-bg"
//     >
//       {/* Decorative flowers */}
//       <div className="absolute top-10 left-10 opacity-20">
//         <Flower2 size={90} className="text-pink-300" />
//       </div>
//       <div className="absolute bottom-20 right-10 opacity-20">
//         <Flower2 size={120} className="text-purple-300" />
//       </div>

//       <motion.div
//         initial={{ opacity: 0, y: 40 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1 }}
//         className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
//       >
//         {/* LEFT — Profile Image */}
//         <motion.div
//           className="flex justify-center md:justify-end"
//           whileHover={{ scale: 1.08 }}
//           transition={{ type: 'spring', stiffness: 200 }}
//         >
//           <div className="relative w-80 h-80 md:w-[420px] md:h-[420px] overflow-hidden rounded-3xl shadow-2xl border-8 border-white">
//             <img
//               src="/profile.jpg"
//               alt="Ashmi S N"
//               className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
//             />

//             {/* Rotating flower */}
//             <motion.div
//               className="absolute -top-6 -right-6"
//               animate={{ rotate: 360 }}
//               transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
//             >
//               <Flower2 size={50} className="text-pink-400" />
//             </motion.div>
//           </div>
//         </motion.div>

//         {/* RIGHT — Content */}
//         <div className="text-center md:text-left">
//           <motion.h1
//             className="text-6xl md:text-7xl font-handwritten text-gray-800 mb-6 text-shadow-soft"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.3 }}
//           >
//             Hi, I&apos;m Ashmi 
//           </motion.h1>

//           <motion.p
//             className="text-2xl md:text-3xl text-gray-600 font-light mb-8"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.5 }}
//           >
//             Full-Stack Developer & AI Engineer
//           </motion.p>

//           <div className="space-y-4 mb-10">
//             {subtexts.map((text, index) => (
//               <motion.div
//                 key={index}
//                 className="text-xl md:text-2xl font-handwritten text-gray-700"
//                 initial={{ opacity: 0, x: -40 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ delay: 0.8 + index * 0.2 }}
//               >
//                 {text}
//               </motion.div>
//             ))}
//           </div>

//           {/* Contact Info */}
//           <motion.div
//             className="flex flex-wrap gap-4 items-center text-gray-600 mb-10"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 1.4 }}
//           >
//             <div className="flex items-center gap-2">
//               <MapPin size={18} />
//               <span>Trivandrum</span>
//             </div>
//             <span className="text-gray-300">•</span>
//             <div className="flex items-center gap-2">
//               <Mail size={18} />
//               <a
//                 href="mailto:ashmi.sn2004@gmail.com"
//                 className="hover:text-pink-500 transition-colors"
//               >
//                 ashmi.sn2004@gmail.com
//               </a>
//             </div>
//             <span className="text-gray-300">•</span>
//             <div className="flex items-center gap-2">
//               <Phone size={18} />
//               <span>+91 79074 02324</span>
//             </div>
//           </motion.div>

//           {/* Social Links */}
//           <motion.div
//             className="flex gap-6"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 1.6 }}
//           >
//             <a
//               href="https://github.com/ashmisn"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="flex items-center gap-2 px-6 py-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
//             >
//               <Github size={20} />
//               <span>GitHub</span>
//             </a>
//             <a
//               href="https://www.linkedin.com/in/ashmi-s-n-67581a315/"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="flex items-center gap-2 px-6 py-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
//             >
//               <Linkedin size={20} />
//               <span>LinkedIn</span>
//             </a>
//           </motion.div>
//         </div>
//       </motion.div>
//     </section>
//   );
// }
