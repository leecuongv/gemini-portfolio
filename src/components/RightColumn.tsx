import React from 'react';
import { Experience, Project, Certificate, SkillCategory } from '../types';
import { Objective } from './sections/Objective';
import { TechnicalSkills } from './sections/TechnicalSkills';
import { WorkExperience } from './sections/WorkExperience';
import { PersonalProjects } from './sections/PersonalProjects';
import { Certificates } from './sections/Certificates';

interface RightColumnProps {
  experiences: Experience[];
  projects: Project[];
  certificates: Certificate[];
  technicalSkills: SkillCategory[];
}

export const RightColumn: React.FC<RightColumnProps> = ({ experiences, projects, certificates, technicalSkills }) => {
    return (
        <main>
            <Objective />
            <TechnicalSkills skills={technicalSkills} />
            <WorkExperience experiences={experiences} />
            <PersonalProjects projects={projects} />
            <Certificates certificates={certificates} />
        </main>
    );
};
