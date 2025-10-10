const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 hero-text">About Me</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Passionate software engineer with a strong foundation in modern technologies and a drive for continuous learning
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="space-y-6">
              <div className="glass-card p-8 rounded-xl">
                <h3 className="text-xl font-semibold mb-4 text-primary">Background</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  I am currently pursuing my MSc in Software Engineering at Asia Pacific University, 
                  where I'm deepening my expertise in software quality analysis, project management, 
                  and cutting-edge technologies like Natural Language Processing and AI systems.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  My journey began with a background in Psychology, which has given me unique insights 
                  into user behavior and human-computer interaction, making me a more empathetic and 
                  user-focused developer.
                </p>
              </div>

              <div className="glass-card p-8 rounded-xl">
                <h3 className="text-xl font-semibold mb-4 text-secondary">Professional Experience</h3>
                <p className="text-muted-foreground leading-relaxed">
                  With over 5 years of experience in the insurance industry, I've developed strong 
                  analytical and problem-solving skills. My roles ranged from customer service to 
                  senior underwriting and data collection, giving me comprehensive business knowledge 
                  that I now apply to software development projects.
                </p>
              </div>

              <div className="glass-card p-8 rounded-xl">
                <h3 className="text-xl font-semibold mb-4 text-accent">Current Focus</h3>
                <p className="text-muted-foreground leading-relaxed">
                  I specialize in full-stack web development, AI technologies. 
                  My recent work includes AWS AI chatbot development and creating robust web applications 
                  with modern frameworks and best practices.
                </p>
              </div>
            </div>

            {/* Right Column - Stats & Highlights */}
            <div className="space-y-6">
              {/* Education Card */}
              <div className="glass-card p-8 rounded-xl glow-effect">
                <h3 className="text-xl font-semibold mb-6 hero-text">Education</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-primary pl-4">
                    <h4 className="font-semibold">MSc Software Engineering</h4>
                    <p className="text-muted-foreground">Asia Pacific University</p>
                    <p className="text-sm text-muted-foreground">Expected Dec 2025</p>
                  </div>
                  <div className="border-l-4 border-secondary pl-4">
                    <h4 className="font-semibold">Bachelor of Arts (Psychology)</h4>
                    <p className="text-muted-foreground">Yadanabon University</p>
                    <p className="text-sm text-muted-foreground">Completed 2017</p>
                  </div>
                </div>
              </div>


              {/* Personal Interests */}
              <div className="glass-card p-8 rounded-xl">
                <h3 className="text-xl font-semibold mb-4 text-accent">Beyond Code</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  When I'm not coding, I enjoy exploring new AI technologies, contributing to open-source projects, 
                  and staying updated with the latest trends in software engineering. I believe in continuous 
                  learning and regularly participate in tech communities and hackathons.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;