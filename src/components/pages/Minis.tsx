import { ImageWithFallback } from "../figma/ImageWithFallback";

export function Minis() {
  const miniProjects = [
    {
      title: "Game",
      description: "Description",
      tech: "Unity, C#",
    },
    {
      title: "Game",
      description: "Description",
      tech: "Unity, C#",
    },
    {
      title: "Game",
      description: "Description",
      tech: "Unity, C#",
    },
    {
      title: "Game",
      description: "Description",
      tech: "Unity, C#",
    },
    {
      title: "Game",
      description: "Description",
      tech: "Unity, C#",
    },
    {
      title: "Game",
      description: "Description",
      tech: "Unity, C#",
    },
    {
      title: "Game",
      description: "Description",
      tech: "Unity, C#",
    },
    {
      title: "Game",
      description: "Description",
      tech: "Unity, C#",
    },
  ];

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="mb-8">
          <h1 className="text-primary mb-2">Mini Projects</h1>
          <p className="text-muted-foreground">
            Smaller experiments and prototypes exploring specific gameplay mechanics and systems
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {miniProjects.map((project, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-lg p-6 hover:shadow-md transition-shadow"
            >
              <div className="aspect-video bg-muted rounded-md mb-4 flex items-center justify-center">
                <div className="text-muted-foreground">Prototype</div>
              </div>
              <h3 className="text-primary mb-2">{project.title}</h3>
              <p className="text-foreground mb-3">{project.description}</p>
              <p className="text-sm text-muted-foreground">{project.tech}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
