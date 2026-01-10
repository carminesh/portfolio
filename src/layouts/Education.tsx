import { ExplainingModel } from '../models/ExplainingModel';
import ExplainingCard from '../components/ExplainingCard/ExplainingCard';

const educationData: ExplainingModel[] = [
    {
        date: 'Oct. 2023 - Oct. 2025',
        title: 'Sapienza University of Rome',
        subtitle: 'Master’s Degree in Computer Science',
        description: `Score: 110/110 with Honors`,
    },
    {
        date: 'Sep. 2019 - Sep. 2022',
        title: 'University of Salerno',
        subtitle: 'Bachelor’s Degree in Computer Science',
        description: 'Score: 103/110',
    },
    {
        date: 'Sep. 2018 - July 2019',
        title: 'Apple Developer Academy',
        subtitle: 'Apple Developer Training Program',
        description: 'University of Naples Federico II and Apple',
    },
];

export default function Education() {
    return (
        <div className="mb-20 px-4">
            <h1 className="text-[40px] font-medium mb-10 text-transparent bg-clip-text bg-gradient-to-r from-purple-gradient-1 to-purple-gradient-2">Experience</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-5 justify-items-center mx-5">
                {educationData.map((item) => (
                    <ExplainingCard
                        key={item.title}
                        education={item}
                        className={`
                            w-full sm:max-w-[750px] 
                            bg-zinc-800/30 dark:bg-[#2c2c2c] 
                            text-gray-200 dark:text-theme-font-secondary 
                            p-6 rounded-xl
                            flex flex-col sm:flex-row items-center gap-6
                            
                        `}
                    >
                        {/* Icon */}
                        <div className="bg-zinc-900/30 dark:bg-zinc-700 p-4 rounded-xl flex-shrink-0">
                            <ExplainingCard.Icon
                                icon={item.title === 'Apple Developer Academy' ? 'material-symbols:computer-outline' : 'mdi:school-outline'}
                                width={item.title === 'Apple Developer Academy' ? 34 : 36}
                                height={item.title === 'Apple Developer Academy' ? 34 : 36}
                                color="#B08DFF"
                            />
                        </div>

                        {/* Contenuto */}
                        <div className="flex flex-col justify-between flex-1 gap-1">
                            <ExplainingCard.Title className="text-lg font-semibold" />
                            <ExplainingCard.Subtitle className="text-sm text-purple-300" />
                            <ExplainingCard.Description className="text-gray-400 font-medium" />
                            <ExplainingCard.Date className=" text-gray-500" showIcon />
                        </div>
                    </ExplainingCard>
                ))}
            </div>
        </div>
    );
}
