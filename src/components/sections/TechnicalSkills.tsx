import React from 'react';
import { SkillCategory } from '../../types';
import { CodeIcon } from '../icons';
import { Section } from '../Section';

interface TechnicalSkillsProps {
    skills: SkillCategory[];
}

export const TechnicalSkills: React.FC<TechnicalSkillsProps> = ({ skills }) => (
    <Section title="Technical Skills" icon={<CodeIcon className="w-7 h-7" />}>
        <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {skills.map((category, index) => (
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
);
