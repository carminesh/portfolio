import React, { useMemo, useState } from 'react';
import ShowcaseItem from '../components/ShowcaseItem';
import { ExplainingModel } from '../models/ExplainingModel';

const Education: React.FC = () => {
    const [experienceData, setExperienceData] = useState<ExplainingModel[]>([
        {
            date: '2019.09 - 2022.09 (3 years)',
            title: 'University of Salerno',
            description: 'Bachelor’s Degree in Computer Science',
        },
        {
            date: '2018.09 - 2019.07',
            title: 'Apple Developer Academy',
            description:
                "The Apple Developer Academy is a partnership between the University of Naples Federico II and Apple.\nTraining at the Academy is aimed at app development for the world's most innovative and vibrant app ecosystem.\nThe program focuses on software development, startup creation and app design, with an emphasis on creativity and collaboration.",
        },
    ]);

    const renderExperienceItems = useMemo(() => {
        return experienceData.map((item: ExplainingModel) => {
            return <ShowcaseItem item={item} />;
        });
    }, [experienceData]);

    return (
        <div className="w-auto h-auto bg-slate-50 py-14 pl-6 pr-4 lg:px-28">
            <h1 className="text-4xl font-medium">Education</h1>
            {renderExperienceItems}
        </div>
    );
};

export default Education;
