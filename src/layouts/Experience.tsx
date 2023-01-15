import React, { useMemo, useState } from 'react';
import ShowcaseItem from '../components/ShowcaseItem';
import { ExplainingModel } from '../models/ExplainingModel';

const Experience: React.FC = () => {
    const [experienceData, setExperienceData] = useState<ExplainingModel[]>([
        {
            date: '2022.09 - Present',
            title: 'Alfonsino S.p.A',
            subtitle: 'Mobile Application Developer - Full Time',
            description:
                'At my current work, I develop and maintain through the Agile methodologies the company three main application by using technologies like React Native, Redux and Typescript.\n I am dedicated to finding efficient solutions to problems, following design principles like SOLID to create scalable, maintainable, and easy-to-understand code and staying up to date with the latest technologies and best practices.',
        },
        {
            date: '2022.03 - 2022.06',
            title: 'Alfonsino S.p.A',
            subtitle: 'Mobile Application Developer - Internship',
            description:
                'During my internship, I developed a mobile cross-platform app from scratch using React Native and React Native Web to manage the workflow of the customer service team.\nI was responsible for designing and implementing features, debugging and fixing issues, and testing the app to ensure it met the requirements and functioned correctly.\nI also worked closely with the customer service team to understand their workflow and design the app to meet their needs.\nThis experience provided me with valuable hands-on learning and the opportunity to apply my skills in a real-world setting.',
        },
    ]);

    const renderExperienceItems = useMemo(() => {
        return experienceData.map((item: ExplainingModel) => {
            return <ShowcaseItem item={item} />;
        });
    }, [experienceData]);

    return (
        <div className="w-auto h-auto bg-slate-50 py-14 pl-6 pr-4 lg:px-28">
            <h1 className="text-4xl font-medium">Experience</h1>
            {renderExperienceItems}
        </div>
    );
};

export default Experience;
