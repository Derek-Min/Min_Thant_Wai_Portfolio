import { Calendar, MapPin, Building } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'MSc Software Engineering Student',
      company: 'Asia Pacific University',
      location: 'Malaysia',
      period: 'Jan 2024 - Present',
      type: 'Education',
      description: 'Pursuing advanced studies in software engineering with focus on Software Quality Analysis, Project Management, Natural Language Processing, and modern development practices.',
      highlights: [
        'Software Quality Engineering & Testing',
        'Managing Software Development Projects',
        'Natural Language Processing & AI',
        'Object-Oriented Systems Engineering',
        'Internet Applications & Security Technologies'
      ]
    },
    {
      title: 'Data Collector',
      company: 'Grand Guardian Insurance Co., Ltd',
      location: 'Myanmar',
      period: 'Dec 2022 - Mar 2024',
      type: 'Professional',
      description: 'Specialized in collecting and organizing risk-related data to support underwriting decisions, ensuring accuracy in client information and risk assessment processes.',
      highlights: [
        'Risk data analysis and interpretation',
        'Database maintenance and data quality assurance',
        'Client information management systems',
        'Cross-functional collaboration with underwriting teams',
        'Process optimization and documentation'
      ]
    },
    {
      title: 'Senior Underwriter',
      company: 'Grand Guardian Insurance Co., Ltd',
      location: 'Myanmar',
      period: 'Dec 2019 - Dec 2022',
      type: 'Professional',
      description: 'Evaluated complex insurance applications, set policy conditions and premiums while balancing risk exposure with coverage approval requirements.',
      highlights: [
        'Risk assessment and policy evaluation',
        'Premium calculation and pricing strategies',
        'Stakeholder communication and client relations',
        'Regulatory compliance and documentation',
        'Team leadership and mentoring junior staff'
      ]
    },
    {
      title: 'Customer Service Representative',
      company: 'Grand Guardian Insurance Co., Ltd',
      location: 'Myanmar',
      period: 'Jan 2019 - Dec 2019',
      type: 'Professional',
      description: 'Delivered comprehensive client support, resolved complex issues, and built lasting customer relationships while assisting with sales and service communications.',
      highlights: [
        'Customer relationship management',
        'Issue resolution and problem-solving',
        'Sales support and service coordination',
        'Communication skills development',
        'Foundation in insurance industry knowledge'
      ]
    }
  ];

  const getTypeColor = (type: string) => {
    const colors = {
      Education: 'text-primary bg-primary/10 border-primary/20',
      Professional: 'text-secondary bg-secondary/10 border-secondary/20'
    };
    return colors[type as keyof typeof colors] || colors.Professional;
  };

  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 hero-text">Experience</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              My professional journey combining technical education with real-world business experience
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border transform md:-translate-x-1/2" />

            {/* Experience Items */}
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div
                  key={`${exp.company}-${exp.period}`}
                  className={`relative animate-fade-in-up opacity-0 ${
                    index % 2 === 0 ? 'md:text-left' : 'md:text-right'
                  }`}
                  style={{ 
                    animationDelay: `${index * 0.2}s`, 
                    animationFillMode: 'forwards' 
                  }}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-6 md:left-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background transform -translate-x-1/2 shadow-glow" />

                  {/* Content Card */}
                  <div className={`ml-16 md:ml-0 ${
                    index % 2 === 0 ? 'md:mr-1/2 md:pr-12' : 'md:ml-1/2 md:pl-12'
                  }`}>
                    <div className="glass-card p-6 md:p-8 rounded-xl glow-effect">
                      {/* Header */}
                      <div className="mb-4">
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          <span className={`px-3 py-1 text-xs rounded-full border ${getTypeColor(exp.type)}`}>
                            {exp.type}
                          </span>
                          <div className="flex items-center text-xs text-muted-foreground gap-1">
                            <Calendar className="w-3 h-3" />
                            {exp.period}
                          </div>
                        </div>
                        
                        <h3 className="text-xl md:text-2xl font-bold mb-2 hero-text">
                          {exp.title}
                        </h3>
                        
                        <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Building className="w-4 h-4" />
                            <span className="font-medium">{exp.company}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-muted-foreground leading-relaxed mb-6">
                        {exp.description}
                      </p>

                      {/* Highlights */}
                      <div>
                        <h4 className="font-semibold mb-3 text-primary">Key Highlights:</h4>
                        <ul className="space-y-2">
                          {exp.highlights.map((highlight) => (
                            <li
                              key={highlight}
                              className="flex items-start gap-2 text-sm text-muted-foreground"
                            >
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;