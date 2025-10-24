import React from 'react';
import { Project } from '../../types';
import { SparklesIcon, LinkIcon } from '../icons';
import { Section } from '../Section';

interface PersonalProjectsProps {
    projects: Project[];
}

export const PersonalProjects: React.FC<PersonalProjectsProps> = ({ projects }) => (
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
);
