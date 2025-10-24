import React from 'react';
import { SoftSkill } from '../../types';

interface SoftSkillsProps {
    skills: SoftSkill[];
}

export const SoftSkills: React.FC<SoftSkillsProps> = ({ skills }) => (
    <section className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md w-full">
        <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200 border-b-2 border-yellow-400 pb-2 mb-4">Soft Skills</h3>
        <ul className="space-y-2">
            {skills.map((skill, index) => (
                <li key={index} className="flex items-center">
                    <span className="text-blue-500 dark:text-blue-400 mr-2">◆</span>
                    <span>{skill}</span>
                </li>
            ))}
        </ul>
    </section>
);
