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
      title: "Clash of Clans Mod - UI Redesign",
      description:
        "A Clash of Clans game mod prototype built in Figma featuring a squadron-based combat system and enhanced player agency inspired by auto-chess strategy games. Designed and developed core systems including customizable unit targeting, offensive and defensive battle planning, and adaptive progression balancing for deeper, decision-driven gameplay.",
      role: "UX/UI Designer and Project Coordinator",
      tech: ["Figma", "Google Suites", "Miro"],
    },
    {
      title: "Seam Strike",
      description:
        "A tactical wave-based FPS featuring a unique quilt-based progression system and dynamic combat mechanics. Developed core systems including wave spawning logic, procedural upgrade paths, weapon ability customization, and strategic resource management.",
      role: "UX/UI and Economy Design",
      tech: ["GDevelop", "Pixel Art", "Git", "Figma", "Miro"],
    },
    {
      title: "Caring for Someone with Epilepsy",
      description:
        "Caring for Someone with Epilepsy is my first story line game made with Twine using JavaScript and HTML/CSS. Because it is a Twine file, it cannot be played, but I seek to create a simulator version while I learn 3D game engines.",
      role: "Narrative Designer and Developer",
      tech: ["Twine", "JavaScript", "HTML/CSS"],
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