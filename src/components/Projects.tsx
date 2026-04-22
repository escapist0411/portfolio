import { ExternalLink, Code, Briefcase, GraduationCap } from "lucide-react";
import TiltCard from "./ui/TiltCard";

const PROJECTS = [
  {
    id: 1,
    title: "Fake News Detection System",
    description: "AI-powered system to classify and detect fake news using advanced NLP and ML models.",
    tags: ["Python", "Machine Learning", "NLP"],
    github: "https://github.com/escapist0411/Fake-News-Detection/tree/main",
    live: null,
    accent: "rgba(59, 130, 246, 0.15)", // Subtle Blue glow
    icon: <Code size={16} />
  },
  {
    id: 2,
    title: "Brain MRI Tumor Diagnosis (AI)",
    description: "Deep learning-based diagnostic system for high-accuracy brain tumor detection from MRI scans.",
    tags: ["Python", "CNN", "TensorFlow"],
    github: "https://github.com/escapist0411/ai-brain-mri-tumor-diagnosis",
    live: null,
    accent: "rgba(168, 85, 247, 0.15)", // Subtle Purple glow
    icon: <Code size={16} />
  },
  {
    id: 3,
    title: "FurSpeak AI",
    description: "AI-based animal communication concept translating pet sounds into human-understandable insights.",
    tags: ["AI/ML", "React", "APIs"],
    github: "https://github.com/escapist0411/furspeak-ai",
    live: null,
    accent: "rgba(249, 115, 22, 0.15)", // Subtle Orange glow
    icon: <Code size={16} />
  },
  {
    id: 4,
    title: "Convergex Website",
    description: "Premium business website providing digital IT solutions and service infrastructures.",
    tags: ["Next.js", "Tailwind CSS"],
    github: null,
    live: "https://convergex.in",
    accent: "rgba(59, 130, 246, 0.15)", // Blue
    icon: <ExternalLink size={16} />
  },
  {
    id: 5,
    title: "Evotech IT Services",
    description: "My own IT services startup providing cutting-edge web development, AI solutions, and digital services.",
    tags: ["Full-stack", "Business Systems"],
    github: null,
    live: null,
    customAction: "Entrepreneur",
    accent: "rgba(34, 197, 94, 0.15)", // Green
    icon: <Briefcase size={16} />
  },
  {
    id: 6,
    title: "Teaching Experience Platform",
    description: "Teaching programming and computer fundamentals to students with a hands-on, practical learning approach.",
    tags: ["Java", "C++", "Fundamentals"],
    github: null,
    live: null,
    customAction: "Experience",
    accent: "rgba(234, 179, 8, 0.15)", // Yellow
    icon: <GraduationCap size={16} />
  },
];

export default function Projects() {
  return (
    <section className="relative z-20 bg-[#0B0B0F] py-32 px-6 md:px-12 text-white overflow-hidden">

      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <h2 className="text-5xl md:text-7xl font-extrabold tracking-tighter">
            Selected <span className="text-white/40">Work</span>
          </h2>
          <p className="mt-6 text-xl text-white/70 max-w-2xl">
            A diverse collection focusing on scale, engineering, and artificial intelligence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-[1000px]">
          {PROJECTS.map((project) => (
            <TiltCard key={project.id} activeColor={project.accent}>
              <div
                className="group relative flex flex-col justify-between p-8 rounded-3xl backdrop-blur-xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors h-full"
              >
                <div>
                  <h3 className="text-2xl font-bold mb-4 drop-shadow-md text-balance">{project.title}</h3>
                  <p className="text-white/60 leading-relaxed mb-8">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-medium bg-white/5 backdrop-blur-md text-white/80 border border-white/10 rounded-full shadow-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-4 mt-12 pt-6 border-t border-white/10">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 text-sm font-medium text-white hover:text-white/70 transition-colors"
                    >
                      {project.icon} Live Demo
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 text-sm font-medium text-white/60 hover:text-white transition-colors cursor-pointer relative z-20"
                    >
                      {project.icon} Source Code
                    </a>
                  )}
                  {project.customAction && (
                    <span
                      className="flex items-center gap-2 text-sm font-medium text-[#f97316]/80"
                    >
                      {project.icon} {project.customAction}
                    </span>
                  )}
                </div>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
