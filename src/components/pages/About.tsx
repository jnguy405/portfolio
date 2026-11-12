import { AnimatedPageWrapper } from "../animation/AnimatedPageWrapper";
import { AnimatedSection } from "../animation/AnimatedSection";
import { ImageCarousel } from "../ImageCarousel";

export function About() {
    
  const carouselImages = [
    { src: "./carousel/image1.png", alt: "Image 1" },
    { src: "./carousel/image2.png", alt: "Image 2" },
    { src: "./carousel/image3.png", alt: "Image 3" },
    { src: "./carousel/image4.png", alt: "Image 4" },
    { src: "./carousel/image5.png", alt: "Image 5" },
    { src: "./carousel/image6.png", alt: "Image 6" },
    { src: "./carousel/image7.png", alt: "Image 7" },
    { src: "./carousel/image8.png", alt: "Image 8" },
    { src: "./carousel/image9.png", alt: "Image 9" },
    { src: "./carousel/image10.png", alt: "Image 10" },
  ];

  return (
    <AnimatedPageWrapper>
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Page Header */}
        <AnimatedSection
          delay={0}
          fromOpacity={0.8}
          className="mb-8"
        >
          <h1 className="text-foreground mb-8">About Me</h1>
        </AnimatedSection>
        
        <div className="space-y-8">
          {/* Background Section */}
          <AnimatedSection
            delay={100}
            fromOpacity={0.9}
            className="glass-panel p-8"
          >
            <h2 className="text-primary mb-4">Background</h2>
            <p className="mb-4">
              I'm the Social Media Community & Engagement Intern at G FUEL, driving media production and community outreach. Beyond G FUEL, I run social pages across gaming, cosmetics, fashion, and lifestyle, from my role as PR & Content Executive for Slug Gaming to my own content on Instagram and TikTok!
            </p>
            <p className="mb-4">
              At UC Santa Cruz, I study Computer Science Game Design with a specialization in gameplay programming. I love building mechanics that feel good to play and tools that make development smoother, grounded in UX/UI, level design, and narrative!
            </p>
            <p className="mb-4">
              My research explores AI in games and HCI, focusing on user-centered design for co-creative LLM systems. I'm driven by one question: how can AI work alongside people to create, rather than replace them?
            </p>
            <p>
              Off the clock, I compete in collegiate Rainbow Six Siege with UCSC Amber. Technical development or creative production, you'll find me there!
            </p>
          </AnimatedSection>

          {/* Carousel Section */}
          <AnimatedSection
            delay={50}
            fromOpacity={0.9}
            className="glass-panel about-carousel-section"
          >
            <ImageCarousel
              images={carouselImages}
              autoPlayInterval={3000}
              showControls={true}
            />
          </AnimatedSection>

          {/* Skills Section */}
          <AnimatedSection
            delay={200}
            fromOpacity={0.9}
            className="glass-panel p-8"
          >
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
          </AnimatedSection>

          {/* Philosophy Section */}
          <AnimatedSection
            delay={300}
            fromOpacity={0.9}
            className="glass-panel p-8"
          >
            <h2 className="text-primary mb-4">Philosophy</h2>
            <p>
              I believe great gameplay emerges from the intersection of accessible technical implementation and 
              user-centered design. Every system should serve the player experience, and every line of code 
              should contribute to making the game more engaging, intuitive, and fun.
            </p>
          </AnimatedSection>
        </div>
      </div>
    </AnimatedPageWrapper>
  );
}