import React, { memo } from 'react';

const LineConnector: React.FC = () => {
    return (
        <div className="flex flex-col flex-inital h-[60px] w-[4px] bg-purple-gradient-1 mr-6 tems-center justify-between">
            <div className="w-[4px] h-[10px] bg-slate-50"></div>
            <div className="w-[4px] h-[10px] bg-slate-50"></div>
            <div className="w-[4px] h-[10px] bg-slate-50"></div>
        </div>
    );
};

export default memo(LineConnector);
