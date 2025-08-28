
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github, 
  ExternalLink,
  Users,
  Building2
} from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Phone",
      value: "+254745200815",
      href: "tel:+254745200815"
    },
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "simon24njoroge@gmail.com",
      href: "mailto:simon24njoroge@gmail.com"
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Location",
      value: "Po Box 51956, Nairobi, Kenya",
      href: null
    }
  ];

  const socialLinks = [
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn",
      href: "#"
    },
    {
      icon: <Github className="w-5 h-5" />,
      label: "GitHub",
      href: "#"
    }
  ];

  const references = [
    {
      name: "Michael Kamau Kibugu",
      title: "Senior Manager CBS",
      company: "KCB BANK",
      phone: "0723672263"
    },
    {
      name: "Monicah Wanjiru",
      title: "Senior Manager, Finance",
      company: "Dalberg Research",
      phone: "0723424504"
    },
    {
      name: "Patric Muhanga",
      title: "Application Support Manager",
      company: "NCBA Group",
      phone: "0727913046"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 px-4 py-2 bg-cyber-primary/20 text-cyber-primary">
            <Mail className="w-4 h-4 mr-2" />
            Get In Touch
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            Let's Connect
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to contribute to your cybersecurity initiatives and IT infrastructure projects
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Contact Information */}
            <Card className="group hover:shadow-2xl transition-all duration-500 border-l-4 border-l-primary animate-glow">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-primary">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Mail className="w-5 h-5" />
                  </div>
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactInfo.map((contact, index) => (
                  <div key={index} className="flex items-center gap-4 p-3 rounded-lg hover:bg-accent/50 transition-colors">
                    <div className="p-2 bg-primary/10 rounded-lg text-primary">
                      {contact.icon}
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{contact.label}</p>
                      {contact.href ? (
                        <a 
                          href={contact.href}
                          className="font-medium hover:text-primary transition-colors"
                        >
                          {contact.value}
                        </a>
                      ) : (
                        <p className="font-medium">{contact.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Social Links & CTA */}
            <Card className="group hover:shadow-2xl transition-all duration-500 border-l-4 border-l-cyber-secondary animate-glow">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-cyber-secondary">
                  <div className="p-2 bg-cyber-secondary/10 rounded-lg">
                    <ExternalLink className="w-5 h-5" />
                  </div>
                  Connect Online
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-3">
                  {socialLinks.map((link, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      className="w-full justify-start gap-3 hover:bg-cyber-secondary hover:text-white transition-all duration-300"
                      asChild
                    >
                      <a href={link.href}>
                        {link.icon}
                        {link.label}
                      </a>
                    </Button>
                  ))}
                </div>
                
                <div className="pt-4 border-t">
                  <Button 
                    className="w-full gradient-primary text-primary-foreground hover:opacity-90 transition-all duration-300 transform hover:scale-105"
                    asChild
                  >
                    <a href="mailto:simon24njoroge@gmail.com">
                      <Mail className="w-4 h-4 mr-2" />
                      Send Email
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Professional References */}
          <Card className="bg-accent/50 border-2 border-primary/20">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-primary">Professional References</CardTitle>
                  <p className="text-sm text-muted-foreground mt-1">
                    Available upon request from industry professionals
                  </p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                {references.map((ref, index) => (
                  <div key={index} className="bg-card rounded-lg p-4 border hover:shadow-md transition-shadow">
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <Building2 className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm">{ref.name}</h4>
                        <p className="text-xs text-muted-foreground mb-1">{ref.title}</p>
                        <p className="text-xs text-primary font-medium">{ref.company}</p>
                        <p className="text-xs text-muted-foreground mt-2">{ref.phone}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
