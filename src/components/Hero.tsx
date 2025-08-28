
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Shield, Mail, Phone, MapPin, Linkedin, Github, ExternalLink } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-accent/50 to-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-20 left-20 w-72 h-72 bg-cyber-primary/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyber-secondary/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Status Badge */}
          <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm font-medium bg-cyber-secondary/20 text-cyber-secondary hover:bg-cyber-secondary/30 transition-colors">
            <Shield className="w-4 h-4 mr-2" />
            Available for New Opportunities
          </Badge>
          
          {/* Name and Title */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gradient animate-float">
            NJOROGE SIMON
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-semibold text-muted-foreground mb-8">
            Cyber Security Analyst & IT Audit Specialist
          </h2>
          
          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Results-driven analyst with extensive experience in system operations, IT auditing, and monitoring critical 
            infrastructure performance. Passionate about scalable systems, secure operations, and enabling smooth digital 
            experiences in mission-driven environments.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              className="gradient-primary text-primary-foreground hover:opacity-90 transition-all duration-300 transform hover:scale-105 animate-glow px-8 py-4"
            >
              <Mail className="w-5 h-5 mr-2" />
              Get In Touch
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 px-8 py-4"
            >
              <ExternalLink className="w-5 h-5 mr-2" />
              View My Work
            </Button>
          </div>
          
          {/* Contact Info */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2 hover:text-primary transition-colors cursor-pointer">
              <Phone className="w-4 h-4" />
              +254745200815
            </div>
            
            <div className="flex items-center gap-2 hover:text-primary transition-colors cursor-pointer">
              <Mail className="w-4 h-4" />
              simon24njoroge@gmail.com
            </div>
            
            <div className="flex items-center gap-2 hover:text-primary transition-colors cursor-pointer">
              <MapPin className="w-4 h-4" />
              Nairobi, Kenya
            </div>
            
            <div className="flex items-center gap-2 hover:text-primary transition-colors cursor-pointer">
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </div>
            
            <div className="flex items-center gap-2 hover:text-primary transition-colors cursor-pointer">
              <Github className="w-4 h-4" />
              GitHub
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
