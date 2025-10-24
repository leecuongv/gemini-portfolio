import React from 'react';
import { SoftSkill, Language } from '../types';
import { Header } from './sections/Header';
import { Contact } from './sections/Contact';
import { Education } from './sections/Education';
import { SoftSkills } from './sections/SoftSkills';
import { Languages } from './sections/Languages';

interface LeftColumnProps {
    softSkills: SoftSkill[];
    languages: Language[];
}

export const LeftColumn: React.FC<LeftColumnProps> = ({ softSkills, languages }) => {
    return (
        <div className="lg:sticky lg:top-8 flex flex-col gap-8">
            <Header />
            <Contact />
            <Education />
            <SoftSkills skills={softSkills} />
            <Languages languages={languages} />
        </div>
    );
};
