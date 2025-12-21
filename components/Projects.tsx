'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Flower2, Github, Palette, Server, Brain, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const projects = {
    frontend: [
      {
        title: 'GREENQUEST',
        subtitle: 'Gamified Rural Waste Management Solution',
        description: 'Interactive full-stack platform gamifying rural waste management through community engagement, rewards, and digital incentives with leaderboards, quizzes, and eco-themed challenges.',
        tech: ['React.js', 'Node.js', 'MongoDB', 'Express.js', 'Chart.js'],
        github: 'https://github.com/ashmisn/greenquest',
        demo: 'https://greenquest-demo.vercel.app', // Placeholder demo
        date: 'Feb 2025 - Apr 2025',
      },
    ],
    backend: [
      {
        title: 'Sahyog',
        subtitle: 'Disaster Resource Tracking System',
        description: 'Full-stack system for real-time disaster resource tracking and NGO coordination with dynamic dashboards, Socket.io for live updates, and structured data models.',
        tech: ['Node.js', 'Express.js', 'MySQL', 'Socket.io', 'React.js'],
        github: 'https://github.com/ashmisn/dbms-sahyog',
        demo: 'https://sahyog-demo.vercel.app', // Placeholder demo
        date: 'Sep 2024 - Present',
      },
    ],
    ai: [
      {
        title: 'REBOUND',
        subtitle: 'AI-Powered Exercise Monitoring',
        description: 'AI-driven fitness platform integrating computer vision and conversational intelligence for personalized exercise feedback with pose estimation, rep tracking, and OpenAI chatbot.',
        tech: ['Python', 'MediaPipe', 'TensorFlow', 'OpenAI API', 'Streamlit', 'PostgreSQL'],
        github: 'https://github.com/ashmisn/exercise-monitor',
        demo: 'https://rebound-demo.streamlit.app', // Placeholder demo
        date: 'Oct 2025 - Nov 2025',
      },
      {
        title: 'Sarathī',
        subtitle: 'Advanced RAG Pipeline Optimization',
        description: 'Intelligent RAG-based chatbot for civil engineering providing precise, clause-level answers from IRC standards with ChromaDB semantic retrieval and Llama 3.1 generation.',
        tech: ['Python', 'ChromaDB', 'Llama 3.1', 'Streamlit', 'RAG'],
        github: 'https://github.com/ashmisn/road',
        demo: 'https://sarathi-demo.streamlit.app', // Placeholder demo
        date: 'Aug 2025 - Oct 2025',
      },
      {
        title: 'Malayalam Cyberbullying Detection',
        subtitle: 'Deep Learning NLP Model',
        description: 'NLP-based model to automatically detect cyberbullying in Malayalam social media text using IndicBERT, achieving 95% accuracy on curated dataset.',
        tech: ['Python', 'BERT', 'TensorFlow', 'Streamlit'],
        github: 'https://github.com/ashmisn/malayalam-cyberbullying',
        demo: 'https://malayalam-cyber-demo.streamlit.app', // Placeholder demo
        date: 'May 2025 - Jul 2025',
      },
      {
        title: 'Malayalam Handwritten OCR',
        subtitle: 'Microsoft TrOCR Implementation',
        description: 'OCR system for handwritten Malayalam text using Microsoft TrOCR with custom syllable-level tokenizer, reducing CER from 59% to 10%.',
        tech: ['Python', 'Hugging Face', 'TrOCR', 'PyTorch'],
        github: '#',
        demo: '', // No demo
        date: 'May 2025 - Aug 2025',
      },
      {
        title: 'DARSHAN',
        subtitle: 'CNN Model for Infrastructure Classification',
        description: 'Deep learning model using U-Net++ for road and building segmentation from drone imagery with advanced augmentation techniques.',
        tech: ['TensorFlow', 'Keras', 'U-Net++', 'OpenCV'],
        github: 'https://github.com/ashmisn/darshan',
        demo: 'https://darshan-demo.streamlit.app', // Placeholder demo
        date: 'Aug 2024 - Present',
      },
      {
        title: 'AutoRAG',
        subtitle: 'Language-Driven Automation',
        description: 'FastAPI-based automation system integrating RAG and FAISS for semantic matching, mapping natural language commands to Python function execution.',
        tech: ['FastAPI', 'FAISS', 'Sentence-Transformers', 'Python'],
        github: 'https://github.com/ashmisn/autofunction',
        demo: 'https://autorag-api.herokuapp.com/docs', // Placeholder demo
        date: 'Jul 2024 - Sep 2024',
      },
    ],
  };

  const categoryIcons = {
    frontend: Palette,
    backend: Server,
    ai: Brain,
  };

  const categoryColors = {
    frontend: 'from-pink-400 to-rose-400',
    backend: 'from-green-400 to-emerald-400',
    ai: 'from-purple-400 to-indigo-400',
  };

  const renderProjectCard = (project: any, index: number, category: string) => {
    const Icon = categoryIcons[category as keyof typeof categoryIcons];
    const colorGradient = categoryColors[category as keyof typeof categoryColors];

    return (
      <motion.div
        key={index}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.5, delay: index * 0.1 }}
      >
        <Card className="h-full bg-card/70 backdrop-blur-sm border-2 border-border hover:border-pink-300 transition-all hover:shadow-2xl">
          <CardHeader>
            <div className="flex items-start justify-between mb-2">
              <div className={`bg-gradient-to-br ${colorGradient} p-3 rounded-xl shadow-lg`}>
                <Icon className="text-white" size={24} />
              </div>
              <div className="flex gap-2">
                {project.demo && project.demo !== '' && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-700 transition-colors"
                    title="View Demo"
                  >
                    <ExternalLink size={20} />
                  </a>
                )}
                {project.github !== '#' && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    title="View Code"
                  >
                    <Github size={20} />
                  </a>
                )}
              </div>
            </div>
            <CardTitle className="text-xl font-bold text-foreground">
              {project.title}
            </CardTitle>
            <CardDescription className="font-handwritten text-lg text-muted-foreground">
              {project.subtitle}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-3">
              {project.tech.map((tech: string) => (
                <Badge
                  key={tech}
                  variant="secondary"
                  className="bg-secondary text-secondary-foreground border border-border"
                >
                  {tech}
                </Badge>
              ))}
            </div>
            <div className="flex gap-2 mb-3">
              {project.demo && project.demo !== '' && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full text-sm font-medium hover:shadow-lg transition-all hover:-translate-y-0.5"
                >
                  <ExternalLink size={16} />
                  See Demo
                </a>
              )}
              {project.github !== '#' && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-medium hover:bg-secondary/80 transition-all"
                >
                  <Github size={16} />
                  View Code
                </a>
              )}
            </div>
            <p className="text-sm text-muted-foreground italic">{project.date}</p>
          </CardContent>
        </Card>
      </motion.div>
    );
  };

  return (
    <section id="projects" ref={ref} className="relative py-24 px-4">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-pink-300 to-transparent"></div>

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Flower2 className="text-pink-400" size={32} />
            <h2 className="text-5xl md:text-6xl font-handwritten text-foreground text-center">
              Project Garden
            </h2>
            <Flower2 className="text-purple-400" size={32} />
          </div>
          <p className="text-center text-muted-foreground font-handwritten text-xl mb-12">
            Watch my projects bloom
          </p>

          <Tabs defaultValue="ai" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-8">
              <TabsTrigger value="frontend" className="flex items-center gap-2">
                <Palette size={16} />
                Frontend
              </TabsTrigger>
              <TabsTrigger value="backend" className="flex items-center gap-2">
                <Server size={16} />
                Backend
              </TabsTrigger>
              <TabsTrigger value="ai" className="flex items-center gap-2">
                <Brain size={16} />
                AI & ML
              </TabsTrigger>
            </TabsList>

            <TabsContent value="frontend">
              <div className="grid md:grid-cols-2 gap-6">
                {projects.frontend.map((project, index) =>
                  renderProjectCard(project, index, 'frontend')
                )}
              </div>
            </TabsContent>

            <TabsContent value="backend">
              <div className="grid md:grid-cols-2 gap-6">
                {projects.backend.map((project, index) =>
                  renderProjectCard(project, index, 'backend')
                )}
              </div>
            </TabsContent>

            <TabsContent value="ai">
              <div className="grid md:grid-cols-2 gap-6">
                {projects.ai.map((project, index) =>
                  renderProjectCard(project, index, 'ai')
                )}
              </div>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </section>
  );
}
