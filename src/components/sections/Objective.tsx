import React from 'react';
import { TargetIcon } from '../icons';
import { Section } from '../Section';

export const Objective: React.FC = () => (
    <Section title="Objective" icon={<TargetIcon className="w-7 h-7" />}>
        <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md">
            <p className="italic text-slate-600 dark:text-slate-400">
                Contributing to the development and success of the company where I work & Strive to become a senior developer in the future.
            </p>
        </div>
    </Section>
);
