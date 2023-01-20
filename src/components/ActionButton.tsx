import React from 'react';

interface ActionButtonProps {
    icon: string;
    text: string;
    buttonStyle?: React.CSSProperties;
    textColor: string;
    onClick: () => void;
}

const ActionButton: React.FC<ActionButtonProps> = ({ icon, text, buttonStyle, textColor, onClick }) => {
    return (
        <button style={buttonStyle} onClick={onClick} className="w-200px h-50px py-3 px-6 flex flex-row items-center rounded hover:brightness-125 cursor-pointer">
            <img src={icon} alt={'button icon'} className="icon" />
            <span style={{ color: textColor }} className="ml-3">
                {text}
            </span>
        </button>
    );
};

export default ActionButton;
