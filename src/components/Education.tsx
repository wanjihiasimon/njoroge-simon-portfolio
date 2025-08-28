
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, Calendar, MapPin } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "Cisco Networking Academy – Ethical Hacker",
      institution: "Self-Paced Program",
      period: "May 2025 - Ongoing",
      location: "Online",
      type: "Certification Program",
      description: "Comprehensive ethical hacking and penetration testing program",
      focus: [
        "Introduction to Ethical Hacking and Penetration Testing",
        "Planning and Scoping Penetration Testing Assessments",
        "Information Gathering & Vulnerability Scanning",
        "Social Engineering Attacks (phishing, impersonation, exploitation)",
        "Exploiting Wired, Wireless, and Application-Based Vulnerabilities",
        "Cloud, Mobile, and IoT Security Challenges",
        "Post-Exploitation Techniques (privilege escalation, persistence)",
        "Tools & Code Analysis for penetration testing",
        "Reporting & Communication of Security Findings"
      ]
    },
    {
      degree: "BSC in Business Information Technology",
      institution: "Dedan Kimathi University of Technology",
      period: "Completed",
      location: "Nyeri, Kenya",
      gpa: "Second Class - Upper Division",
      type: "Bachelor's Degree",
      description: "Comprehensive program combining business acumen with technical expertise",
      focus: [
        "Programming & Automation: Python, Java, scripting for system and data automation",
        "Database Systems: SQL, PL/SQL, data modeling, and implementation of relational databases",
        "Computer Networks: Network design, routing/switching, and protocols (CCNA-aligned)",
        "Linux Administration: System setup, command-line usage, shell scripting",
        "Data & Analytics: Data mining, warehousing, probability & statistics, data visualization",
        "Cybersecurity Fundamentals: Security concepts, threat models, and access management",
        "Business & Systems: Information systems management, Introduction to accounting, taxation, HCI, and business law"
      ]
    }
  ];

  const certifications = [
    "CCNAv7: Computer Networks",
    "Computer Hardware",
    "Endpoint Security",
    "Linux Essentials",
    "Introduction to Cybersecurity",
    "Python Essentials",
    "Operating System Basics",
    "IBM Software Development"
  ];

  return (
    <section id="education" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 px-4 py-2 bg-cyber-secondary/20 text-cyber-secondary">
            <GraduationCap className="w-4 h-4 mr-2" />
            Education & Certifications
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            Academic Foundation
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Continuous learning in cybersecurity, networking, and information technology
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Education */}
          <div className="grid lg:grid-cols-1 gap-8 mb-12">
            {education.map((edu, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 border-l-4 border-l-cyber-secondary animate-glow">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-cyber-secondary/10 rounded-lg group-hover:bg-cyber-secondary group-hover:text-white transition-all duration-300">
                      <GraduationCap className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <Badge variant="outline" className="text-xs">
                          {edu.type}
                        </Badge>
                        {edu.gpa && (
                          <Badge className="text-xs bg-cyber-success text-white">
                            {edu.gpa}
                          </Badge>
                        )}
                      </div>
                      <CardTitle className="text-xl md:text-2xl text-cyber-secondary mb-2">
                        {edu.degree}
                      </CardTitle>
                      <CardDescription className="text-base mb-2">
                        <span className="font-semibold text-foreground">{edu.institution}</span>
                      </CardDescription>
                      <div className="flex flex-col sm:flex-row gap-2 text-sm text-muted-foreground mb-3">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {edu.period}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {edu.location}
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground">{edu.description}</p>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm text-foreground mb-3">Key Focus Areas:</h4>
                    <ul className="grid md:grid-cols-2 gap-2">
                      {edu.focus.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <div className="w-1.5 h-1.5 bg-cyber-secondary rounded-full mt-2 flex-shrink-0"></div>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Certifications */}
          <Card className="bg-accent/50 border-2 border-primary/20">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl text-primary">Professional Certifications</CardTitle>
              </div>
              <CardDescription>
                Industry-recognized certifications from Cisco Networking Academy and IBM
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {certifications.map((cert, index) => (
                  <Badge 
                    key={index} 
                    variant="secondary" 
                    className="justify-center py-2 px-4 bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-default"
                  >
                    {cert}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Education;
