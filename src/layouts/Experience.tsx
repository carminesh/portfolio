import { motion } from 'framer-motion';
import React, { useMemo, useState } from 'react';
import LineConnector from '../components/LineConnector';
import ShowcaseItem from '../components/ShowcaseItem';
import StoryLine from '../components/StoryLine';
import { ExplainingModel } from '../models/ExplainingModel';

const Experience: React.FC = () => {
    const [experienceData, setExperienceData] = useState<ExplainingModel[]>([
        {
            date: 'September 2022 - Present',
            title: 'Alfonsino S.p.A',
            subtitle: 'Mobile Engineer - Full Time',
            description:
                'At my current work, I develop and maintain through the Agile methodologies the company three main application by using technologies like React Native, Redux and Typescript.\n I am dedicated to finding efficient solutions to problems, following design principles like SOLID to create scalable, maintainable, and easy-to-understand code and staying up to date with the latest technologies and best practices.',
        },
        {
            date: 'March 2022 - June 2022',
            title: 'Alfonsino S.p.A',
            subtitle: 'Mobile Engineer - Internship',
            description:
                'During my internship, I developed a mobile cross-platform app from scratch using React Native and React Native Web to manage the workflow of the customer service team.\nI was responsible for designing and implementing features, debugging and fixing issues, and testing the app to ensure it met the requirements and functioned correctly.\nI also worked closely with the customer service team to understand their workflow and design the app to meet their needs.\nThis experience provided me with valuable hands-on learning and the opportunity to apply my skills in a real-world setting.',
        },
    ]);

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
