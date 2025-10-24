import React from 'react';
import { Language } from '../../types';

interface LanguagesProps {
    languages: Language[];
}

export const Languages: React.FC<LanguagesProps> = ({ languages }) => (
    <section className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md w-full">
        <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200 border-b-2 border-yellow-400 pb-2 mb-4">Foreign Language</h3>
        {languages.map((lang, index) => (
            <div key={index}>
                <p className="font-semibold">{lang.name}: <span className="font-normal">{lang.proficiency}</span></p>
            </div>
        ))}
    </section>
);
