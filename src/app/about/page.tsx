import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Jack Gladowsky",
  description: "Software engineer at Northeastern University.",
};

export default function About() {
  return (
    <div className="space-y-8 pt-8">
      <h1 className="text-3xl font-bold text-white">About</h1>
      
      <div className="prose space-y-4 text-[var(--foreground)]">
        <p>
          I&apos;m Jack, a 5th year at Northeastern doing a combined BS/MS in Computer Engineering 
          with a focus on machine learning and computer vision.
        </p>
        
        <p>
          I like building things that actually work. Not demos, not proofs of concept — 
          things that ship and solve real problems.
        </p>

        <p>
          Currently interested in: AR/VR systems, LLM agents, high-performance computing, 
          and anything at the intersection of hardware and ML.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-white">Experience</h2>
        <div className="space-y-6">
          <div className="border-l-2 border-[var(--border)] pl-4">
            <h3 className="font-medium text-white">Shield AI</h3>
            <p className="text-sm text-[var(--muted)]">Software Engineer Intern — Summer 2026</p>
            <p className="text-sm text-[var(--muted)] mt-1">C++ simulation engineering</p>
          </div>
          <div className="border-l-2 border-[var(--border)] pl-4">
            <h3 className="font-medium text-white">OnPoint AR-AI</h3>
            <p className="text-sm text-[var(--muted)]">Software Engineer Co-op — Jan–Jun 2025</p>
            <p className="text-sm text-[var(--muted)] mt-1">
              Built .NET workflow services, C# installers, automated device provisioning
            </p>
          </div>
          <div className="border-l-2 border-[var(--border)] pl-4">
            <h3 className="font-medium text-white">Emphysys Inc.</h3>
            <p className="text-sm text-[var(--muted)]">Software Engineer Co-op — Jan–Jun 2024</p>
            <p className="text-sm text-[var(--muted)] mt-1">
              Real-time calibration systems, ARM TrustZone security, test automation
            </p>
          </div>
          <div className="border-l-2 border-[var(--border)] pl-4">
            <h3 className="font-medium text-white">Lumicell Inc.</h3>
            <p className="text-sm text-[var(--muted)]">Software Quality Engineer Co-op — Jan–Aug 2023</p>
            <p className="text-sm text-[var(--muted)] mt-1">
              Medical device validation, regulatory compliance, usability studies
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-white">Skills</h2>
        <div className="flex flex-wrap gap-2">
          {[
            "Python", "C", "C++", "C#", "TypeScript", "SQL",
            "React", "Next.js", ".NET", "FastAPI", "Node.js",
            "Docker", "Git", "AWS", "GCP",
            "Machine Learning", "Computer Vision", "Embedded Systems"
          ].map((skill) => (
            <span 
              key={skill}
              className="text-sm px-3 py-1 rounded-full bg-[var(--card)] border border-[var(--border)] text-[var(--muted)]"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section className="pt-4">
        <a 
          href="/resume.pdf" 
          className="inline-flex items-center gap-2 text-sm text-[var(--accent)] hover:underline"
        >
          Download Resume →
        </a>
      </section>
    </div>
  );
}
