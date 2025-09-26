import { Button } from '@/components/ui/button';
import { Download, ArrowDown } from 'lucide-react';
import heroBackground from '@/assets/hero-background.jpeg';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/85 to-background/95" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-primary/10 rounded-full blur-xl floating-animation" style={{ animationDelay: '0s' }} />
        <div className="absolute top-40 right-32 w-24 h-24 bg-secondary/10 rounded-full blur-xl floating-animation" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-accent/10 rounded-full blur-xl floating-animation" style={{ animationDelay: '4s' }} />
        <div className="absolute top-1/3 right-1/4 w-28 h-28 bg-primary-glow/10 rounded-full blur-xl floating-animation" style={{ animationDelay: '1s' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Welcome Text */}
          <p className="text-muted-foreground text-lg md:text-xl mb-4 animate-fade-in-up opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            Welcome to my portfolio
          </p>
          
          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in-up opacity-0" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
            <span className="hero-text text-shadow">Min Thant Wai</span>
          </h1>
          
          {/* Subtitle */}
          <h2 className="text-xl md:text-3xl lg:text-4xl font-semibold mb-8 text-muted-foreground animate-fade-in-up opacity-0" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
            Software Engineer & AI Developer
          </h2>
          
          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up opacity-0" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
            MSc Software Engineering student with expertise in AI development, web applications, 
            and full-stack solutions. Passionate about creating innovative software that solves real-world problems.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up opacity-0" style={{ animationDelay: '1s', animationFillMode: 'forwards' }}>
            <Button 
              size="lg" 
              className="bg-hero-gradient hover:shadow-glow transition-all duration-300 text-background font-semibold px-8"
              asChild
            >
              <a href="#projects">
                View My Work
              </a>
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="border-border/50 hover:border-primary/50 hover:shadow-glow transition-all duration-300 px-8"
              asChild
            >
              <a href="/resume.pdf" download>
                <Download className="w-4 h-4 mr-2" />
                Download Resume
              </a>
            </Button>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-fade-in-up opacity-0" style={{ animationDelay: '1.2s', animationFillMode: 'forwards' }}>
          <a 
            href="#about" 
            className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors duration-300"
          >
            <span className="text-sm mb-2">Scroll Down</span>
            <ArrowDown className="w-5 h-5 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;