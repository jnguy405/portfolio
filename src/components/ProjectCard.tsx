import { ImageWithFallback } from "./figma/ImageWithFallback";

interface ProjectCardProps {
  title: string;
  description: string;
  role: string;
  tech: string[];
  imageUrl?: string;
}

export function ProjectCard({ title, description, role, tech, imageUrl }: ProjectCardProps) {
  return (
    <div className="w-full bg-card border border-border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="grid md:grid-cols-[300px_1fr] gap-6 p-6">
        <div className="aspect-video bg-muted rounded-md overflow-hidden flex items-center justify-center">
          {imageUrl ? (
            <ImageWithFallback
              src={imageUrl}
              alt={title}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="text-muted-foreground">Game Thumbnail</div>
          )}
        </div>
        <div className="flex flex-col gap-3">
          <div>
            <h3 className="text-primary mb-1">{title}</h3>
            <p className="text-muted-foreground">{role}</p>
          </div>
          <p className="text-foreground">{description}</p>
          <div className="flex flex-wrap gap-2 mt-auto">
            {tech.map((t) => (
              <span
                key={t}
                className="px-3 py-1 bg-secondary/30 text-secondary-foreground rounded-full text-sm"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
