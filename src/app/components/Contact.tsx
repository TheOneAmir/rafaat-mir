import { motion } from "motion/react";
import { Mail, Linkedin, Github, MapPin } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-12 px-6 sm:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="text-2xl sm:text-3xl mb-2 text-slate-900">Let's Connect</h2>
          <p className="text-base text-slate-600">
            Always interested in new opportunities and collaborations
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-slate-50 rounded-xl shadow-lg p-6 md:p-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-slate-900 rounded-lg">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-xs text-slate-500">Email</p>
                  <a
                    href="mailto:mir.rafaat@gmail.com"
                    className="text-sm text-slate-900 hover:text-slate-600 transition-colors"
                  >
                    mir.rafaat@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2 bg-slate-900 rounded-lg">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-xs text-slate-500">Location</p>
                  <p className="text-sm text-slate-900">Seattle, WA / Vancouver, BC</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-slate-900 rounded-lg">
                  <Linkedin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-xs text-slate-500">LinkedIn</p>
                  <a
                    href="https://www.linkedin.com/in/rafaat-mir-174ba282/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-slate-900 hover:text-slate-600 transition-colors"
                  >
                    linkedin.com/in/rafaat-mir
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2 bg-slate-900 rounded-lg">
                  <Github className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-xs text-slate-500">GitHub</p>
                  <a
                    href="https://github.com/TheOneAmir"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-slate-900 hover:text-slate-600 transition-colors"
                  >
                    github.com/TheOneAmir
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-300 text-center">
            <a
              href="mailto:mir.rafaat@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-lg hover:bg-slate-700 transition-colors duration-300 text-sm"
            >
              <Mail className="w-4 h-4" />
              Get In Touch
            </a>
          </div>
        </motion.div>

        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 text-center text-slate-500 text-sm"
        >
          <p>© {new Date().getFullYear()} - Built with React & Tailwind CSS</p>
        </motion.footer>
      </div>
    </section>
  );
}