import React from 'react';
import { Certificate } from '../../types';
import { AwardIcon } from '../icons';
import { Section } from '../Section';

interface CertificatesProps {
    certificates: Certificate[];
}

export const Certificates: React.FC<CertificatesProps> = ({ certificates }) => (
    <Section title="Certificates" icon={<AwardIcon className="w-7 h-7" />}>
        <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md">
            <div className="space-y-4">
                {certificates.map((cert, index) => (
                    <div key={index}>
                        <h3 className="font-bold text-slate-800 dark:text-slate-200">{cert.name}</h3>
                        <div className="flex justify-between items-baseline text-sm">
                            <p className="text-slate-600 dark:text-slate-400">{cert.issuer}</p>
                            <p className="text-slate-500 dark:text-slate-500">{cert.date}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </Section>
);
