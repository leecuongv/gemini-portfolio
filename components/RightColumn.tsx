
import React from 'react';
import { Experience, Project, Certificate, SkillCategory } from '../types';
import { LinkIcon, BriefcaseIcon, CodeIcon, AwardIcon, TargetIcon, SparklesIcon } from './icons';

interface RightColumnProps {
  experiences: Experience[];
  projects: Project[];
  certificates: Certificate[];
  technicalSkills: SkillCategory[];
}

const Section: React.FC<{ title: string; icon: React.ReactNode; children: React.ReactNode }> = ({ title, icon, children }) => (
    <section className="mb-12">
        <div className="flex items-center mb-6">
            <span className="text-yellow-500 mr-3">{icon}</span>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">{title}</h2>
        </div>
        <div className="space-y-8">
            {children}
        </div>
    </section>
);


export const RightColumn: React.FC<RightColumnProps> = ({ experiences, projects, certificates, technicalSkills }) => {
    return (
        <main>
            <Section title="Objective" icon={<TargetIcon className="w-7 h-7" />}>
                <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md">
                    <p className="italic text-slate-600 dark:text-slate-400">
                        Contributing to the development and success of the company where I work & Strive to become a senior developer in the future.
                    </p>
                </div>
            </Section>

            <Section title="Technical Skills" icon={<CodeIcon className="w-7 h-7" />}>
                 <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {technicalSkills.map((category, index) => (
                            <div key={index}>
                                <h4 className="font-semibold text-slate-800 dark:text-slate-200 mb-2">{category.name}</h4>
                                <ul className="list-disc list-inside text-sm space-y-1">
                                    {category.skills.map((skill, i) => <li key={i}>{skill}</li>)}
                                </ul>
                            </div>
                        ))}
                    </div>
                 </div>
            </Section>

            <Section title="Work Experience" icon={<BriefcaseIcon className="w-7 h-7" />}>
                {experiences.map((exp, index) => (
                    <div key={index} className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md transition-shadow hover:shadow-lg">
                        <div className="flex justify-between items-start mb-2">
                            <div>
                                <h3 className="text-lg font-bold text-blue-600 dark:text-blue-400">{exp.role}</h3>
                                <p className="font-semibold text-slate-800 dark:text-slate-200">{exp.company}</p>
                            </div>
                            <p className="text-sm text-slate-500 dark:text-slate-400 whitespace-nowrap">{exp.period}</p>
                        </div>
                        <ul className="list-disc list-inside space-y-2 text-slate-600 dark:text-slate-400">
                            {exp.description.map((item, i) => <li key={i}>{item}</li>)}
                        </ul>
                    </div>
                ))}
            </Section>
            
            <Section title="Personal Projects" icon={<SparklesIcon className="w-7 h-7" />}>
                 {projects.map((project, index) => (
                    <div key={index} className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md transition-shadow hover:shadow-lg">
                        <div className="flex justify-between items-center mb-2">
                            <h3 className="text-lg font-bold text-blue-600 dark:text-blue-400">{project.name}</h3>
                            {project.link && (
                                <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
                                    <LinkIcon className="w-5 h-5" />
                                </a>
                            )}
                        </div>
                        <p className="mb-3 text-slate-600 dark:text-slate-400">{project.description}</p>
                        <div className="flex flex-wrap gap-2">
                            {project.techStack.map((tech, i) => (
                                <span key={i} className="bg-slate-200 dark:bg-gray-700 text-slate-700 dark:text-slate-300 text-xs font-medium px-2.5 py-1 rounded-full">{tech}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </Section>

            <Section title="Certificates" icon={<AwardIcon className="w-7 h-7" />}>
                <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md">
                    <div className="space-y-4">
                        {certificates.map((cert, index) => (
                            <div key={index}>
                                <h3 className="font-bold text-slate-800 dark:text-slate-200">{cert.name}</h3>
                                <div className="flex justify-between items-baseline text-sm">
                                    <p className="text-slate-600 dark:text-slate-400">{cert.issuer}</p>
                                    <p className="text-slate-500 dark:text-slate-500">{cert.date}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>
        </main>
    );
};
