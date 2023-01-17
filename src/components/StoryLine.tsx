import React, { memo } from 'react';

interface StoryLineProps {
    innerCircleColor?: string;
    enablePing?: boolean;
}

const StoryLine: React.FC<StoryLineProps> = ({ innerCircleColor, enablePing }) => {
    return (
        <div className="flex-inital h-auto w-[4px] bg-purple-gradient-1 mr-6">
            <div className="w-[22px] h-[22px] rounded-full bg-purple-gradient-1 relative right-2 bottom-1 flex items-center justify-center">
                <div style={{ backgroundColor: innerCircleColor }} className="flex w-[10px] h-[10px] rounded-full bg-light-purple items-center justify-center z-10 dark:bg-theme-dark-bg-secondary">
                    {enablePing && <span className="animate-ping absolute inline-flex w-[12px] h-[12px] rounded-full bg-gray-900 opacity-90 z-0"></span>}
                </div>
            </div>
        </div>
    );
};

export default memo(StoryLine);
