import React from 'react';

const PROFILE_IMAGE_URL = "https://github.com/leecuongv/gemini-portfolio/blob/main/public/avt.jpg?raw=true";



export const Header: React.FC = () => (
    <header className="text-center lg:text-left">
        <div className="flex justify-center lg:justify-start">
            <img
                src={PROFILE_IMAGE_URL}
                alt="Lê Văn Cường"
                className="rounded-full w-32 h-32 object-cover border-4 border-slate-200 dark:border-slate-700 shadow-md"
            />
        </div>
        <h1 className="mt-4 text-3xl font-bold text-slate-900 dark:text-slate-100">
            LÊ VĂN CƯỜNG
        </h1>
        <h2 className="mt-1 text-lg font-medium text-slate-600 dark:text-slate-400">
            Software Engineer
        </h2>
    </header>
);
