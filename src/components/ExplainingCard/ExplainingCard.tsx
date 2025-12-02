import { motion } from 'framer-motion';
import React, { PropsWithChildren } from 'react';
import { ExplainingModel } from '../../models/ExplainingModel';
import { ExplainingContext } from '../../context/ExplainingContext';
import useEducationContext from '../../hooks/useEducationContext';
import { Icon } from '@iconify/react';
import cn from 'classnames';

type ExplainingCardProps = PropsWithChildren & {
    education: ExplainingModel;
    className?: string;
};

export default function ExplainingCard({ education, className, children }: ExplainingCardProps) {
    return (
        <ExplainingContext.Provider value={education}>
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                variants={{
                    visible: { opacity: 1 },
                    hidden: { opacity: 0 },
                }}
                className={cn('w-auto h-auto bg-slate-50 py-14 pl-6 pr-4 dark:bg-[#2c2c2c] dark:text-theme-font-secondary m-4 rounded-md', className)}
            >
                {children}
            </motion.div>
        </ExplainingContext.Provider>
    );
}

type SubcomponentProps = {
    className?: string;
};

// Title
ExplainingCard.Title = function Title({ className }: SubcomponentProps) {
    const { title } = useEducationContext();
    return <h2 className={cn('font-semibold text-black text-2xl pt-1 dark:text-theme-font-secondary', className)}>{title}</h2>;
};

// Subtitle
ExplainingCard.Subtitle = function Subtitle({ className }: SubcomponentProps) {
    const { subtitle } = useEducationContext();
    return <h2 className={cn('font-semibold text-xl text-purple-gradient-1 pt-1', className)}>{subtitle}</h2>;
};

// Description
ExplainingCard.Description = function Description({ className }: SubcomponentProps) {
    const { description } = useEducationContext();
    return <p className={cn('pt-1 font-regular', className)}>{description}</p>;
};

// Date
ExplainingCard.Date = function Date({ className }: SubcomponentProps) {
    const { date } = useEducationContext();
    return <p className={cn('font-light text-light-gray pt-1 dark:text-theme-font-secondary', className)}>{date}</p>;
};

// Icon
type IconProps = SubcomponentProps & {
    icon?: string; // nome icona Iconify
    width?: number;
    height?: number;
    color?: string;
};

ExplainingCard.Icon = function IconComp({ icon, className, width = 24, height = 24, color }: IconProps) {
    if (!icon) return null;
    return <Icon icon={icon} className={className} width={width} height={height} color={color} />;
};
