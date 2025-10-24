
import React from 'react';
import { MailIcon, GithubIcon, LinkedinIcon, PhoneIcon } from './icons';
import { SoftSkill, Language } from '../types';

interface LeftColumnProps {
    softSkills: SoftSkill[];
    languages: Language[];
}

const ContactItem: React.FC<{ icon: React.ReactNode; href: string; text: string }> = ({ icon, href, text }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="group flex items-center py-2 text-sm">
        <span className="w-8 h-8 mr-3 flex items-center justify-center text-slate-500 dark:text-slate-400 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors">
            {icon}
        </span>
        <span className="group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors break-all">
            {text}
        </span>
    </a>
);

export const LeftColumn: React.FC<LeftColumnProps> = ({ softSkills, languages }) => {
    return (
        <div className="lg:sticky lg:top-8 flex flex-col gap-8">
            <header className="text-center lg:text-left">
                <div className="flex justify-center lg:justify-start">
                    <img
                        src="https://picsum.photos/seed/le-van-cuong/128/128"
                        alt="Lê Văn Cường"
                        className="rounded-full w-32 h-32 border-4 border-slate-200 dark:border-slate-700 shadow-md"
                    />
                </div>
                <h1 className="mt-4 text-3xl font-bold text-slate-900 dark:text-slate-100">
                    LÊ VĂN CƯỜNG
                </h1>
                <h2 className="mt-1 text-lg font-medium text-slate-600 dark:text-slate-400">
                    Software Engineer
                </h2>
            </header>

            <section className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md">
                <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200 border-b-2 border-yellow-400 pb-2 mb-4">Contact</h3>
                <div className="flex flex-col">
                    <ContactItem icon={<MailIcon />} href="mailto:vancuongle65@gmail.com" text="vancuongle65@gmail.com" />
                    <ContactItem icon={<GithubIcon />} href="https://github.com/leecuongv" text="github.com/leecuongv" />
                    <ContactItem icon={<LinkedinIcon />} href="https://linkedin.com/in/leecuongv" text="linkedin.com/in/leecuongv" />
                    <ContactItem icon={<PhoneIcon />} href="tel:+84389365835" text="+84 389 365 835" />
                </div>
            </section>
            
            <section className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md">
                <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200 border-b-2 border-yellow-400 pb-2 mb-4">Education</h3>
                <p className="font-bold text-slate-800 dark:text-slate-200">HO CHI MINH CITY UNIVERSITY OF TECHNOLOGY AND EDUCATION</p>
                <p className="text-sm">Major: Software Engineering</p>
                <p className="text-sm">GPA: 3.2/4</p>
            </section>
            
            <section className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md">
                <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200 border-b-2 border-yellow-400 pb-2 mb-4">Soft Skills</h3>
                <ul className="space-y-2">
                    {softSkills.map((skill, index) => (
                        <li key={index} className="flex items-center">
                            <span className="text-blue-500 dark:text-blue-400 mr-2">◆</span>
                            <span>{skill}</span>
                        </li>
                    ))}
                </ul>
            </section>
            
            <section className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md">
                <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200 border-b-2 border-yellow-400 pb-2 mb-4">Foreign Language</h3>
                {languages.map((lang, index) => (
                    <div key={index}>
                        <p className="font-semibold">{lang.name}: <span className="font-normal">{lang.proficiency}</span></p>
                    </div>
                ))}
            </section>
        </div>
    );
};
