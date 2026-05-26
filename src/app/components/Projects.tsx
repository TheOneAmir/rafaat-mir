import { motion } from "motion/react";
import { ExternalLink, Github, TrendingUp, Headphones, Gamepad2, Bot, Layers } from "lucide-react";

const projects = [
  {
    title: "AgentVim",
    type: "Independent Project",
    period: "Jul 2025 – Present",
    description: "An AI-powered coding interview simulator with real-time LLM feedback, multi-language in-browser editor, and persistent interview history.",
    highlights: [
      "Real-time LLM feedback during coding sessions",
      "Multi-language in-browser code editor",
      "Persistent interview history via Supabase Edge Functions with streaming LLM responses"
    ],
    icon: Bot,
    technologies: ["React", "TypeScript", "Supabase", "LLM APIs", "Streaming"],
    status: "Active",
    link: "https://agentvim.com"
  },
  {
    title: "Tenfold",
    type: "Independent Project",
    period: "Jul 2025 – Present",
    description: "A narrative roguelike web game built on TanStack Start (React 19, Vite 7) with SSR on Cloudflare Workers.",
    highlights: [
      "Full-stack game with SSR on Cloudflare Workers",
      "Tuned game balance via automated Monte Carlo simulations over thousands of synthetic playthroughs",
      "Built with TanStack Start (React 19, Vite 7)"
    ],
    icon: Layers,
    technologies: ["TanStack Start", "React 19", "Cloudflare Workers", "TypeScript", "Vite 7"],
    status: "Active",
    link: "https://tenfoldcards.com"
  },
  {
    title: "Investigate",
    type: "Personal Project",
    period: "Jun 2025 – Present",
    description: "An AI-powered investment screener with market sentiment analysis using LLM agents.",
    highlights: [
      "Researching market trends and assessing sentiment with LLM agents",
      "Outperforming S&P 500 over managed accounts",
      "Placed top 50 in Kraken Turkey Trading 2025"
    ],
    icon: TrendingUp,
    technologies: ["AI", "Python", "LLM Agents", "Market Analysis", "Quant"],
    status: "Active"
  },
  {
    title: "Telus VR KPI Visualization",
    type: "Capstone Project",
    period: "2015",
    description: "Created a Three.js-based web app enabling network engineers to visualize Network KPIs using VR.",
    highlights: [
      "Built immersive VR experience for data visualization",
      "Enabled network engineers to interact with complex KPI data in 3D space",
      "Collaborated with Telus to deliver a real-world solution"
    ],
    icon: Headphones,
    technologies: ["Three.js", "VR", "JavaScript", "Data Visualization"],
    status: "Completed"
  },
  {
    title: "Wordrow",
    type: "Personal Project",
    period: "2015–2016",
    description: "Designed and developed a Unity MVC word game with 100+ Google Play downloads.",
    highlights: [
      "Implemented MVC architecture pattern in Unity",
      "Published on Google Play Store",
      "Achieved 100+ downloads from organic traffic"
    ],
    icon: Gamepad2,
    technologies: ["Unity", "C#", "MVC", "Mobile Development"],
    status: "Published",
    link: "https://play.google.com"
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-12 px-6 sm:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center"
        >
          <h2 className="text-2xl sm:text-3xl mb-2 text-slate-900">Featured Projects</h2>
          <p className="text-base text-slate-600">Personal initiatives and collaborative ventures</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-50 rounded-xl overflow-hidden border border-slate-200 hover:border-slate-400 hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-start justify-between mb-3">
                    <div className="p-2 bg-slate-900 rounded-lg">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    {project.status === "Active" && (
                      <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">
                        Active
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg text-slate-900 mb-1">{project.title}</h3>
                  <p className="text-xs text-slate-500 mb-2">{project.type} • {project.period}</p>
                  <p className="text-sm text-slate-700 mb-3 flex-1">{project.description}</p>

                  <ul className="space-y-1.5 mb-4">
                    {project.highlights.map((highlight, hIndex) => (
                      <li key={hIndex} className="flex gap-2 text-xs text-slate-600">
                        <span className="text-slate-400">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {project.technologies.map((tech, tIndex) => (
                      <span
                        key={tIndex}
                        className="px-2 py-1 bg-white text-slate-700 text-xs rounded-full border border-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {project.link && (
                    <div className="flex gap-3 mt-auto">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-slate-700 hover:text-slate-900 transition-colors"
                      >
                        <ExternalLink className="w-3 h-3" />
                        <span className="text-xs">View Project</span>
                      </a>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}