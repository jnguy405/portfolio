import { ProjectCard } from "../ProjectCard";

export function Home() {
  const projects = [
    {
      title: "Trickbit",
      description:
        "A 2D platformer featuring pathfinding enemy AI and dynamic environmental interactions. Developed core systems including finite state machine behaviors, particle effects, physics-based movement, and progressive multi-layer level design.",
      role: "Solo Developer",
      tech: [
        "Phaser.js",
        "Tiled",
        "Javascript",
        "HTML/CSS",
        "Git",
        "VS LiveServer",
      ],
    },
    {
      title: "Seam Strike",
      description:
        "A tactical wave-based FPS featuring a unique quilt-based progression system and dynamic combat mechanics. Developed core systems including wave spawning logic, procedural upgrade paths, weapon ability customization, and strategic resource management.",
      role: "UX/UI and Economy Design",
      tech: ["GDevelop", "Pixel Art", "Github", "Figma"],
    },
    {
      title: "Game Name",
      description:
        "Game Description",
      role: "Role",
      tech: ["App"],
    },
    {
      title: "Game Name",
      description:
        "Game Description",
      role: "Role",
      tech: ["App"],
    },
    {
      title: "Game Name",
      description:
        "Game Description",
      role: "Role",
      tech: ["App"],
    },
    {
      title: "Game Name",
      description:
        "Game Description",
      role: "Role",
      tech: ["App"],
    },
  ];

  return (
    <div className="min-h-screen">
      <header className="bg-primary text-primary-foreground py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="ml-[2%]">
            <h1 className="mb-2">Jenalee Nguyen</h1>
            <p className="text-xl opacity-90">
              Junior Gameplay Developer
            </p>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="mb-8">
          <h2 className="text-primary mb-2">
            Featured Projects
          </h2>
          <p className="text-muted-foreground">
            A selection of my game development work showcasing
            gameplay programming and system design
          </p>
        </div>

        <div className="flex flex-col gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </main>
    </div>
  );
}