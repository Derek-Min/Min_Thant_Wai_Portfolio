import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';
import aiChatbotImage from '@/assets/project-ai-chatbot.jpeg';
import insuranceImage from '@/assets/project-insurance.jpeg';
import webappImage from '@/assets/project-webapp.jpeg';

const Projects = () => {
  const projects = [
    {
      title: 'AWS AI Chatbot',
      description: 'Intelligent conversational AI system built using AWS AI services including natural language processing and machine learning capabilities. Features advanced context understanding and multi-turn conversations.',
      image: aiChatbotImage,
      technologies: ['AWS AI Services', 'Python', 'Natural Language Processing', 'Machine Learning', 'Cloud Architecture'],
      category: 'AI Development',
      status: 'Hackathon Project',
      links: {
        github: 'https://github.com/Derek-Min',
        demo: '#'
      }
    },
    {
      title: 'Insurance Risk Management System',
      description: 'Comprehensive web-based platform for insurance underwriting and risk assessment. Streamlines policy evaluation process with automated risk scoring and data analytics dashboard.',
      image: insuranceImage,
      technologies: ['Java', 'SQL Database', 'Risk Analysis', 'Data Visualization', 'Web Development'],
      category: 'Enterprise Software',
      status: 'Professional Project',
      links: {
        github: 'https://github.com/Derek-Min',
        demo: '#'
      }
    },
    {
      title: 'Responsive Web Application',
      description: 'Modern, responsive web application showcasing full-stack development skills. Features clean UI/UX design, efficient backend architecture, and cross-platform compatibility.',
      image: webappImage,
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'Responsive Design'],
      category: 'Web Development',
      status: 'Portfolio Project',
      links: {
        github: 'https://github.com/Derek-Min',
        demo: 'https://minthantwai.pages.dev/'
      }
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      'AI Development': 'text-primary bg-primary/10 border-primary/20',
      'Enterprise Software': 'text-secondary bg-secondary/10 border-secondary/20',
      'Web Development': 'text-accent bg-accent/10 border-accent/20'
    };
    return colors[category as keyof typeof colors] || colors['Web Development'];
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 hero-text">Featured Projects</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A showcase of my technical skills and problem-solving capabilities across different domains
            </p>
          </div>

          {/* Projects Grid */}
          <div className="space-y-12">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className={`project-card animate-fade-in-up opacity-0 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
                style={{ 
                  animationDelay: `${index * 0.2}s`, 
                  animationFillMode: 'forwards' 
                }}
              >
                <div className="flex flex-col lg:flex-row h-full">
                  {/* Image Section */}
                  <div className="lg:w-1/2 relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 lg:h-full object-cover transition-transform duration-700 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent lg:bg-gradient-to-r" />
                  </div>

                  {/* Content Section */}
                  <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                    {/* Category & Status */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className={`px-3 py-1 text-sm rounded-full border ${getCategoryColor(project.category)}`}>
                        {project.category}
                      </span>
                      <span className="px-3 py-1 text-sm rounded-full bg-muted/50 text-muted-foreground border border-border/50">
                        {project.status}
                      </span>
                    </div>

                    <h3 className="text-2xl lg:text-3xl font-bold mb-4 hero-text">
                      {project.title}
                    </h3>

                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="mb-8">
                      <h4 className="text-sm font-semibold mb-3 text-primary">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 text-xs bg-muted/30 text-muted-foreground rounded-full border border-border/30"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-4">
                      <Button 
                        variant="outline" 
                        className="flex-1 hover:border-primary/50 hover:shadow-glow transition-all duration-300"
                        asChild
                      >
                        <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-2" />
                          View Code
                        </a>
                      </Button>
                      {project.links.demo !== '#' && (
                        <Button 
                          className="flex-1 bg-hero-gradient hover:shadow-glow transition-all duration-300"
                          asChild
                        >
                          <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Live Demo
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <div className="glass-card p-8 rounded-xl max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4 hero-text">Interested in My Work?</h3>
              <p className="text-muted-foreground mb-6">
                I'm always open to discussing new opportunities and collaborations. 
                Let's connect and explore how we can work together.
              </p>
              <Button 
                size="lg" 
                className="bg-hero-gradient hover:shadow-glow transition-all duration-300"
                asChild
              >
                <a href="#contact">Get In Touch</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;