import { motion } from 'framer-motion';
import React, { useMemo, useState } from 'react';
import ShowcaseItem from '../components/ShowcaseItem';
import { ExplainingModel } from '../models/ExplainingModel';

const Education: React.FC = () => {
    const educationData: ExplainingModel[] = [
        {
            date: 'October 2023 - October 2025',
            title: 'Sapienza University of Rome',
            subtitle: 'Master’s Degree in Computer Science',
            description: `Score: 110/110 with Honors`,
        },
        {
            date: 'September 2019 - September 2022',
            title: 'University of Salerno',
            subtitle: 'Bachelor’s Degree in Computer Science',
            description: 'Score: 103/110',
        },
        {
            date: 'September 2018 - July 2019',
            title: 'Apple Developer Academy',
            description:
                "The Apple Developer Academy is a partnership between the University of Naples Federico II and Apple.\nTraining at the Academy is aimed at app development for the world's most innovative and vibrant app ecosystem.\nThe program focuses on software development, startup creation and app design, with an emphasis on creativity and collaboration.",
        },
    ];

    const renderEducationItems = useMemo(() => {
        return educationData.map((item: ExplainingModel) => {
            return <ShowcaseItem item={item} />;
        });
    }, [educationData]);

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
            className="w-auto h-auto bg-slate-50 py-14 pl-6 pr-4 dark:bg-theme-dark-bg dark:text-theme-font-secondary"
        >
            <h1 className="text-[40px] font-medium text-transparent bg-clip-text bg-gradient-to-r from-purple-gradient-1 to-purple-gradient-2">Education</h1>
            <div className="lg:flex">{renderEducationItems}</div>
        </motion.div>
    );
};

export default Education;
