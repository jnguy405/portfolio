import { ImageWithFallback } from "../figma/ImageWithFallback";

export function Projects() {
  const detailedProjects = [
    {
      title: "Game",
      role: "Role",
      duration: "Duration",
      team: "# members",
      description: "Description",
      responsibilities: [
        "Implemented player movement system with state machine architecture",
        "Developed combat mechanics including light/heavy attacks and dodge rolling",
        "Created inventory and item system with equipment stats",
        "Built checkpoint and save system for player progression",
      ],
      technologies: ["Unity 2022", "C#", "Git", "Plastic SCM"],
      achievements: "Successfully showcased at campus game expo with 200+ playtests",
    },
    {
      title: "Game",
      role: "Role",
      duration: "Duration",
      team: "# members",
      description: "Description",
      responsibilities: [
        "Implemented player movement system with state machine architecture",
        "Developed combat mechanics including light/heavy attacks and dodge rolling",
        "Created inventory and item system with equipment stats",
        "Built checkpoint and save system for player progression",
      ],
      technologies: ["Unity 2022", "C#", "Git", "Plastic SCM"],
      achievements: "Successfully showcased at campus game expo with 200+ playtests",
    },
    {
      title: "Game",
      role: "Role",
      duration: "Duration",
      team: "# members",
      description: "Description",
      responsibilities: [
        "Implemented player movement system with state machine architecture",
        "Developed combat mechanics including light/heavy attacks and dodge rolling",
        "Created inventory and item system with equipment stats",
        "Built checkpoint and save system for player progression",
      ],
      technologies: ["Unity 2022", "C#", "Git", "Plastic SCM"],
      achievements: "Successfully showcased at campus game expo with 200+ playtests",
    }
  ];

  return (
    <div className="min-h-screen">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="mb-8">
          <h1 className="text-primary mb-2">Detailed Projects</h1>
          <p className="text-muted-foreground">
            In-depth look at major game development projects with full context and contributions
          </p>
        </div>

        <div className="space-y-8">
          {detailedProjects.map((project, index) => (
            <article
              key={index}
              className="bg-card border border-border rounded-lg p-8"
            >
              <div className="mb-6">
                <h2 className="text-primary mb-2">{project.title}</h2>
                <div className="flex flex-wrap gap-4 text-muted-foreground">
                  <span>{project.role}</span>
                  <span>•</span>
                  <span>{project.duration}</span>
                  <span>•</span>
                  <span>Team of {project.team}</span>
                </div>
              </div>

              <div className="aspect-video bg-muted rounded-md mb-6 flex items-center justify-center">
                <div className="text-muted-foreground">Project Screenshot</div>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="mb-2">Overview</h3>
                  <p className="text-foreground">{project.description}</p>
                </div>

                <div>
                  <h3 className="mb-2">Key Responsibilities</h3>
                  <ul className="space-y-2">
                    {project.responsibilities.map((resp, idx) => (
                      <li key={idx} className="text-foreground">
                        • {resp}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="mb-2">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-secondary/30 text-secondary-foreground rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-border">
                  <p className="text-muted-foreground italic">{project.achievements}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
