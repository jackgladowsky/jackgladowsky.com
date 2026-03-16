import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Jack Gladowsky",
  description: "Things I've built.",
};

const projects = [
  {
    title: "AR Cycling Safety System",
    description: "Senior capstone project. Unity-based AR visualization for on-bike HUD with YOLO object detection and radar fusion running on Jetson Orin Nano. Placed 2nd out of 30 groups.",
    tags: ["Python", "Unity", "C#", "Computer Vision", "Jetson"],
    github: null,
    demo: "/capstone.pdf",
    year: "2025",
  },
  {
    title: "Social Media Simulation",
    description: "Full-stack simulator of audience reactions using LLM-driven personas. Matched target audiences via embedding similarity with pgvector. Scaled to 1,000+ personas per run with async workers.",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "LLMs", "pgvector"],
    github: "https://github.com/jackgladowsky/sims",
    demo: null,
    year: "2025",
  },
  {
    title: "LeGO-LOAM RH",
    description: "LIDAR odometry and mapping for ROS2. Fork optimized for real-time 3D reconstruction on mobile robots.",
    tags: ["C++", "ROS2", "SLAM", "Point Clouds"],
    github: "https://github.com/jackgladowsky/LeGO_LOAM_RH",
    demo: null,
    year: "2024",
  },
  {
    title: "Hockey Sim",
    description: "Full-stack hockey simulation engine with realistic game mechanics, player development, and league management.",
    tags: ["TypeScript", "React", "Node.js", "PostgreSQL"],
    github: "https://github.com/jackgladowsky/hockey-sim",
    demo: null,
    year: "2024",
  },
  {
    title: "GradePace",
    description: "Better Canvas UI. Rebuilt the student dashboard experience with a cleaner interface and improved usability.",
    tags: ["TypeScript", "Next.js"],
    github: "https://github.com/jackgladowsky/gradepace",
    demo: null,
    year: "2025",
  },
  {
    title: "AgentBox",
    description: "AI agent that owns its own hardware. Autonomous agent with direct control over physical compute resources.",
    tags: ["TypeScript", "AI Agents"],
    github: "https://github.com/jackgladowsky/agentbox",
    demo: null,
    year: "2025",
  },
  {
    title: "Splat2MC",
    description: "Convert 3D Gaussian Splats to Minecraft particle datapacks. Bridges NeRF-style 3D captures with Minecraft's voxel world.",
    tags: ["Python", "3D Graphics", "Gaussian Splatting"],
    github: "https://github.com/jackgladowsky/splat2mc",
    demo: null,
    year: "2025",
  },
  {
    title: "Arena",
    description: "AI agents compete in real-time social games — Survivor but with LLMs. Agents form alliances, strategize, and vote each other out.",
    tags: ["TypeScript", "LLMs", "Multi-Agent"],
    github: "https://github.com/jackgladowsky/arena",
    demo: null,
    year: "2025",
  },
  {
    title: "Beam",
    description: "P2P file transfer in the browser — no signup, no limits, no data stored. WebRTC-based direct transfers.",
    tags: ["JavaScript", "WebRTC", "P2P"],
    github: "https://github.com/jackgladowsky/beam",
    demo: null,
    year: "2025",
  },
  {
    title: "TierJobs",
    description: "Prestige-ranked job board scraping top tech companies. Aggregates and ranks opportunities by company tier.",
    tags: ["TypeScript", "Scraping"],
    github: "https://github.com/jackgladowsky/tierjobs",
    demo: null,
    year: "2025",
  },
];

export default function Projects() {
  return (
    <div className="space-y-8 pt-8">
      <div>
        <h1 className="text-3xl font-bold text-white">Projects</h1>
        <p className="text-[var(--muted)] mt-2">Things I&apos;ve built.</p>
      </div>

      <div className="space-y-6">
        {projects.map((project) => (
          <div 
            key={project.title}
            className="p-6 rounded-lg bg-[var(--card)] border border-[var(--border)]"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <h2 className="text-lg font-semibold text-white">{project.title}</h2>
                <p className="text-sm text-[var(--muted)] mt-2">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="text-xs px-2 py-0.5 rounded bg-[var(--border)] text-[var(--muted)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 mt-4">
                  {project.github && (
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-[var(--accent)] hover:underline"
                    >
                      GitHub →
                    </a>
                  )}
                  {project.demo && (
                    <a 
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-[var(--accent)] hover:underline"
                    >
                      Demo →
                    </a>
                  )}
                </div>
              </div>
              <span className="text-sm text-[var(--muted)]">{project.year}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
