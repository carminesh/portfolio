import { motion } from 'framer-motion';
import React, { useMemo } from 'react';
import LineConnector from '../components/LineConnector';
import StoryLine from '../components/StoryLine';

import { ExplainingModel } from '../models/ExplainingModel';
import ExplainingCard from '../components/ExplainingCard/ExplainingCard';

const experienceData: ExplainingModel[] = [
    {
        date: 'July 2025 - Nov. 2025',
        subtitle: '3Bee',
        title: 'Frontend Engineer - Full Time',
        skills: ['React.js', 'TypeScript', 'Next.js', 'TanStack Query', 'Tailwind CSS', 'Storybook', 'Vercel', 'Design Tokens', 'Compound Pattern'],
        detail: `
            • Develop and maintain reusable UI components in React and TypeScript, ensuring scalability, accessibility, and visual consistency across products
            • Build performant and SEO-friendly applications with Next.js, integrating React Query for efficient data fetching and state management 
            • Collaborate with designers to define and implement Design Tokens and shared UI foundations, aligning code and design systems
            • Use Tailwind CSS to create maintainable, responsive, and design-consistent interfaces
            • Apply the Composition Pattern to design and extend the company’s internal UI library, promoting modularity and reusability
            • Maintain documentation and guide teams in using shared UI components via Storybook`,
    },
    {
        date: 'May 2023 - July 2025',
        subtitle: 'Tim S.p.A',
        title: 'Software Engineer - Full Time',
        skills: ['React.js', 'DevOps', 'CI/CD', 'FinOps', 'Docker', 'Jenkins', 'Ansible', 'Cloud', 'GCP', 'AWX', 'YML', 'Python'],
        detail: `
            • Designed and implemented a comprehensive DevOps toolchain, integrating CI/CD phases with Jenkins, SonarQube, and Ansible/AWX to streamline software development, testing, and deployment processes
            • Developed a FinOps pipeline using Ansible to automate infrastructure provisioning and management across 120+ machines deployed on Google Cloud, resulting in a 55% reduction in infrastructure costs 
            • Streamlined code deployment by designing and implementing automated CI/CD pipelines using Jenkins, reducing manual effort by 70% and increasing work productivity. 
            • Engineered web applications through React, implementing best practices to ensure high-performance and user-centric solutions, and scalable UI component library
            • Collaborated with design teams to convert UI/UX designs into responsive web interfaces using React, ensuring a seamless user experience across various devices and screen sizes
            • Integrated ESRI JS SDK with React to develop interactive, geospatial web applications, enabling advanced mapping and spatial analysis capabilities for end-users`,
    },
    {
        date: 'March 2022 - March 2023',
        subtitle: 'Alfonsino S.p.A',
        title: 'Frontend Engineer - Full Time',
        skills: ['React.js', 'JavaScript', 'Swift', 'React Native', 'React Native Web', 'Redux Toolkit', 'Git', 'S.O.L.I.D'],
        detail: `
            • Collaborated on the development of the three main company mobile applications that serve the needs of over 490,000 users across 11 regions of Italy through the use of tecnlogies such as React Native and React Native Web
            • Built some of the most important app features by using libraries like React Navigation, Reanimated and Redux Toolkit 
            • Increase performance of the maps by optimizing the in app implementation of the react-native-maps library
            • Rebuild from  scratch major feature components to improve performance and clean up code by following design principles like SOLID
            • Used Git for version control of the source code along with the maintenance of the builds 
            • Experienced in MVVM (within iOS) and other design patterns, supporting modularity and effective software refactoring
            • Used Git for version control of the source code along with the maintenance of the builds `,
    },
];

export default function Experience() {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            variants={{
                visible: { opacity: 1 },
                hidden: { opacity: 0 },
            }}
            className="w-auto h-auto bg-slate-50 pb-20 pl-6 pr-4 dark:bg-theme-dark-bg "
        >
            <h1 className="text-[40px] font-medium mb-10 text-transparent bg-clip-text bg-gradient-to-r from-purple-gradient-1 to-purple-gradient-2">Experience</h1>

            {experienceData.map((item, index) => (
                <div key={`${item.title}-${index}`} className="flex justify-center pr-4 dark:text-theme-font-secondary">
                    <StoryLine innerCircleColor={index === 0 ? '#a2ff8e' : ''} enablePing={index === 0} />

                    <div className="w-full max-w-[1000px] sm:max-w-[600px] md:max-w-[800px] lg:max-w-[1000px] flex-shrink-0">
                        <ExplainingCard education={item} className="m-4">
                            <ExplainingCard.Header>
                                <ExplainingCard.Date showIcon />
                                <div className="flex justify-between items-start">
                                    <ExplainingCard.Title />
                                    <ExplainingCard.Toggle />
                                </div>

                                <ExplainingCard.Subtitle />
                                <ExplainingCard.Badge />
                            </ExplainingCard.Header>

                            <ExplainingCard.Details />
                        </ExplainingCard>
                    </div>
                </div>
            ))}
        </motion.div>
    );
}
