import React from 'react';
import { Experience } from '../../types';
import { BriefcaseIcon } from '../icons';
import { Section } from '../Section';

interface WorkExperienceProps {
    experiences: Experience[];
}

export const WorkExperience: React.FC<WorkExperienceProps> = ({ experiences }) => (
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
);
