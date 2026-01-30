import Link from "next/link";

const projects = [
  {
    title: "AR Cycling Safety System",
    description: "Unity AR visualization with YOLO object detection on Jetson Orin Nano. 2nd place in senior capstone.",
    tags: ["Python", "Unity", "C#", "Computer Vision"],
    link: "/capstone.pdf",
  },
  {
    title: "Social Media Simulation",
    description: "Full-stack simulator using LLM-driven personas with pgvector similarity matching. Scales to 1000+ personas.",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "LLMs"],
    link: "#",
  },
  {
    title: "LeGO-LOAM RH",
    description: "LIDAR odometry and mapping for ROS2. Real-time 3D reconstruction.",
    tags: ["C++", "ROS2", "SLAM", "Point Clouds"],
    link: "https://github.com/jackgladowsky/LeGO_LOAM_RH",
  },
];

export default function Home() {
  return (
    <div className="space-y-16">
      {/* Hero */}
      <section className="space-y-4 pt-8">
        <h1 className="text-4xl font-bold text-white">Jack Gladowsky</h1>
        <p className="text-lg text-[var(--muted)] max-w-lg">
          Software engineer building things that ship. MS/BS in Computer Engineering at Northeastern. 
          Into ML, systems, and AR.
        </p>
        <div className="flex gap-4 text-sm">
          <a 
            href="https://github.com/jackgladowsky" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--muted)] hover:text-white transition-colors"
          >
            github
          </a>
          <a 
            href="https://linkedin.com/in/jackgladowsky" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--muted)] hover:text-white transition-colors"
          >
            linkedin
          </a>
          <a 
            href="mailto:gladowsky.j@northeastern.edu"
            className="text-[var(--muted)] hover:text-white transition-colors"
          >
            email
          </a>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-white">Projects</h2>
          <Link href="/projects" className="text-sm text-[var(--muted)] hover:text-white transition-colors">
            view all →
          </Link>
        </div>
        <div className="space-y-4">
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.link}
              className="block p-4 -mx-4 rounded-lg hover:bg-[var(--card)] transition-colors group"
            >
              <h3 className="font-medium text-white group-hover:text-[var(--accent)] transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-[var(--muted)] mt-1">
                {project.description}
              </p>
              <div className="flex gap-2 mt-2">
                {project.tags.map((tag) => (
                  <span 
                    key={tag} 
                    className="text-xs px-2 py-0.5 rounded bg-[var(--border)] text-[var(--muted)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Recent Posts placeholder */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-white">Writing</h2>
          <Link href="/blog" className="text-sm text-[var(--muted)] hover:text-white transition-colors">
            all posts →
          </Link>
        </div>
        <p className="text-[var(--muted)] text-sm">Coming soon...</p>
      </section>
    </div>
  );
}
