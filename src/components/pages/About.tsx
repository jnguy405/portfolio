export function About() {
  return (
    <div className="min-h-screen">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-primary mb-8">About Me</h1>
        
        <div className="space-y-8">
          <section className="bg-card border border-border rounded-lg p-8">
            <h2 className="text-primary mb-4">Background</h2>
            <p className="mb-4">
              I'm a game design major with a specialization in gameplay programming. My passion lies in creating 
              engaging game mechanics and polished player experiences that bring game worlds to life.
            </p>
            <p>
              Through my academic journey and personal projects, I've developed a strong foundation in both 
              technical implementation and design theory, allowing me to bridge the gap between creative vision 
              and functional gameplay systems.
            </p>
          </section>

          <section className="bg-card border border-border rounded-lg p-8">
            <h2 className="text-primary mb-4">Skills</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="mb-3">Programming</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• C# / C++</li>
                  <li>• Unity & Unreal Engine</li>
                  <li>• Gameplay Systems Design</li>
                  <li>• AI & Pathfinding</li>
                  <li>• Physics Implementation</li>
                </ul>
              </div>
              <div>
                <h3 className="mb-3">Design</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Game Mechanics Design</li>
                  <li>• Level Design</li>
                  <li>• Player Experience</li>
                  <li>• Prototyping</li>
                  <li>• Playtesting & Iteration</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="bg-card border border-border rounded-lg p-8">
            <h2 className="text-primary mb-4">Philosophy</h2>
            <p>
              I believe great gameplay emerges from the intersection of solid technical implementation and 
              thoughtful design. Every system should serve the player experience, and every line of code 
              should contribute to making the game more engaging, intuitive, or fun.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
