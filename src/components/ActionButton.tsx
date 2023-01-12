import React from 'react';
import '../styles/ActionButton.css';

interface ActionButtonProps {
    text: string;
    logo: string;
    backgroundColor: string;
    color: string;
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const ActionButton: React.FC<ActionButtonProps> = ({ text, logo, backgroundColor, color, onClick }) => {
    return (
        <button id="Button" style={{ backgroundColor: backgroundColor }} onClick={onClick}>
            <img id="Logo" src={logo} alt="logo" />
            <span id="Button-text" style={{ color: color }}>
                {text}
            </span>
        </button>
    );
};

export default ActionButton;
