"use client";

import { motion } from "framer-motion";
import {
  LucideTerminal,
  LucideCode,
  LucideCpu,
  LucideMail,
  LucideGithub,
  LucideLinkedin,
} from "lucide-react";

// Section Helper
const Section = ({
  children,
  align = "left",
  id,
}: {
  children: React.ReactNode;
  align?: "left" | "right" | "center";
  id?: string;
}) => {
  const alignClass = {
    left: "items-start text-left",
    right: "items-end text-right",
    center: "items-center text-center",
  }[align];

  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`h-screen w-screen p-8 md:p-20 flex flex-col justify-center ${alignClass} pointer-events-none`}
    >
      <div className="pointer-events-auto">{children}</div>
    </motion.section>
  );
};

export default function Overlay() {
  return (
    <div className="w-full text-white">
      {/* Hero Section */}
      <Section align="left">
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter bg-clip-text text-transparent bg-linear-to-r from-accent-cyan via-white to-accent-purple drop-shadow-[0_0_30px_rgba(0,243,255,0.3)]">
          ARCHIT
          <br />
          NOVA
        </h1>
        <p className="mt-6 text-xl md:text-2xl font-light tracking-wide text-gray-300 glass px-6 py-3 rounded-full border border-white/10 backdrop-blur-md">
          Creative Full-Stack Developer
        </p>
        <div className="mt-12 flex space-x-4">
          <button className="px-8 py-3 bg-accent-cyan/10 border border-accent-cyan/50 text-accent-cyan rounded-full hover:bg-accent-cyan/20 transition-all font-mono">
            View Projects
          </button>
          <button className="px-8 py-3 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition-all font-mono">
            Contact Me
          </button>
        </div>
      </Section>

      {/* About Me */}
      <Section align="right">
        <div className="glass p-10 rounded-3xl border-l-4 border-accent-purple max-w-2xl bg-black/40 backdrop-blur-xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-accent-purple flex items-center justify-end gap-4">
            About Me <LucideCpu className="w-10 h-10" />
          </h2>
          <p className="text-lg leading-relaxed text-gray-200">
            I'm a developer who views code as a medium for art. Specializing in
            modern web technologies, I build "Cyber-Laboratory" interfaces that
            merge high-performance functionality with immersive 3D aesthetics.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 justify-end">
            {["React", "Next.js", "Three.js", "Node.js", "PostgreSQL"].map(
              (tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-sm bg-accent-purple/20 border border-accent-purple/50 rounded-md"
                >
                  {tech}
                </span>
              )
            )}
          </div>
        </div>
      </Section>

      {/* Experience */}
      <Section align="left">
        <div className="space-y-12 pl-4 border-l-2 border-white/10">
          {[
            {
              role: "Senior Developer",
              company: "Tech Corp",
              year: "2023-Present",
            },
            {
              role: "Full Stack Engineer",
              company: "StartUp Inc",
              year: "2021-2023",
            },
            { role: "Freelance", company: "Global", year: "2019-2021" },
          ].map((job, i) => (
            <div key={i} className="relative pl-8">
              <span className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-accent-cyan shadow-[0_0_10px_var(--color-accent-cyan)]" />
              <h3 className="text-3xl font-bold">{job.role}</h3>
              <p className="text-xl text-accent-cyan">{job.company}</p>
              <p className="text-sm opacity-50 font-mono mt-1">{job.year}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Projects */}
      <Section align="center">
        <h2 className="text-5xl font-bold mb-12 text-center bg-clip-text text-transparent bg-linear-to-b from-white to-gray-500">
          Selected Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
          {/* Project Cards would be 3D mainly, but here are some DOM labels/descriptions if needed, 
                or we leave this empty for the 3D scene to populate interactions */}
          <div className="glass p-6 rounded-xl hover:border-accent-cyan/50 transition-colors cursor-pointer group text-left">
            <h3 className="text-2xl font-bold group-hover:text-accent-cyan transition-colors">
              Project Alpha
            </h3>
            <p className="text-sm mt-2 opacity-70">
              A next-gen e-commerce platform with 3D product previews.
            </p>
          </div>
          <div className="glass p-6 rounded-xl hover:border-accent-purple/50 transition-colors cursor-pointer group text-left">
            <h3 className="text-2xl font-bold group-hover:text-accent-purple transition-colors">
              Cyber Dashboard
            </h3>
            <p className="text-sm mt-2 opacity-70">
              Real-time analytics visualization using WebGL.
            </p>
          </div>
        </div>
      </Section>

      {/* Contact */}
      <Section align="center">
        <div className="glass p-12 rounded-3xl max-w-xl w-full text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-accent-cyan to-accent-purple" />
          <h2 className="text-4xl font-bold mb-6 flex items-center justify-center gap-3">
            <LucideMail /> Get In Touch
          </h2>
          <p className="mb-8 opacity-80">
            Ready to build the impossible? Send a signal.
          </p>

          <form className="space-y-4 text-left">
            <div>
              <label className="block text-sm font-mono opacity-70 mb-1">
                Identity
              </label>
              <input
                type="text"
                className="w-full bg-white/5 border border-white/10 rounded-lg p-3 focus:outline-none focus:border-accent-cyan transition-colors"
                placeholder="Name"
              />
            </div>
            <div>
              <label className="block text-sm font-mono opacity-70 mb-1">
                Transmission
              </label>
              <textarea
                className="w-full bg-white/5 border border-white/10 rounded-lg p-3 h-32 focus:outline-none focus:border-accent-purple transition-colors"
                placeholder="Message"
              ></textarea>
            </div>
            <button className="w-full py-4 bg-linear-to-r from-accent-cyan to-accent-purple rounded-lg font-bold text-black uppercase tracking-widest hover:opacity-90 transition-opacity">
              Send Transmission
            </button>
          </form>

          <div className="mt-8 flex justify-center gap-6 opacity-50">
            <LucideGithub className="hover:text-white transition-colors cursor-pointer" />
            <LucideLinkedin className="hover:text-white transition-colors cursor-pointer" />
          </div>
        </div>
      </Section>
    </div>
  );
}
