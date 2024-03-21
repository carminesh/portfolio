import React from 'react';
import { ExplainingModel } from '../models/ExplainingModel';

interface ShowcaseItemProps {
    item: ExplainingModel;
}

const ShowcaseItem: React.FC<ShowcaseItemProps> = ({ item }) => {
    const hasBullet = item.description.includes('•');
    const points = hasBullet ? item.description.split('•').filter((description) => description.trim() !== '') : [item.description];

    return (
        <div className="my-10 lg:w-3/4">
            <p className="font-light text-light-gray pt-1 dark:text-theme-font-secondary">{item.date}</p>
            <h2 className="font-semibold text-black text-2xl pt-1 dark:text-theme-font-secondary">{item.title}</h2>
            {item.subtitle && <h2 className="font-semibold text-xl text-purple-gradient-1 pt-1">{item.subtitle}</h2>}
            {points.map((point, index) => (
                <p key={index} className="pt-1 font-regular">
                    {hasBullet ? `• ${point.trim()}` : item.description}
                </p>
            ))}
        </div>
    );
};

export default ShowcaseItem;
