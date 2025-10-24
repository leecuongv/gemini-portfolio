import React, { useState, useEffect } from 'react';
import { Theme, Experience, Certificate, Project, SkillCategory, SoftSkill, Language } from './types';
import { LeftColumn } from './components/LeftColumn';
import { RightColumn } from './components/RightColumn';
import { ThemeToggle } from './components/ThemeToggle';

// Data can be moved to a separate file for better organization
const experiencesData: Experience[] = [
    {
      role: 'Java Software Developer',
      company: 'HPT Vietnam Corporation',
      period: '10/2022 – 08/2024',
      description: [
        'Developed Java-based backend systems to handle business logic, data/document storage, and integration with other backend systems such as CoreBanking, IBM Integration Designer, Digital Signature...',
        'Analyzed business requirements documents, collaborated with business analysts to provide consulting, solution selection, and technical design.',
        'Participated in internal research activities to enhance technical skills and develop new products for future markets/projects.',
      ],
    },
    {
      role: 'Internship Trainee',
      company: 'FPT Software',
      period: '07/2022 – 09/2022',
      description: [
        'Deepened programming skills, participated in soft skills courses to improve problem-solving abilities, teamwork skills, and presentation skills.',
        'Engaged in simulated projects to become familiar with real project environments.',
      ],
    },
];

const certificatesData: Certificate[] = [
    { name: 'Google Project Management', issuer: 'Coursera', date: '06/2023' },
    { name: 'AWS Academy Cloud Foundations', issuer: 'Amazon Web Services (AWS)', date: '09/2022' },
];

const projectsData: Project[] = [
    {
        name: "E-commerce Platform Backend",
        description: "Designed and implemented a robust backend for an e-commerce website using Spring Boot, featuring product management, user authentication, and order processing.",
        techStack: ["Java", "Spring Boot", "MySQL", "JWT", "REST API"],
        link: "https://github.com/leecuongv"
    },
    {
        name: "Task Management Application",
        description: "A full-stack task management tool built with Node.js and Express for the backend, and a simple frontend interface. Users can create, update, and track tasks.",
        techStack: ["Node.js", "Express", "MongoDB", "EJS"],
        link: "https://github.com/leecuongv"
    }
];

const technicalSkillsData: SkillCategory[] = [
    { name: 'Programming Language/Framework', skills: ['Java (Java Core, Spring Framework)', 'JavaScript (NodeJS, Express)'] },
    { name: 'Database', skills: ['SQL: MSSQL, OracleDB', 'NoSQL: MongoDB, Firebase'] },
    { name: 'Pattern', skills: ['Architecture: MVC, Three-tier'] },
    { name: 'Source Control', skills: ['Git', 'Github'] },
    { name: 'Load Testing', skills: ['Jmeter'] },
    { name: 'Code Analysis Tools', skills: ['SonarQube', 'SonarCloud'] },
    { name: 'DLC Model', skills: ['Waterfall', 'Agile'] },
];

const softSkillsData: SoftSkill[] = [
    'Self-study', 'Independent work', 'Teamwork', 'Planning', 'Problem solving'
];

const languagesData: Language[] = [
    { name: 'English', proficiency: 'TOEIC 615' }
];


const App: React.FC = () => {
  const [theme, setTheme] = useState<Theme>('light');

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(theme === 'light' ? 'dark' : 'light');
    root.classList.add(theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className="min-h-screen text-slate-700 dark:text-slate-300 transition-colors duration-300">
      <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      <div className="max-w-screen-xl mx-auto p-4 sm:p-6 lg:p-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-4 xl:col-span-3">
            <LeftColumn softSkills={softSkillsData} languages={languagesData} />
          </div>
          <div className="lg:col-span-8 xl:col-span-9 mt-12 lg:mt-0">
            <RightColumn
              experiences={experiencesData}
              projects={projectsData}
              certificates={certificatesData}
              technicalSkills={technicalSkillsData}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;