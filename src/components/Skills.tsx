import { Code, Database, Cloud, Brain, Globe, Shield } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: <Globe className="w-8 h-8" />,
      skills: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'Responsive Design'],
      color: 'primary'
    },
    {
      title: 'Backend Development',
      icon: <Code className="w-8 h-8" />,
      skills: ['Python', 'Java', 'C#', 'Object-Oriented Programming', 'API Development'],
      color: 'secondary'
    },
    {
      title: 'Database & Data',
      icon: <Database className="w-8 h-8" />,
      skills: ['SQL', 'Database Design', 'Data Analysis', 'Risk Assessment', 'Data Management'],
      color: 'accent'
    },
    {
      title: 'AI & Cloud',
      icon: <Brain className="w-8 h-8" />,
      skills: ['AWS AI Services', 'Natural Language Processing', 'Chatbot Development', 'Machine Learning'],
      color: 'primary'
    },
    {
      title: 'Software Engineering',
      icon: <Shield className="w-8 h-8" />,
      skills: ['Software Quality Analysis', 'Testing & Debugging', 'Project Management', 'Agile Development'],
      color: 'secondary'
    },
    {
      title: 'Cloud Technologies',
      icon: <Cloud className="w-8 h-8" />,
      skills: ['AWS Services', 'Cloud Architecture', 'Deployment', 'DevOps Practices'],
      color: 'accent'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      primary: 'text-primary border-primary/20 hover:border-primary/40',
      secondary: 'text-secondary border-secondary/20 hover:border-secondary/40',
      accent: 'text-accent border-accent/20 hover:border-accent/40'
    };
    return colors[color as keyof typeof colors] || colors.primary;
  };

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 hero-text">Technical Skills</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive toolkit built through education, professional experience, and continuous learning
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {skillCategories.map((category, index) => (
              <div
                key={category.title}
                className={`skill-card border ${getColorClasses(category.color)} animate-fade-in-up opacity-0`}
                style={{ 
                  animationDelay: `${index * 0.1}s`, 
                  animationFillMode: 'forwards' 
                }}
              >
                <div className={`${getColorClasses(category.color)} mb-4`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
                <div className="space-y-2">
                  {category.skills.map((skill) => (
                    <div
                      key={skill}
                      className="px-3 py-1 bg-muted/50 rounded-full text-sm text-muted-foreground border border-border/50"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Soft Skills Section */}
          <div className="glass-card p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-6 text-center hero-text">Core Competencies</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: 'Problem Solving', description: 'Analytical thinking and creative solutions' },
                { title: 'Team Collaboration', description: 'Effective communication and teamwork' },
                { title: 'Continuous Learning', description: 'Staying updated with latest technologies' },
                { title: 'Attention to Detail', description: 'Quality-focused development practices' }
              ].map((competency, index) => (
                <div
                  key={competency.title}
                  className={`text-center animate-fade-in-up opacity-0`}
                  style={{ 
                    animationDelay: `${0.6 + index * 0.1}s`, 
                    animationFillMode: 'forwards' 
                  }}
                >
                  <h4 className="font-semibold mb-2 text-primary">{competency.title}</h4>
                  <p className="text-sm text-muted-foreground">{competency.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;