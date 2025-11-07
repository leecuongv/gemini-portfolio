import React from 'react';
import { Project } from '../../types';
import { SparklesIcon, LinkIcon } from '../icons';
import { Section } from '../Section';

interface PersonalProjectsProps {
    projects: Project[];
}

const GithubIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
);

export const PersonalProjects: React.FC<PersonalProjectsProps> = ({ projects }) => (
    <Section title="Personal Projects" icon={<SparklesIcon className="w-7 h-7" />}>
        {projects.map((project, index) => (
            <div key={index} className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md transition-shadow hover:shadow-lg">
                <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-bold text-blue-600 dark:text-blue-400">{project.name}</h3>
                    <div className="flex gap-2">
                        {project.demoLink && (
                            <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-blue-500 dark:hover:text-blue-400 transition-colors" title="Live Demo">
                                <LinkIcon className="w-5 h-5" />
                            </a>
                        )}
                        {project.githubLink && (
                            <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-blue-500 dark:hover:text-blue-400 transition-colors" title="GitHub">
                                <GithubIcon className="w-5 h-5" />
                            </a>
                        )}
                    </div>
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
