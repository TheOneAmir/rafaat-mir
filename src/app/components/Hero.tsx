import { motion } from "motion/react";
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback 
          src="https://images.unsplash.com/photo-1597239450996-ea7c2c564412?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGVuZ2luZWVyJTIwY29kaW5nJTIwd29ya3NwYWNlfGVufDF8fHx8MTc3MjA2Mjc5MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Workspace"
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-slate-800/90 to-slate-900/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-3xl sm:text-4xl md:text-5xl mb-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Rafaat Mir
          </motion.h1>
          
          <motion.p 
            className="text-lg sm:text-xl text-slate-300 mb-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Software Engineer
          </motion.p>
          
          <motion.p 
            className="text-base sm:text-lg text-slate-300 mb-6 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Building scalable solutions and crafting exceptional user experiences.
            <br />
            Previously at Microsoft Azure, specializing in full-stack development and AI.
          </motion.p>

          <motion.div 
            className="flex gap-4 justify-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <a
              href="https://github.com/TheOneAmir"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-white text-slate-900 rounded-lg hover:bg-slate-100 transition-colors duration-300 text-sm"
            >
              <Github className="w-4 h-4" />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/rafaat-mir-174ba282/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 border-2 border-white text-white rounded-lg hover:bg-white hover:text-slate-900 transition-colors duration-300 text-sm"
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>
            <a
              href="mailto:mir.rafaat@gmail.com"
              className="flex items-center gap-2 px-4 py-2 border-2 border-white text-white rounded-lg hover:bg-white hover:text-slate-900 transition-colors duration-300 text-sm"
            >
              <Mail className="w-4 h-4" />
              Contact
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex justify-center"
          >
            <button
              onClick={() => scrollToSection("experience")}
              className="animate-bounce"
              aria-label="Scroll to experience section"
            >
              <ChevronDown className="w-8 h-8 text-slate-300" />
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}