import { ExplainingModel } from '../models/ExplainingModel';
import ExplainingCard from '../components/ExplainingCard/ExplainingCard';

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
        description: 'The Apple Developer Academy is a partnership between the University of Naples Federico II and Apple.',
    },
];

export default function Education() {
    return (
        <div className="mb-20">
            <h1 className="text-[40px] font-medium mb-10 text-transparent bg-clip-text bg-gradient-to-r from-purple-gradient-1 to-purple-gradient-2">Education</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 justify-items-center mx-5">
                {educationData.map((item, index) => {
                    const isThirdCard = index === 2;

                    return (
                        <ExplainingCard
                            key={item.title}
                            education={item}
                            className={`
                          flex flex-col sm:flex-row items-center gap-4
                          w-full sm:max-w-[750px] 
                          ${isThirdCard ? 'sm:col-span- justify-center' : ''}
                        `}
                        >
                            {/* Icon */}
                            <div className="bg-[#1E293B] p-4 rounded-xl flex-shrink-0">
                                <ExplainingCard.Icon icon="mdi:school-outline" width={36} height={36} color="#B08DFF" />
                            </div>

                            {/* Contenuto */}
                            <div className="flex flex-col justify-between flex-1">
                                <ExplainingCard.Title className="text-base" />
                                <ExplainingCard.Subtitle className="text-sm text-gray-400" />
                                <ExplainingCard.Description className="text-xs text-[#94A3B8] font-bold" />
                                <ExplainingCard.Date className="text-xs text-gray-500" />
                            </div>
                        </ExplainingCard>
                    );
                })}
            </div>
        </div>
    );
}
