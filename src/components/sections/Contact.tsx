import React from 'react';
import { MailIcon, GithubIcon, LinkedinIcon, PhoneIcon } from '../icons';

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

export const Contact: React.FC = () => (
    <section className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md">
        <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200 border-b-2 border-yellow-400 pb-2 mb-4">Contact</h3>
        <div className="flex flex-col">
            <ContactItem icon={<MailIcon />} href="mailto:vancuongle65@gmail.com" text="vancuongle65@gmail.com" />
            <ContactItem icon={<GithubIcon />} href="https://github.com/leecuongv" text="github.com/leecuongv" />
            <ContactItem icon={<LinkedinIcon />} href="https://linkedin.com/in/leecuongv" text="linkedin.com/in/leecuongv" />
            <ContactItem icon={<PhoneIcon />} href="tel:+84389365835" text="+84 389 365 835" />
        </div>
    </section>
);
