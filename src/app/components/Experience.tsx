import { motion } from "motion/react";
import { Calendar, MapPin, Award } from "lucide-react";

const experiences = [
  {
    title: "Software Engineer",
    company: "Microsoft",
    location: "Seattle, WA",
    period: "Jul 2019 - Jun 2025",
    highlights: [
      "Engineered full-stack solutions to help scale Azure Cloud Supply Chain (supporting Azure's average ~37% YoY growth).",
      "Created a web app which was used to onboard 10000+ Data Center configurations and save 1000+ hours in Supply Chain cycle times.",
      "Collaborated on the system design and implementation of a Data Search App which saves $0.5m+ annually (and won \"CSCP Stellar Quest Award\").",
      "Preprocessed and indexed data using Azure AI Search to minimize search latencies to milliseconds.",
      "Created a Chat Agent with prompt engineering to enable natural language searches using Azure OpenAI APIs.",
      "Designed and created an API Service used to request 2000+ Hardware part qualifications.",
      "Created an API Dashboard for a service with million+ API calls/day - helping detect issues preemptively.",
      "Created the UI for a Datacenter Tracker App, which received Honorable Mention in Microsoft's 2024 Global Hackathon."
    ],
    techStack: "C#, Typescript, AngularJS, Kubernetes, MySQL, YAML, Azure OpenAI APIs",
    award: "CSCP Stellar Quest Award & 2024 Global Hackathon Honorable Mention"
  },
  {
    title: "Software Developer",
    company: "PNI Digital Media",
    location: "Vancouver, BC",
    period: "Aug 2016 - Jun 2019",
    highlights: [
      "Architected and developed a multithreaded Desktop app used to fulfill DVD orders at Costco US Photo Labs.",
      "Designed and developed core components, using multithreading to improve speed by ~8x.",
      "Introduced server-side caching to reduce data egress by 50%+.",
      "Led sprint planning meetings and assisted with planning a roadmap for the Software Dev Lifecycle.",
      "Developed scalable features for Costco and Staples MVC sites with million+ users/day.",
      "Extended server-side caching and optimized data structures to save around a second on pages with 1000+ users/day.",
      "Identified and patched OWASP Top 10 security issues preventing security breaches."
    ],
    techStack: "C#, .NET, MVC, Caching, Multithreading"
  },
  {
    title: "Software Engineer",
    company: "MDA",
    location: "Richmond, BC",
    period: "Jun 2015 - Jan 2016",
    highlights: [
      "Implemented \"editing\" capabilities on a Perl Web App used to generate airplane flight charts."
    ],
    techStack: "Perl, Web Development"
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