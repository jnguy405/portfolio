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
      title: "Game Name",
      description:
        "Game Description",
      role: "Role",
      tech: ["Tech Stack"],
    },
  ];

  // Tech tiles: provide `img` for an image URL (absolute or from `public/`), and `href` to make the tile a link.
  const techs = [
    { name: "Phaser", img: "", href: "" },
    { name: "JavaScript", img: "", href: "" },
    { name: "HTML/CSS", img: "", href: "" },
    { name: "Git", img: "", href: "" },
    { name: "Figma", img: "", href: "" },
    { name: "Tiled", img: "", href: "" },
    { name: "React", img: "", href: "" },
    { name: "Phaser2", img: "", href: "" },
    { name: "ToolX", img: "", href: "" },
    { name: "ToolY", img: "", href: "" },
  ];

  const profileImage = "16.JPG";

  return (
    <div className="min-h-screen">
      <header className="bg-primary text-primary-foreground py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="ml-[2%]">
            <div className="flex items-center justify-between">
              {profileImage ? (
                <div
                  className="mr-4 rounded-full overflow-hidden border border-accent/20"
                  style={{ width: 400, height: 400 }}
                >
                  <img
                    src={profileImage}
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
              ) : null}

              <div className="text-right">
                <h1 className="mb-2">Jenalee Nguyen</h1>
                <p className="text-xl opacity-90">Junior Gameplay Developer</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="mb-8">
          <div className="bg-accent/5 border border-accent/10 rounded-lg p-6">
            <h3 className="text-lg font-medium mb-1">Technologies</h3>
            <p className="text-muted-foreground mb-4">Tools and technologies I commonly use</p>
            <div
              className="grid gap-4"
              style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(80px, 1fr))' }}
            >
              {techs.map((t) => (
                <div key={t.name} className="w-full">
                  {t.href ? (
                    <a href={t.href} target="_blank" rel="noreferrer" className="block">
                      <div className="aspect-square rounded-md overflow-hidden shadow-sm">
                        {t.img ? (
                          <img src={t.img} alt={t.name} className="w-full h-full object-cover" />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-sm font-semibold" title={t.name}>
                            {t.name}
                          </div>
                        )}
                      </div>
                    </a>
                  ) : (
                    <div className="aspect-square rounded-md overflow-hidden shadow-sm">
                      {t.img ? (
                        <img src={t.img} alt={t.name} className="w-full h-full object-cover" />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-sm font-semibold" title={t.name}>
                          {t.name}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

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