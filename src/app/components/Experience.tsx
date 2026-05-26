import { motion } from "motion/react";
import { Calendar, MapPin, Award } from "lucide-react";

const experiences = [
  {
    title: "Independent Software Engineer",
    company: "Self-Employed",
    location: "Remote",
    period: "Jul 2025 – Present",
    highlights: [
      "Launched AgentVim (agentvim.com): an AI-powered coding interview simulator with real-time LLM feedback, multi-language in-browser editor, and persistent interview history. Built on Supabase Edge Functions with streaming LLM responses.",
      "Shipped Tenfold (tenfoldcards.com): a narrative roguelike web game built on TanStack Start (React 19, Vite 7) with SSR on Cloudflare Workers. Tuned game balance via automated Monte Carlo simulations over thousands of synthetic playthroughs.",
      "Exploring an AI-powered investment screener with market sentiment analysis using LLM agents."
    ],
    techStack: "React, TanStack Start, TypeScript, Supabase, Cloudflare Workers, LLM APIs"
  },
  {
    title: "Software Engineer, L60 → L62",
    company: "Microsoft",
    location: "Seattle, WA",
    period: "Jul 2019 – Jun 2025",
    highlights: [
      "Delivered a web app to onboard 10,000+ data center configurations onto Azure engineering systems — eliminating 1,000+ hours of manual Supply Chain cycle time and ensuring downstream systems always reflect the latest parts.",
      "Built a data center parts search tool that saved ~$500K annually and won the CSCP Stellar Quest Award: designed an Angular 16 UI with real-time filtering and millisecond latencies via Azure AI Search; created a Chat Agent using Azure OpenAI APIs for natural language queries.",
      "Designed an API Service handling 2,000+ hardware part qualification requests — cutting days off each cycle time via poll-based schedulers; shipped with 85%+ integration test coverage.",
      "Built an API Dashboard for a service processing 1M+ calls/day, enabling proactive issue detection before Sev incidents.",
      "Created a Rack Deployment timeline visualizer, enabling stakeholders to pinpoint and annotate delays.",
      "Won Honorable Mention at Microsoft's 2024 Global Hackathon for a Part Tracker App that maps parts across all deployed data centers.",
      "Reviewed 10,000+ lines of code; set up CI/CD via YAML pipelines; patched 15+ security issues under Microsoft's Secure Future Initiative.",
      "Mentored new hires and vendors; provided on-call support resolving 100+ live site issues within Azure SLAs."
    ],
    techStack: "C#, TypeScript, Angular, Kubernetes, MySQL, YAML, Azure Service Bus, Redis, Azure OpenAI APIs",
    award: "CSCP Stellar Quest Award & 2024 Global Hackathon Honorable Mention"
  },
  {
    title: "Software Developer",
    company: "PNI Digital Media",
    location: "Vancouver, BC",
    period: "Aug 2016 – Jun 2019",
    highlights: [
      "Architected a multithreaded desktop app that fulfilled DVD photo orders across all Costco US Photo Labs — delivering ~8x speed improvement via multithreading and cutting data egress by 50%+ with server-side caching.",
      "Implemented features and resolved high-impact bugs for Costco and Staples MVC e-commerce sites serving 1M+ users/day; optimized data structures to shave ~1 second off high-traffic pages.",
      "Built a load testing framework to simulate holiday traffic spikes, improving resilience before peak seasons.",
      "Identified and patched OWASP Top 10 vulnerabilities across production systems, preventing potential security breaches."
    ],
    techStack: "C#, Angular, JavaScript, Redis, ElasticSearch, MySQL, Azure"
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-12 px-6 sm:px-8 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center"
        >
          <h2 className="text-2xl sm:text-3xl mb-2 text-slate-900">Work Experience</h2>
          <p className="text-base text-slate-600">Building impactful solutions across the tech industry</p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative pl-6 border-l-4 border-slate-300 hover:border-slate-600 transition-colors duration-300"
            >
              <div className="absolute w-3 h-3 bg-slate-600 rounded-full -left-[8px] top-2" />
              
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3 gap-3">
                  <div>
                    <h3 className="text-lg text-slate-900 mb-1">{exp.title}</h3>
                    <p className="text-base text-slate-700">{exp.company}</p>
                  </div>
                  <div className="flex flex-col gap-1 sm:text-right">
                    <div className="flex items-center gap-2 text-slate-600 text-sm">
                      <Calendar className="w-3 h-3" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-600 text-sm">
                      <MapPin className="w-3 h-3" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                {exp.award && (
                  <div className="flex items-center gap-2 mb-3 text-amber-600 bg-amber-50 px-3 py-1.5 rounded-lg inline-flex">
                    <Award className="w-4 h-4" />
                    <span className="text-xs">{exp.award}</span>
                  </div>
                )}

                <ul className="space-y-2 mb-4">
                  {exp.highlights.map((highlight, hIndex) => (
                    <li key={hIndex} className="flex gap-2 text-sm text-slate-700">
                      <span className="text-slate-400 mt-0.5">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-3 border-t border-slate-200">
                  <p className="text-xs text-slate-500">
                    <span className="text-slate-700">Tech Stack:</span> {exp.techStack}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 text-center bg-white rounded-xl shadow-lg p-6"
        >
          <h3 className="text-lg text-slate-900 mb-2">Education</h3>
          <p className="text-base text-slate-700">University of British Columbia</p>
          <p className="text-sm text-slate-600">B.ASC. in Computer Engineering</p>
          <p className="text-sm text-slate-500 mt-1">Vancouver, BC • Graduated May 2015</p>
        </motion.div>
      </div>
    </section>
  );
}