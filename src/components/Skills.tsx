
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Shield, 
  Database, 
  Code, 
  Network, 
  Terminal, 
  Search,
  Lock,
  Globe,
  Languages,
  Trophy
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Cybersecurity",
      icon: <Shield className="w-6 h-6" />,
      color: "text-cyber-primary bg-cyber-primary/10",
      skills: [
        { name: "Endpoint Security", level: 90 },
        { name: "Vulnerability Assessment", level: 85 },
        { name: "Access Management", level: 88 },
        { name: "Incident Response", level: 80 },
        { name: "Security Auditing", level: 92 }
      ]
    },
    {
      title: "Programming & Scripting",
      icon: <Code className="w-6 h-6" />,
      color: "text-cyber-secondary bg-cyber-secondary/10",
      skills: [
        { name: "Python", level: 88 },
        { name: "Java", level: 75 },
        { name: "PL/SQL", level: 82 },
        { name: "Shell Scripting", level: 85 },
        { name: "Spring Boot", level: 70 }
      ]
    },
    {
      title: "Systems & Networks",
      icon: <Network className="w-6 h-6" />,
      color: "text-cyber-accent bg-cyber-accent/10",
      skills: [
        { name: "Linux Administration", level: 90 },
        { name: "Network Security", level: 85 },
        { name: "CCNA Protocols", level: 88 },
        { name: "VMware", level: 75 },
        { name: "Active Directory", level: 82 }
      ]
    },
    {
      title: "Data & Analytics",
      icon: <Database className="w-6 h-6" />,
      color: "text-cyber-success bg-cyber-success/10",
      skills: [
        { name: "SQL Query Writing", level: 92 },
        { name: "Data Analysis", level: 85 },
        { name: "Data Visualization", level: 80 },
        { name: "ETL Processes", level: 78 },
        { name: "T24 Banking System", level: 75 }
      ]
    }
  ];

  const tools = [
    "Nmap", "UiPath Orchestrator", "ITSM", "Microsoft Exchange",
    "Flask Framework", "Machine Learning", "Git/GitHub", "Wireshark"
  ];

  const languages = [
    { name: "English", level: "Native" },
    { name: "Kiswahili", level: "Native" }
  ];

  const interests = [
    "PicoCTF Player",
    "OverTheWire Games",
    "Travelling",
    "Cybersecurity Research",
    "Open Source Contributing"
  ];

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 px-4 py-2 bg-cyber-accent/20 text-cyber-accent">
            <Terminal className="w-4 h-4 mr-2" />
            Core Competencies
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            Technical Expertise
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive skill set spanning cybersecurity, system administration, and software development
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Core Skills Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {skillCategories.map((category, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 animate-glow">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3">
                    <div className={`p-3 rounded-lg ${category.color} group-hover:scale-110 transition-transform duration-300`}>
                      {category.icon}
                    </div>
                    <CardTitle className="text-lg">{category.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {category.skills.map((skill, i) => (
                      <div key={i} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium">{skill.name}</span>
                          <span className="text-xs text-muted-foreground">{skill.level}%</span>
                        </div>
                        <Progress value={skill.level} className="h-2" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Skills Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Tools & Technologies */}
            <Card className="bg-accent/50 border-2 border-primary/20">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Search className="w-5 h-5 text-primary" />
                  </div>
                  <CardTitle className="text-lg">Tools & Technologies</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {tools.map((tool, index) => (
                    <Badge 
                      key={index} 
                      variant="outline" 
                      className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                    >
                      {tool}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Languages */}
            <Card className="bg-accent/50 border-2 border-cyber-secondary/20">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-cyber-secondary/10 rounded-lg">
                    <Languages className="w-5 h-5 text-cyber-secondary" />
                  </div>
                  <CardTitle className="text-lg">Languages</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {languages.map((lang, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="font-medium">{lang.name}</span>
                      <Badge className="bg-cyber-secondary text-white text-xs">
                        {lang.level}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Interests & Activities */}
            <Card className="bg-accent/50 border-2 border-cyber-success/20">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-cyber-success/10 rounded-lg">
                    <Trophy className="w-5 h-5 text-cyber-success" />
                  </div>
                  <CardTitle className="text-lg">Interests</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {interests.map((interest, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-cyber-success rounded-full"></div>
                      <span className="text-sm">{interest}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
