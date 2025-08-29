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
        <Text style={styles.name}>Simon Njoroge</Text>
        <Text style={styles.title}>ICT Audit Associate & Cybersecurity Professional</Text>
        <View style={styles.contactInfo}>
          <Text>+254745200815</Text>
          <Text>•</Text>
          <Text>simon24njoroge@gmail.com</Text>
          <Text>•</Text>
          <Text>Po Box 51956, Nairobi, Kenya</Text>
        </View>
        <View style={styles.contactInfo}>
          <Text>github.com/simonnjoroge</Text>
        </View>
      </View>

      {/* Experience Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>PROFESSIONAL EXPERIENCE</Text>
        
        <View style={styles.experienceItem}>
          <Text style={styles.jobTitle}>ICT Audit Associate</Text>
          <Text style={styles.company}>Ndakala Advisory LLP • Nairobi, Kenya</Text>
          <Text style={styles.period}>Mar 2025 - Present</Text>
          <Text style={styles.achievement}>• Planning and executing end-to-end IT audits for clients across multiple industries</Text>
          <Text style={styles.achievement}>• Assessing IT general controls (ITGCs), application controls, and cybersecurity posture</Text>
          <Text style={styles.achievement}>• Evaluating system configurations, access controls, and network security</Text>
          <Text style={styles.achievement}>• Preparing detailed audit reports and presenting actionable recommendations</Text>
          <Text style={styles.achievement}>• Supporting integrated audits with financial teams</Text>
        </View>

        <View style={styles.experienceItem}>
          <Text style={styles.jobTitle}>Banking System Operations Intern</Text>
          <Text style={styles.company}>KCB BANK KENYA LTD • Nairobi, Kenya</Text>
          <Text style={styles.period}>Sep 2024 - Nov 2024</Text>
          <Text style={styles.achievement}>• Supported ETL processes and gained experience with T24 banking system</Text>
          <Text style={styles.achievement}>• Collaborated in PL/SQL scripting to optimize database operations</Text>
          <Text style={styles.achievement}>• Configured and monitored automated workflows using UiPath Orchestrator</Text>
          <Text style={styles.achievement}>• Resolved system issues to minimize downtime and improve efficiency</Text>
          <Text style={styles.achievement}>• Gained proficiency in Active Directory, ITSM, and Microsoft Exchange</Text>
        </View>
      </View>

      {/* Skills Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>TECHNICAL SKILLS</Text>
        <View style={styles.skillsContainer}>
          <Text style={styles.skill}>Cybersecurity</Text>
          <Text style={styles.skill}>IT Audit</Text>
          <Text style={styles.skill}>Python</Text>
          <Text style={styles.skill}>Java</Text>
          <Text style={styles.skill}>PL/SQL</Text>
          <Text style={styles.skill}>Linux Administration</Text>
          <Text style={styles.skill}>Network Security</Text>
          <Text style={styles.skill}>T24 Banking System</Text>
          <Text style={styles.skill}>UiPath</Text>
          <Text style={styles.skill}>Active Directory</Text>
          <Text style={styles.skill}>VMware</Text>
          <Text style={styles.skill}>SQL</Text>
        </View>
      </View>

      {/* Education Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>EDUCATION</Text>
        
        <View style={styles.educationItem}>
          <Text style={styles.degree}>BSC in Business Information Technology</Text>
          <Text style={styles.institution}>Dedan Kimathi University of Technology • Second Class - Upper Division</Text>
        </View>

        <View style={styles.educationItem}>
          <Text style={styles.degree}>Cisco Networking Academy – Ethical Hacker</Text>
          <Text style={styles.institution}>Self-Paced Program • May 2025 - Ongoing</Text>
        </View>
      </View>

      {/* Certifications Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>PROFESSIONAL CERTIFICATIONS</Text>
        <View style={styles.skillsContainer}>
          <Text style={styles.skill}>CCNAv7: Computer Networks</Text>
          <Text style={styles.skill}>Computer Hardware</Text>
          <Text style={styles.skill}>Endpoint Security</Text>
          <Text style={styles.skill}>Linux Essentials</Text>
          <Text style={styles.skill}>Introduction to Cybersecurity</Text>
          <Text style={styles.skill}>Python Essentials</Text>
          <Text style={styles.skill}>Operating System Basics</Text>
          <Text style={styles.skill}>IBM Software Development</Text>
        </View>
      </View>

      {/* Projects Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>KEY PROJECTS</Text>
        
        <View style={styles.projectItem}>
          <Text style={styles.projectTitle}>Cybersecurity Portfolio</Text>
          <Text style={styles.projectDescription}>Professional portfolio showcasing cybersecurity expertise and IT audit experience</Text>
          <View style={styles.skillsContainer}>
            <Text style={styles.skill}>React</Text>
            <Text style={styles.skill}>TypeScript</Text>
            <Text style={styles.skill}>Tailwind CSS</Text>
          </View>
        </View>

        <View style={styles.projectItem}>
          <Text style={styles.projectTitle}>Network Security Scanner</Text>
          <Text style={styles.projectDescription}>Python-based network vulnerability scanner with automated reporting</Text>
          <View style={styles.skillsContainer}>
            <Text style={styles.skill}>Python</Text>
            <Text style={styles.skill}>Nmap</Text>
            <Text style={styles.skill}>Flask</Text>
          </View>
        </View>

        <View style={styles.projectItem}>
          <Text style={styles.projectTitle}>IT Audit Framework</Text>
          <Text style={styles.projectDescription}>Comprehensive framework for conducting IT audits and compliance assessments</Text>
          <View style={styles.skillsContainer}>
            <Text style={styles.skill}>Python</Text>
            <Text style={styles.skill}>SQL</Text>
            <Text style={styles.skill}>Django</Text>
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
        fileName="Simon_Njoroge_CV.pdf"
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