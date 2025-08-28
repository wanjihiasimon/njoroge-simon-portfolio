import React from 'react';
import { Document, Page, Text, View, StyleSheet, PDFDownloadLink, Font } from '@react-pdf/renderer';
import { Button } from './ui/button';
import { Download } from 'lucide-react';

// Define styles for the PDF
const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    padding: 30,
    fontFamily: 'Helvetica',
  },
  header: {
    marginBottom: 20,
    textAlign: 'center',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1e293b',
    marginBottom: 5,
  },
  title: {
    fontSize: 16,
    color: '#475569',
    marginBottom: 10,
  },
  contactInfo: {
    fontSize: 10,
    color: '#64748b',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 10,
    marginBottom: 5,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#1e293b',
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#e2e8f0',
    paddingBottom: 3,
  },
  experienceItem: {
    marginBottom: 15,
  },
  jobTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#1e293b',
  },
  company: {
    fontSize: 11,
    color: '#475569',
    marginBottom: 2,
  },
  period: {
    fontSize: 10,
    color: '#64748b',
    marginBottom: 5,
  },
  achievement: {
    fontSize: 10,
    color: '#1e293b',
    marginBottom: 2,
    marginLeft: 10,
  },
  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 5,
  },
  skill: {
    fontSize: 9,
    backgroundColor: '#f1f5f9',
    color: '#334155',
    padding: 3,
    borderRadius: 3,
  },
  educationItem: {
    marginBottom: 10,
  },
  degree: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#1e293b',
  },
  institution: {
    fontSize: 10,
    color: '#475569',
  },
  projectItem: {
    marginBottom: 12,
  },
  projectTitle: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#1e293b',
  },
  projectDescription: {
    fontSize: 10,
    color: '#475569',
    marginBottom: 3,
  },
});

// CV Document Component
const CVDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.name}>Njoroge Simon</Text>
        <Text style={styles.title}>Full Stack Developer & Software Engineer</Text>
        <View style={styles.contactInfo}>
          <Text>+254 706 374 393</Text>
          <Text>•</Text>
          <Text>simonnjoroge@gmail.com</Text>
          <Text>•</Text>
          <Text>Nairobi, Kenya</Text>
        </View>
        <View style={styles.contactInfo}>
          <Text>linkedin.com/in/njoroge-simon</Text>
          <Text>•</Text>
          <Text>github.com/njoroge-simon</Text>
        </View>
      </View>

      {/* Experience Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>PROFESSIONAL EXPERIENCE</Text>
        
        <View style={styles.experienceItem}>
          <Text style={styles.jobTitle}>Full Stack Developer</Text>
          <Text style={styles.company}>Tech Solutions Ltd • Nairobi, Kenya</Text>
          <Text style={styles.period}>Jan 2023 - Present</Text>
          <Text style={styles.achievement}>• Developed and maintained 5+ web applications using React, Node.js, and MongoDB</Text>
          <Text style={styles.achievement}>• Implemented CI/CD pipelines reducing deployment time by 60%</Text>
          <Text style={styles.achievement}>• Led a team of 3 developers on multiple client projects</Text>
          <Text style={styles.achievement}>• Optimized database queries improving application performance by 40%</Text>
        </View>

        <View style={styles.experienceItem}>
          <Text style={styles.jobTitle}>Software Engineer</Text>
          <Text style={styles.company}>Innovation Hub • Remote</Text>
          <Text style={styles.period}>Jun 2021 - Dec 2022</Text>
          <Text style={styles.achievement}>• Built responsive web applications using React and TypeScript</Text>
          <Text style={styles.achievement}>• Integrated third-party APIs and payment gateways</Text>
          <Text style={styles.achievement}>• Collaborated with design teams to implement pixel-perfect UIs</Text>
          <Text style={styles.achievement}>• Mentored junior developers and conducted code reviews</Text>
        </View>

        <View style={styles.experienceItem}>
          <Text style={styles.jobTitle}>Junior Developer</Text>
          <Text style={styles.company}>StartupCo • Nairobi, Kenya</Text>
          <Text style={styles.period}>Jan 2020 - May 2021</Text>
          <Text style={styles.achievement}>• Developed mobile-first web applications using modern frameworks</Text>
          <Text style={styles.achievement}>• Participated in agile development processes and sprint planning</Text>
          <Text style={styles.achievement}>• Implemented automated testing reducing bugs by 30%</Text>
        </View>
      </View>

      {/* Skills Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>TECHNICAL SKILLS</Text>
        <View style={styles.skillsContainer}>
          <Text style={styles.skill}>JavaScript</Text>
          <Text style={styles.skill}>TypeScript</Text>
          <Text style={styles.skill}>React</Text>
          <Text style={styles.skill}>Node.js</Text>
          <Text style={styles.skill}>Python</Text>
          <Text style={styles.skill}>MongoDB</Text>
          <Text style={styles.skill}>PostgreSQL</Text>
          <Text style={styles.skill}>AWS</Text>
          <Text style={styles.skill}>Docker</Text>
          <Text style={styles.skill}>Git</Text>
          <Text style={styles.skill}>REST APIs</Text>
          <Text style={styles.skill}>GraphQL</Text>
        </View>
      </View>

      {/* Education Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>EDUCATION</Text>
        
        <View style={styles.educationItem}>
          <Text style={styles.degree}>Bachelor of Science in Computer Science</Text>
          <Text style={styles.institution}>University of Nairobi • 2016 - 2020</Text>
        </View>

        <View style={styles.educationItem}>
          <Text style={styles.degree}>Certified AWS Solutions Architect</Text>
          <Text style={styles.institution}>Amazon Web Services • 2022</Text>
        </View>
      </View>

      {/* Projects Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>KEY PROJECTS</Text>
        
        <View style={styles.projectItem}>
          <Text style={styles.projectTitle}>E-Commerce Platform</Text>
          <Text style={styles.projectDescription}>Full-stack e-commerce solution with React, Node.js, and Stripe integration</Text>
          <View style={styles.skillsContainer}>
            <Text style={styles.skill}>React</Text>
            <Text style={styles.skill}>Node.js</Text>
            <Text style={styles.skill}>MongoDB</Text>
            <Text style={styles.skill}>Stripe</Text>
          </View>
        </View>

        <View style={styles.projectItem}>
          <Text style={styles.projectTitle}>Task Management App</Text>
          <Text style={styles.projectDescription}>Collaborative task management with real-time updates and team features</Text>
          <View style={styles.skillsContainer}>
            <Text style={styles.skill}>TypeScript</Text>
            <Text style={styles.skill}>React</Text>
            <Text style={styles.skill}>Socket.io</Text>
            <Text style={styles.skill}>PostgreSQL</Text>
          </View>
        </View>

        <View style={styles.projectItem}>
          <Text style={styles.projectTitle}>Portfolio Website</Text>
          <Text style={styles.projectDescription}>Responsive portfolio showcasing projects and professional experience</Text>
          <View style={styles.skillsContainer}>
            <Text style={styles.skill}>React</Text>
            <Text style={styles.skill}>TypeScript</Text>
            <Text style={styles.skill}>Tailwind CSS</Text>
          </View>
        </View>
      </View>
    </Page>
  </Document>
);

// CV Generator Component
const CVGenerator = () => {
  return (
    <div className="flex justify-center">
      <PDFDownloadLink
        document={<CVDocument />}
        fileName="Njoroge_Simon_CV.pdf"
      >
        {({ blob, url, loading, error }) => (
          <Button
            variant="outline"
            className="flex items-center gap-2"
            disabled={loading}
          >
            <Download className="h-4 w-4" />
            {loading ? 'Generating...' : 'Download CV as PDF'}
          </Button>
        )}
      </PDFDownloadLink>
    </div>
  );
};

export default CVGenerator;