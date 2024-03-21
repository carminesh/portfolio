import { motion } from 'framer-motion';
import React, { useMemo, useState } from 'react';
import LineConnector from '../components/LineConnector';
import ShowcaseItem from '../components/ShowcaseItem';
import StoryLine from '../components/StoryLine';
import { ExplainingModel } from '../models/ExplainingModel';

const Experience: React.FC = () => {
    const experienceData: ExplainingModel[] = [
        {
            date: 'May 2023 - Present',
            title: 'Tim S.p.A',
            subtitle: 'Software Engineer - Full Time',
            description: `
            • Designed and deployed a FinOps pipeline with Ansible for 120+ machines, yielding substantial cost reductions, resulting in an over 55% reduction in infrastructure costs on Google Cloud Platform.
            • Developed and administered the DevOps toolchain, integrating CI/CD phases with Jenkins, GitLab, SonarQube, Nexus, and Ansible/AWX.
            • Engineered and developed different web applications with ReactJS`,
        },
        {
            date: 'March 2023 - May 2023',
            title: 'Xister Reply',
            subtitle: 'IT Consultant - Full Time',
            description: `Experienced IT consultant proficient in developing static websites and web applications using modern architectures
                like Jamstack, resulting in a 30% increase in site performance.
                • Engineered dynamic and responsive solutions by leveraging React and Next.js frameworks; resulting in a 25% increase
                in user engagement and a 15% decrease in loading rate.`,
        },
        {
            date: 'September 2022 - March 2023',
            title: 'Alfonsino S.p.A',
            subtitle: 'Mobile Engineer - Full Time',
            description: `Developed three core company mobile apps for 490,000+ users across 11 regions using React Native and React
                Native Web.
                • Enhanced map performance by optimizing react-native-maps library implementation.
                • Rebuilt key features for improved performance, adhering to SOLID design principles.
                • Led Stripe SDK integration for mobile app payments.
                • Integrated app modules natively with Swift and Java`,
        },
        {
            date: 'March 2022 - June 2022',
            title: 'Alfonsino S.p.A',
            subtitle: 'Mobile Engineer - Internship',
            description: `Created a hybrid mobile platform to streamline workflow management for the customer service team.
                • Engineered front-end login functionality with RESTful service calls, secure credential storage, and JWT token
                authentication.
                • Improved performance by minimizing unnecessary component rendering through adherence to React Native best
                practices, resulting in a 25% decrease in unnecessary component rendering.`,
        },
    ];

    const renderExperienceItems = useMemo(() => {
        return experienceData.map((item: ExplainingModel, index: number) => {
            return (
                <div className="flex flex-row self-start pr-4 dark:text-theme-font-secondary">
                    <StoryLine innerCircleColor={index === 0 ? '#a2ff8e' : ''} enablePing={index === 0 ? true : false} />
                    <ShowcaseItem item={item} />
                </div>
            );
        });
    }, [experienceData]);

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
            className="w-auto h-auto bg-slate-50 pb-20 pl-6 pr-4 dark:bg-theme-dark-bg"
        >
            <h1 className="text-[40px] font-medium mb-10 text-transparent bg-clip-text bg-gradient-to-r from-purple-gradient-1 to-purple-gradient-2">Experience</h1>
            <LineConnector />
            {renderExperienceItems}
        </motion.div>
    );
};

export default Experience;
