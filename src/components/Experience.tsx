
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Calendar, MapPin, Shield, Database, Network } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "ICT Audit Associate",
      company: "Ndakala Advisory LLP",
      companySubtitle: "Certified Public Accountants",
      location: "246A Owashika Road, Lavington, Nairobi, Kenya",
      period: "Mar 2025 - Present",
      icon: <Shield className="w-6 h-6" />,
      achievements: [
        "Planning and executing end-to-end IT audits for clients across multiple industries, including SACCOs, corporates, NGOs, NPOs, and educational institutions",
        "Assessing IT general controls (ITGCs), application controls, cybersecurity posture, and compliance with regulatory and industry standards",
        "Evaluating system configurations, access controls, network security, and data integrity to identify vulnerabilities and risks",
        "Reviewing and testing ICT policies, procedures, and infrastructure, recommending practical, risk-based improvements",
        "Preparing detailed audit reports and presenting actionable recommendations to client management teams",
        "Collaborating with client stakeholders to remediate identified issues and strengthen ICT controls",
        "Supporting integrated audits with financial teams to assess ICT systems and financial processes intersection"
      ],
      skills: ["IT Audit", "Risk Assessment", "Compliance", "Cybersecurity", "Report Writing"]
    },
    {
      title: "Banking System Operations Intern",
      company: "KCB BANK KENYA LTD",
      companySubtitle: "Technology Division - Head Office",
      location: "Kencom House, Moi Avenue, Nairobi, Kenya",
      period: "Sep 2024 - Nov 2024",
      icon: <Database className="w-6 h-6" />,
      achievements: [
        "Supported ETL processes and gained practical experience with T24 banking system architecture",
        "Collaborated in PL/SQL scripting to troubleshoot and optimize database operations",
        "Participated in configuring, executing, and monitoring automated workflows using UiPath Orchestrator",
        "Assisted in applications and network monitoring to ensure system stability",
        "Resolved system issues to minimize downtime and improve operational efficiency",
        "Gained insights into integrating digital platforms with core banking systems and third parties",
        "Acquired proficiency in Active Directory, ITSM, Microsoft Exchange, and Office suite",
        "Directed incident escalation and participated in root cause analysis for recurring issues"
      ],
      skills: ["T24", "PL/SQL", "UiPath", "Active Directory", "VMware", "Network Monitoring"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 px-4 py-2 bg-cyber-primary/20 text-cyber-primary">
            <Building2 className="w-4 h-4 mr-2" />
            Professional Experience
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            Career Journey
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Building secure, scalable systems and ensuring compliance across diverse industries
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-500 border-l-4 border-l-primary animate-glow">
              <CardHeader className="pb-4">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    {exp.icon}
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl md:text-2xl text-primary mb-2">
                      {exp.title}
                    </CardTitle>
                    <CardDescription className="text-base mb-2">
                      <span className="font-semibold text-foreground">{exp.company}</span>
                      {exp.companySubtitle && (
                        <span className="block text-sm text-muted-foreground">{exp.companySubtitle}</span>
                      )}
                    </CardDescription>
                    <div className="flex flex-col sm:flex-row gap-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm leading-relaxed">
                      <div className="w-2 h-2 bg-cyber-secondary rounded-full mt-2 flex-shrink-0"></div>
                      {achievement}
                    </li>
                  ))}
                </ul>
                
                <div className="flex flex-wrap gap-2 pt-4">
                  {exp.skills.map((skill, i) => (
                    <Badge 
                      key={i} 
                      variant="outline" 
                      className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
