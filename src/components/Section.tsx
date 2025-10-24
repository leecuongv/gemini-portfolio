import React from 'react';

interface SectionProps {
    title: string;
    icon: React.ReactNode;
    children: React.ReactNode;
}

export const Section: React.FC<SectionProps> = ({ title, icon, children }) => (
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
