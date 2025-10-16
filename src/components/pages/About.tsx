export function About() {
  return (
    <div className="min-h-screen">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-primary mb-8">About Me</h1>
        
        <div className="space-y-8">
          <section className="bg-card border border-border rounded-lg p-8">
            <h2 className="text-primary mb-4">Background</h2>
            <p className="mb-4">
              I'm a 3rd year computer science game design major with a specialization in gameplay programming with additional practice in UX/UI design, level design, and narrative structures. My passion lies in creating 
              engaging game mechanics along with developing functional, reusable tools and polished player experiences which bring multifaceted game worlds to life.
            </p>
            <p>
              Creeping upon these pursuits, I spend time editing and managing content for Slug Gaming at UC Santa Cruz, competing in the collegiate Rainbow 6 Siege scene alongside UCSC Amber, and creating Life, Skincare, & Cosmetics content on my Instagram and TikTok platforms.
            </p>
          </section>

          <section className="bg-card border border-border rounded-lg p-8">
            <h2 className="text-primary mb-4">Skills</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="mb-3">Intermediate</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• C/C++ DSA </li>
                  <li>• JavaScript</li>
                  <li>• TypeScript</li>
                  <li>• HTML/CSS</li>
                  <li>• Python</li>
                  <li>• Prototyping (Figma, Adobe XD)</li>
                </ul>
              </div>
              <div>
                <h3 className="mb-3">Learning</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• C#</li>
                  <li>• C++ GD</li>
                  <li>• Unity & Unreal Engine</li>
                  <li>• Adobe After Effects</li>
                  <li>• Godot</li>
                  <li>• React.js</li>
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