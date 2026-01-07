import { AnimatePresence, motion } from 'framer-motion';
import React, { PropsWithChildren, useState } from 'react';
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
    const [expanded, setExpanded] = useState(false);

    return (
        <ExplainingContext.Provider
            value={{
                ...education,
                expanded,
                toggle: () => setExpanded((e) => !e),
            }}
        >
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                variants={{
                    visible: { opacity: 1 },
                    hidden: { opacity: 0 },
                }}
                className={cn('relative group', className)}
            >
                {children}
            </motion.div>
        </ExplainingContext.Provider>
    );
}

type SubcomponentProps = {
    className?: string;
    showIcon?: boolean;
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
ExplainingCard.Date = function Date({ className, showIcon }: SubcomponentProps) {
    const { date } = useEducationContext();
    return (
        <div className="flex flex-row items-center gap-2 items-center">
            {showIcon && <Icon icon={'mdi:calendar'} />}
            <p className={cn('font-light text-light-gray pt-1 dark:text-theme-font-secondary', className)}>{date}</p>
        </div>
    );
};

//Badge
ExplainingCard.Badge = function Badge({ className }: SubcomponentProps) {
    const { skills } = useEducationContext();

    if (!skills || skills.length === 0) return null;

    return (
        <div className={cn('flex flex-wrap gap-2 mt-3', className)}>
            {skills.map((item, index) => (
                <span key={index} className="text-md font-medium text-zinc-400 bg-zinc-800/50 px-2 py-0.5 rounded border border-zinc-800">
                    {item}
                </span>
            ))}
        </div>
    );
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

ExplainingCard.Toggle = function Toggle({ className }: SubcomponentProps) {
    const { expanded } = useEducationContext();

    return <Icon icon={expanded ? 'mdi:chevron-up' : 'mdi:chevron-down'} width={24} height={24} color="#B08DFF" />;
};

ExplainingCard.Header = function Header({ children }: PropsWithChildren) {
    const { toggle, expanded } = useEducationContext();

    return (
        <div
            role="button"
            tabIndex={0}
            onClick={toggle}
            onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    toggle();
                }
            }}
            className={cn('p-4 cursor-pointer min-h-[120px] flex flex-col rounded-md transition-colors', !expanded && 'hover:bg-slate-200/5 dark:hover:bg-zinc-700/20')}
        >
            {children}
        </div>
    );
};

ExplainingCard.Details = function Details({ className }: SubcomponentProps) {
    const { expanded, detail } = useEducationContext();

    const points = detail
        ?.split('•')
        .map((p) => p.trim())
        .filter(Boolean);

    return (
        <AnimatePresence>
            {expanded && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden px-4 pb-4"
                >
                    <div className="h-px w-full bg-slate-200 my-3" />

                    <ul className="space-y-2">
                        {points?.map((point, index) => (
                            <li key={index} className="flex gap-2 text-md">
                                <span className="mt-2 w-1 h-1 rounded-full bg-purple-gradient-1 flex-shrink-0" />
                                <span>{point}</span>
                            </li>
                        ))}
                    </ul>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
