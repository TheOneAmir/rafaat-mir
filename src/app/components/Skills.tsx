import { motion } from "motion/react";

const skillCategories = [
  {
    category: "Languages",
    skills: ["C#", "Java", "Python", "JavaScript", "TypeScript", "SQL (MySQL)"]
  },
  {
    category: "Frameworks & Libraries",
    skills: ["React", "Angular", "TanStack Start", ".NET / ASP.NET", "YAML Pipelines"]
  },
  {
    category: "Cloud & Infrastructure",
    skills: ["Azure", "Supabase", "Cloudflare Workers", "Kubernetes", "Redis", "ElasticSearch"]
  },
  {
    category: "AI & LLMs",
    skills: ["Prompt Engineering", "Azure OpenAI", "Claude", "Gemini", "Streaming LLM", "AI Agents"]
  },
  {
    category: "Tools & Practices",
    skills: ["Git", "CI/CD", "UI/UX Design", "REST APIs", "Agile/Scrum", "Security (OWASP)"]
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-12 px-6 sm:px-8 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center"
        >
          <h2 className="text-2xl sm:text-3xl mb-2 text-slate-900">Technical Skills</h2>
          <p className="text-base text-slate-600">A comprehensive toolkit for modern software development</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-base text-slate-900 mb-4 border-b-2 border-slate-900 pb-2">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skillIndex}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 + skillIndex * 0.05 }}
                    className="px-3 py-1.5 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-900 hover:text-white transition-colors duration-300 cursor-default text-sm"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-10 bg-gradient-to-r from-slate-900 to-slate-700 rounded-xl shadow-xl p-6 md:p-8 text-center text-white"
        >
          <h3 className="text-xl mb-3">Key Achievements</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            <div>
              <p className="text-2xl mb-1">10,000+</p>
              <p className="text-slate-300 text-sm">Lines of Code Reviewed</p>
            </div>
            <div>
              <p className="text-2xl mb-1">$500K+</p>
              <p className="text-slate-300 text-sm">Annual Cost Savings</p>
            </div>
            <div>
              <p className="text-2xl mb-1">100+</p>
              <p className="text-slate-300 text-sm">Issues Resolved</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}